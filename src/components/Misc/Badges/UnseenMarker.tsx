import React, { useEffect, useRef, useId } from 'react';
import { useSeenHashes } from '@site/src/hooks/useSeenHashes';
import { translate } from '@docusaurus/Translate';
import { Tooltip } from 'react-tooltip';
import styles from './styles.module.css';

interface UnseenMarkerProps {
  version: string;
  sha: string;
}

export const UnseenMarker: React.FC<UnseenMarkerProps> = ({ version, sha, }) => {
  const { isNew, markAsSeen } = useSeenHashes(version);
  const shouldMark = isNew(sha);
  const anchorRef = useRef<HTMLSpanElement>(null);
  const tooltipId = `tooltip:${useId()}`;
  useEffect(() => {
    markAsSeen(sha);

    if (shouldMark && anchorRef.current) {
      const listItem = anchorRef.current.closest('li');
      if (listItem) {
        listItem.classList.add(styles['unseen']);
      }
    }
  }, [sha, shouldMark, markAsSeen]);

  if (!shouldMark) return null;

  return (
    <>
    <span
      ref={anchorRef}
	    className={styles['unseen--anchor']}
	    data-tooltip-id={tooltipId}
    />

    <Tooltip
      id={tooltipId}
      className={styles['unseen--tooltip']}
      place="top"
    >
      {translate({
        id: 'theme.changelog.unseenChange',
        message: 'New change since your last visit',
      })}
    </Tooltip>
    </>
  );
}
