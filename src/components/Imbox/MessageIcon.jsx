// components/MessageIcon.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import MessageArea from "./MessageArea";

const MessageIcon = () => {
  const [isMessageAreaOpen, setMessageAreaOpen] = useState(false);

  const toggleMessageArea = () => {
    setMessageAreaOpen(!isMessageAreaOpen);
  };

  return (
    <>
      <div onClick={toggleMessageArea} className="cursor-pointer relative text-black">
        <FontAwesomeIcon icon={faMessage} size="lg" />
        {isMessageAreaOpen && (
          <div className="overlay" onClick={toggleMessageArea}></div>
        )}
      </div>
      <MessageArea isOpen={isMessageAreaOpen} onClose={toggleMessageArea} />
    </>
  );
};

export default MessageIcon;
