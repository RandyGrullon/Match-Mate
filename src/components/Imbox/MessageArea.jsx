import React from "react";
import MessageList from "./MessageList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const MessageArea = ({ isOpen, onClose }) => {
  return (
    <div
      className={`text-black fixed inset-y-0 right-0 w-full bg-white overflow-y-scroll transition-transform duration-500 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="px-4 border-b-2">
        <div className="flex pt-3 w-full justify-between">
          <button onClick={onClose} className="text-xl font-bold pb-3">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h2 className="text-center text-xl font-bold">Message</h2>
          <div></div>
        </div>
      </div>
      <div className="">
        <MessageList />
      </div>
    </div>
  );
};

export default MessageArea;