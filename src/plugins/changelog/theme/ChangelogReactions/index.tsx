import React, { useEffect, useState, useRef } from 'react';
import { useReactions, ReactionTypes } from '@site/src/hooks/useReactions';
import clsx from 'clsx';

import styles from './styles.module.css';

type Props = {
  title: string;
};

function SmileyIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" fill="currentColor">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm3.82 1.636a.75.75 0 0 1 1.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 0 1 1.222.87l-.022-.015c.02.013.021.015.021.015v.001l-.001.002-.002.003-.005.007-.014.019a2.066 2.066 0 0 1-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.331 3.331 0 0 1-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 0 1 .183-1.044ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5.25 2.25.592.416a97.71 97.71 0 0 0-.592-.416Z"></path>
    </svg>
  );
}

export default function ChangelogReactions({ title }: Props) {
  const docId = title.replace(/[^a-z0-9]/gi, '-').toLowerCase();

  const { counts, myVotes, loading, toggleReaction, summaryText, isProcessing } = useReactions({
    docId,
    collection: 'changelog-reactions'
  });

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsPopoverOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
