import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  // Check if the modal should be displayed
  if (!isOpen) return null;

  // Handle closing the modal when clicking outside the modal content
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    // The modal wrapper div that covers the entire screen
    <div
      onClick={handleClose}
      id="wrapper"
      className="fixed inset-0 bg-activeBlack bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    >
      {/* The modal content container */}
      <div className="w-[50%] flex flex-col rounded-lg overflow-hidden">
        {/* The content of the modal */}
        <div className="bg-white p-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
