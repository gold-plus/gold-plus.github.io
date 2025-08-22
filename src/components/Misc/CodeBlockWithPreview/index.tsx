import React from 'react';

export default function CodeBlockWithPreview({ children, preview }) {
  return (
    <div className="code-with-preview">
      <div className="code-with-preview__header">
        <div className="code-with-preview__tabs">
          {children}
        </div>
        {preview && (
          <div className="code-with-preview__preview">
            {preview}
          </div>
        )}
      </div>
    </div>
  );
}
