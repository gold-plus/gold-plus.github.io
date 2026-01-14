// src/components/Misc/Page/Feedback.tsx
import React, { useId } from 'react';
import { createPortal } from 'react-dom';
import { useFeedbackContext } from '@site/src/context/FeedbackContext';
import Translate, { translate } from '@docusaurus/Translate';
import { useLockBodyScroll } from '@docusaurus/theme-common/internal';
import { ThumbsUpIcon, ThumbsDownIcon } from '@site/src/components/Icons';
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

export const Feedback: React.FC< { isSidebar?: boolean }> = ({ isSidebar = false }) => {
  // Pulls all state and logic from a centralized context
  const {
    vote, submitFeedback,
    setModalState,
    submitted, setSubmitted,
    resetForm
  } = useFeedbackContext();

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

  return (
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
  );
}
