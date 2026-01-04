// src/components/Misc/Page/Feedback.tsx
import React, { useId } from 'react';
import { createPortal } from 'react-dom';
import { useFeedbackContext } from '@site/src/context/FeedbackContext';
import Translate, { translate } from '@docusaurus/Translate';
import { useLockBodyScroll } from '@docusaurus/theme-common/internal';
import { ThumbsUpIcon, ThumbsDownIcon } from '@site/src/components/Icons';

import clsx from 'clsx';

import styles from './styles.module.css';

// Defines available reasons for negative feedback
const REASONS = [
  { id: 'hard-to-understand', key: 'theme.feedback.modal.reason.understand', message: 'Content was confusing or hard to follow' },
  { id: 'examples-does-not-work', key: 'theme.feedback.modal.reason.examples', message: 'An example is incorrect / doesn\'t work' },
  { id: 'cant-find', key: 'theme.feedback.modal.reason.find', message: 'Couldn\'t find what I need' },
  { id: 'out-of-date', key: 'theme.feedback.modal.reason.outdate', message: 'Out of date/obsolete' },
  { id: 'other', key: 'theme.feedback.modal.reason.other', message: 'Other' },
];

const ROOT_PORTAL = '__docusaurus';

export const Feedback: React.FC< { pageId: string, isSidebar?: boolean }> = ({ pageId, isSidebar = false }) => {
  // Pulls all state and logic from a centralized context
  const {
    modalRef, vote, loading, submitFeedback,
    modalState, setModalState,
    selectedReasons, setSelectedReasons,
    comment, setComment,
    error, setError,
    submitted, setSubmitted,
    resetForm
  } = useFeedbackContext();

  // Generates a unique ID for a11y attributes
  const textareaId = `feedback-comment-${useId()}`;

  // Toggles body scroll lock based on modal visibility
  useLockBodyScroll(modalState !== 'hidden');

  // Handles "Yes" / "No" vote
  const handleVote = (choice: 'rating-yes' | 'rating-no') => {
    // If already submitted in this session, show "thanks" message
    if (submitted){
      setModalState('thanks');
      return;
    }

    // Prepares for a new feedback entry
    resetForm();

    if (choice === 'rating-yes') {
      submitFeedback({ choice });
      setModalState('thanks'); // Mark as submitted for current session
      setSubmitted(true); // Show thanks message immediately
    } else {
      setModalState('form');
    }
  };

  // Manages selected checkbox reasons
  const handleReasonChange = (reasonId: string) => {
    if (error) setError(''); // Clears validation error on interaction

    setSelectedReasons(prev =>
      prev.includes(reasonId)
        ? prev.filter(id => id !== reasonId)
        : [...prev, reasonId]
    );
  };

  // Handles submission of detailed feedback form
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    // Validates that at least one reason is selected
    if (selectedReasons.length === 0) {
      setError(translate({ id: 'theme.feedback.modal.error.noReason', message: 'At least one item should be selected.' }));
      return;
    }

    setError('');
    setSubmitted(true); // Mark as submitted for current session
    submitFeedback({ choice: 'rating-no', reason: selectedReasons.join(', '), comment });
    setModalState('thanks'); // Transition form to thanks message
  };

  if (loading) {
    return null;
  }

  return (
    <>
      {/* Initial feedback buttons container */}
      <div className={clsx(styles['container'], isSidebar && styles['is-sidebar'])}>
        <section className={styles['wrap']}>
          <div className={styles['title']}>
              <Translate id="theme.feedback.wasThisHelpful">Was this page helpful?</Translate>
          </div>
          <div className={styles['buttons']}>
            <button className={clsx(styles['button'], vote === 'rating-yes' && styles['filled'])} onClick={() => handleVote('rating-yes')}>
              <span className={styles['icon']}>
                <span><ThumbsUpIcon /></span>
              </span>
              <span><Translate id="theme.feedback.yes">Yes</Translate></span>
            </button>
            <button className={clsx(styles['button'], vote === 'rating-no' && styles['filled'])} onClick={() => handleVote('rating-no')}>
              <span className={styles['icon']}>
                <span><ThumbsDownIcon /></span>
              </span>
              <span><Translate id="theme.feedback.no">No</Translate></span>
            </button>
          </div>
        </section>
      </div>

      {/* Renders "thanks" modal via a portal */}
      {modalState == 'thanks' && createPortal(
        <div className={styles['modal-overlay']}>
          <div className={styles['modal-content']} ref={modalRef}>
              <div className={clsx(styles['modal-header'], styles['thanks'])}>
                <h4 className={styles['title']}>
                  <Translate id="theme.feedback.thanks.title">Thank you!</Translate>
                </h4>
                <button onClick={() => setModalState('hidden')} className={styles['close-button']}>&times;</button>
              </div>
              <div className={clsx(styles['modal-body'], styles['thanks'])}>
                <span>
                  <Translate id="theme.feedback.thanks.subtitle">We'll use your feedback to improve this page.</Translate>
                </span>
              </div>
          </div>
        </div>
      , document.getElementById(ROOT_PORTAL)
      )}

      {/* Renders feedback form modal via a portal */}
      {modalState == 'form' && createPortal(
        <div className={styles['modal-overlay']}>
          <div className={styles['modal-content']} ref={modalRef}>
            <div className={styles['modal-header']}>
              <h4 className={styles['title']}>
                <Translate id="theme.feedback.modal.title">Help us improve this page</Translate>
              </h4>
              <button onClick={() => setModalState('hidden')} className={styles['close-button']}>&times;</button>
            </div>
            <form onSubmit={handleSubmitForm}>
              <div className={styles['modal-body']}>
                <div className={clsx(styles['label'], styles['reason'])}>
                  <Translate id="theme.feedback.modal.reason">Please specify what you didn't like</Translate>
                  <span className={styles['required-indicator']} />
                </div>
                <div className={styles['reasons-list']}>
                  {REASONS.map(({ id, key, message }) => (
                    <label key={id} className={clsx(styles['checkbox'], error && styles['is-invalid'])}>
                      <input
                        type="checkbox"
                        name="reason"
                        value={id}
                        checked={selectedReasons.includes(id)}
                        onChange={() => handleReasonChange(id)}
                      />
                      <span className={styles['checkbox-check']}></span>
                      <span className={styles['checkbox-text']}><Translate id={key}>{message}</Translate></span>
                    </label>
                  ))}
                </div>

                {error && (
                  <p className={styles['reason-error']}>{error}</p>
                )}

                <label htmlFor={textareaId} className={clsx(styles['label'], styles['more'])}>
                  <Translate id="theme.feedback.modal.tellmore">Tell us more</Translate>
                  <textarea
                    id={textareaId}
                    className={styles['textarea']}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={3}
                    placeholder={translate({id: 'theme.feedback.modal.placeholder', message: 'Please provide feedback on how we can improve this content. If applicable, provide the first part of the sentence or string at issue.'})}
                  />
                </label>
              </div>

              <div className={styles['modal-footer']}>
                <button type="submit" className={clsx(styles['button'], styles['button-primary'])}>
                  <Translate id="theme.feedback.modal.submit">Submit</Translate>
                </button>
              </div>
            </form>
          </div>
        </div>
      , document.getElementById(ROOT_PORTAL)
      )}
    </>
  );
}
