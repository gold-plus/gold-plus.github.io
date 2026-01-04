// src/context/FeedbackContext.tsx
import React, { useState, useContext, createContext, ReactNode } from 'react';

import { SubmitFeedbackFn, usePageFeedback } from '@site/src/hooks/usePageFeedback';
import { useClickOutside } from '@site/src/hooks/useClickOutside';
import { useKeyPress } from '@site/src/hooks/useKeyPress';

// Defines possible states for modal visibility and content
export type ModalState = 'hidden' | 'form' | 'thanks';

// Defines shape of data provided by context
interface FeedbackContextType {
  modalState: ModalState;
  setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
  modalRef: React.RefObject<HTMLDivElement>;
  selectedReasons: string[];
  setSelectedReasons: React.Dispatch<React.SetStateAction<string[]>>;
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  vote: 'rating-yes' | 'rating-no' | null;
  loading: boolean;
  submitFeedback: SubmitFeedbackFn;
  resetForm: () => void;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

// Provides feedback state and logic to its children
export function FeedbackProvider({ children, pageId }: { children: ReactNode; pageId: string }) {
  // Handles backend logic for voting
  const pageFeedback = usePageFeedback(pageId);

  // State for modal visibility and content
  const [modalState, setModalState] = useState<ModalState>('hidden');

  // State for form inputs
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  // State to track if feedback was submitted in current session
  const [submitted, setSubmitted] = useState(false);

  // Hook to close modal on outside click
  const modalRef = useClickOutside(() => { setModalState('hidden') }, modalState !== 'hidden');

  // Hook to close modal on Escape key press
  useKeyPress('Escape', () => {
    setModalState('hidden');
  }, modalState !== 'hidden');

  // Resets form fields to initial state
  const resetForm = () => {
    setSelectedReasons([]);
    setComment('');
    setError('');
  };

  // Assembles value object to be passed down through context
  const value = {
    ...pageFeedback,
    modalRef,
    modalState, setModalState,
    selectedReasons, setSelectedReasons,
    comment, setComment,
    error, setError,
    submitted, setSubmitted,
    resetForm,
  };

  return <FeedbackContext.Provider value={value}>{children}</FeedbackContext.Provider>;
}

// Custom hook for consuming feedback context
export function useFeedbackContext() {
  const context = useContext(FeedbackContext);
  if (context === undefined) {
    throw new Error('useFeedbackContext must be used within a FeedbackProvider');
  }
  return context;
}
