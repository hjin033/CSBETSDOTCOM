import React, { useState } from 'react';
import './ClosableDialog.css'; // Assuming you have a CSS file for styles

const ClosableDialog = ({ children, onClose, isOpen }) => {
  if (!isOpen) return null;

  const handleCloseClick = (e) => {
    e.stopPropagation(); // Prevent click from closing modal if it happens inside the dialog
    onClose(); // Call onClose prop to close the dialog
  };

  const handleOutsideClick = () => {
    onClose(); // Close the dialog if the click is outside the dialog content
  };

  return (
    <div className="dialog-backdrop" onClick={handleOutsideClick}>
      <div className="dialog-content" onClick={handleCloseClick}>
        {children}
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ClosableDialog;
