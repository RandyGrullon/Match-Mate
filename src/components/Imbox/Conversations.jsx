// components/Conversation.jsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import ConversationPage from "./PrivateConversation";

const Conversation = ({ data }) => {
  const [isMessageAreaOpen, setMessageAreaOpen] = useState(false);

  const toggleMessageArea = () => {
    setMessageAreaOpen(!isMessageAreaOpen);
  };
  return (
    <>
    <div
      onClick={toggleMessageArea}
      className="cursor-pointer  text-black "
      >
      {/* Renderiza la información de la conversación */}
      <div className="flex items-center gap-2 p-2 hover:bg-gray-100">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="flex-1">
          <div className="flex justify-between">
            <h3 className="text-lg font-bold">{data.name}</h3>
            <p className="text-sm text-gray-500">12:00</p>
          </div>
          <p className="text-sm text-gray-500">
           {/* map data.message */}
            {data.message.map((message) => (
              <div key={message.id}>
                <span className="font-bold">User:</span>
                <span>{message.message}</span>
              </div>
            ))}
          </p>
        </div>
      </div>
    </div>
    <ConversationPage isOpen={isMessageAreaOpen} onClose={toggleMessageArea} data={data} />
      </>
  );
};

export default Conversation;
