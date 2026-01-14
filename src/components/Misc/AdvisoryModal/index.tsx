import React, { ReactNode, useState } from 'react';
import { Modal } from '@site/src/components/UI/Modal';
import Translate from '@docusaurus/Translate';

import clsx from 'clsx';

import styles from './styles.module.css';

interface AdvisoryProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (dontShowAgain: boolean) => void;
  title?: ReactNode;
  children: ReactNode;
  confirmText?: ReactNode;
  confirmBtnClassName?: string;
  showDoNotDisturb?: boolean;
}

export const AdvisoryModal: React.FC<AdvisoryProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  confirmText,
  confirmBtnClassName,
  showDoNotDisturb = false
}) => {
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const handleConfirm = () => {
    onConfirm(dontShowAgain);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      contentClassName={styles['modal-content']}
      titleClassName={styles['modal-title']}
      overlayClassName={styles['modal-overlay']}
      title={title}
      footer={
        <div className={styles['footer-container']}>
          {showDoNotDisturb && (
            <label className={styles['checkbox-label']}>
              <input
                type="checkbox"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
                className={styles['checkbox']}
              />
              <span className={styles['checkbox-text']}>
                <Translate id="theme.modal.advisory.dontShowAgain">Don't show again</Translate>
              </span>
            </label>
          )}
          <button
            className={clsx("button button--primary", confirmBtnClassName)}
            onClick={handleConfirm}
          >
            {confirmText}
          </button>
        </div>
      }
    >
      <div className={styles['body-content']}>
        {children}
      </div>
    </Modal>
  );
}
