// src/components/Misc/Page/FeedbackModal.tsx
import React, { useId } from 'react';
import { useFeedbackContext } from '@site/src/context/FeedbackContext';
import Translate, { translate } from '@docusaurus/Translate';
import { Modal } from '@site/src/components/UI/Modal';

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

export const FeedbackModal: React.FC< { isSidebar?: boolean }> = ({ isSidebar = false }) => {
  // Pulls all state and logic from a centralized context
  const {
    modalState, setModalState,
    selectedReasons, setSelectedReasons,
    comment, setComment,
    error, setError,
    setSubmitted,
    submitFeedback
  } = useFeedbackContext();

  // Generates a unique ID for a11y attributes
  const textareaId = `feedback-comment-${useId()}`;
  const formId = `feedback-form-${useId()}`;

  // Manages selected checkbox reasons
  const handleReasonChange = (reasonId: string) => {
    if (error) setError(''); // Clears validation error on interaction

    setSelectedReasons(prev =>
      prev.includes(reasonId) ? prev.filter(id => id !== reasonId) : [...prev, reasonId]
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

  const handleCloseClick = () => {
    setModalState('hidden');
  };

  if (modalState === 'hidden') return null;

  return (
    <>
      {/* Render "thanks" modal */}
      {modalState == 'thanks' &&
        <Modal
          isOpen={true}
          onClose={handleCloseClick}
          title={<Translate id="theme.feedback.thanks.title">Thank you!</Translate>}
          headerClassName={styles['thanks']}
        >
          <span>
            <Translate id="theme.feedback.thanks.subtitle">We'll use your feedback to improve this page.</Translate>
          </span>
        </Modal>
      }

      {/* Render "form" modal */}
      {modalState == 'form' &&
        <Modal
          isOpen={true}
          onClose={handleCloseClick}
          title={<Translate id="theme.feedback.modal.title">Help us improve this page</Translate>}
          footer={
            <button
              type="submit"
              form={formId}
              className={clsx(styles['button'], styles['button-primary'])}
            >
              <Translate id="theme.feedback.modal.submit">Submit</Translate>
            </button>
          }
        >
          <form id={formId} onSubmit={handleSubmitForm}>
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
          </form>
        </Modal>
      }
    </>
  );
}
