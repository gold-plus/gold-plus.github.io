import React, { ReactNode, forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { useLockBodyScroll } from '@docusaurus/theme-common/internal';
import { useKeyPress } from '@site/src/hooks/useKeyPress';
import { useClickOutside } from '@site/src/hooks/useClickOutside';

import clsx from 'clsx';

import styles from './styles.module.css';

const ROOT_PORTAL_ID = '__docusaurus';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: ReactNode;
  footer?: ReactNode;
  overlayClassName?: string;
  contentClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
  closeBtnClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(({
  isOpen,
  onClose,
  children,
  title,
  footer,
  overlayClassName,
  contentClassName,
  headerClassName,
  titleClassName,
  closeBtnClassName,
  bodyClassName,
  footerClassName,
}, ref) => {

  // Toggles body scroll lock based on modal visibility
  useLockBodyScroll(isOpen);

  // Hook to close modal on outside click
  const modalRef = useClickOutside(() => {
    if (isOpen) onClose();
  }, isOpen);

  // Hook to close modal on Escape key press
  useKeyPress('Escape', () => {
    if (isOpen) onClose();
  });

  // Link refs
  useImperativeHandle(ref, () => modalRef.current);

  if (!isOpen) return null;

  const container = document.getElementById(ROOT_PORTAL_ID) || document.body;
  return createPortal(
    <div className={clsx(styles['modal-overlay'], overlayClassName)}>
      <div
        className={clsx(styles['modal-content'], contentClassName)}
        ref={modalRef}
        role="dialog"
        aria-modal="true"
      >
        <div className={clsx(styles['modal-header'], headerClassName)}>
          {title && (
            <h4 className={clsx(styles['title'], titleClassName)}>
              {title}
            </h4>
          )}
          <button type="button" onClick={onClose} className={clsx(styles['close-button'], closeBtnClassName)}>&times;</button>
        </div>
        <div className={clsx(styles['modal-body'], bodyClassName)}>
          {children}
        </div>
        {footer && (
          <div className={clsx(styles['modal-footer'], footerClassName)}>
            {footer}
          </div>
        )}
      </div>
    </div>, container
  );
});
