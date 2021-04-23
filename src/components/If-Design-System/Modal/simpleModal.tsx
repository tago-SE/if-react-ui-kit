import React, { useState } from "react";

export interface ISimpleModal {
  title: string;
  description?: string;
  content: any;
  contentProps?: any,
  footer?: any;
  show?: boolean;
  onClose?: any; // When testable change to () => void or so,
}

export const SimpleModal = ({
  show = true,
  title,
  description,
  content,
  contentProps,
  footer,
  onClose,
}: ISimpleModal) => {
  if (!show) return null;
  return (
    <>
      <div className="if backdrop is-open"></div>
      <div
        aria-modal="true"
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="if modal"
        style={{ zIndex: 100 }}
      >
        <div className="if title" id="dialog-title" style={{ width: "100%", marginBottom: "1.5rem" }}>
          {title}
          <button
            type="button"
            className="if close"
            aria-label="Close modal"
            onClick={onClose}
          ></button>
        </div>
        <span className="if axe sr-only" id="dialog-description">
          {description}
        </span>
        <div className="if content" {...contentProps}>{content}</div>
        {footer && <div className="if footer">{footer}</div>}
      </div>
    </>
  );
};
export default SimpleModal;
