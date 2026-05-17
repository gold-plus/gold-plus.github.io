// src/components/Misc/Changelog/Modal.tsx
import React, { useState } from 'react';
import { translate } from '@docusaurus/Translate';
import { Modal } from '@site/src/components/UI/Modal';
import { LocalizedContent } from './LocalizedContent';

import styles from './styles.module.css';

interface ChangelogModalProps {
  changelogConfig: {
    title: string;
    buttonText: string;
    fileName: string;
  };
}

export const ChangelogModal: React.FC<ChangelogModalProps> = ({ changelogConfig }) => {
  const [isOpen, setIsOpen] = useState(false);
  const translateButtonText = translate({ id: changelogConfig.buttonText, message: ''});
  return (
    <>
      <div className={styles['changelog-modal-btn-wrapper']}>
      <div
        className={styles['changelog-modal-btn']}
        onClick={() => setIsOpen(true)}
        title={translateButtonText}
      >
        {translateButtonText}
      </div>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={ translate({ id: changelogConfig.title, message: ''}) } contentClassName={styles['changelog-modal']}>
          <div className={styles['changelog-modal-content']}>
            <LocalizedContent filename={changelogConfig.fileName} />
          </div>
        </Modal>
      )}
      </div>
    </>
  );
}
