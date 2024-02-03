import React from "react";

const Alert = ({ messages, onClose }) => {
  if (messages) {
    return (
      <>
        <div className="container">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`alert alert-${message.tags} alert-dismissible alert-wd bg-alert-${message.tags}`}
              role="alert"
            >
              <div className="text-center mx-4">{message.message}</div>
              <button
                type="button"
                className="btn-close text-white m-2"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Alert;
