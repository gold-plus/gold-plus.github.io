import React, { useState } from 'react';
import { useReactions, ReactionTypes } from '@site/src/hooks/useReactions';
import { useClickOutside } from '@site/src/hooks/useClickOutside';
import { SmileyIcon } from '@site/src/components/Icons';

import clsx from 'clsx';

import styles from './styles.module.css';

interface ReactionsProps {
  id: string;
  collection: string;
}

export default function Reactions({ id, collection  }: ReactionsProps) {
  const { counts, myVotes, loading, toggleReaction, summaryText, isProcessing } = useReactions({ id, collection });
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const containerRef = useClickOutside(() => { setIsPopoverOpen(false) });

  if (loading) return null;

  return (
    <div className={styles['container']} ref={containerRef}>
      <button
        className={styles['add-reaction-btn']}
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        type="button"
        disabled={isProcessing}
      >
        <SmileyIcon />
      </button>

      {isPopoverOpen && (
        <div className={styles['popover']}>
          {ReactionTypes.map(({ label, emoji }) => (
            <button
              key={label}
              className={styles['popover-btn']}
              onClick={() => toggleReaction(label, () => setIsPopoverOpen(false))}
              type="button"
              disabled={isProcessing}
            >
              {emoji}
            </button>
          ))}
        </div>
      )}

      {ReactionTypes.map(({ label, emoji }) => {
        const count = counts[label] || 0;
        const isActive = myVotes[label];

        if (count === 0 && !isActive) return null;

        return (
          <button
            key={label}
            className={clsx(styles['reaction-pill'], isActive && styles['active'])}
            onClick={() => toggleReaction(label)}
            type="button"
            disabled={isProcessing}
          >
            <span>{emoji}</span>
            <span className={styles['count']}>{count}</span>
          </button>
        );
      })}

      {summaryText && (
        <span className={styles['summary-text']}>
          {summaryText}
        </span>
      )}
    </div>
  );
}
