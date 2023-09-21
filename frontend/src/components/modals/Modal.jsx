import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      onClick={handleClose}
      id="wrapper"
      className="fixed inset-0 bg-activeBlack bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="w-[50%] flex flex-col rounded-lg overflow-hidden">
        <div className="bg-white p-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
