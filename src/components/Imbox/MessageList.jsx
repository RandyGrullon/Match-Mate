// components/MessageList.jsx
import React from "react";
import Conversation from "./Conversations";

const MessageList = () => {
  // Obtén la lista de conversaciones
  const conversations = [
    {
      id: 1,
      name: "Conversation 1",
      message: [
        //crea una conversacion, id, mensaje, tipo(envido, recibido), fecha
        { id: 1, message: "Hola", type: "sent", date: "2021-09-01T12:00:00" },
        {
          id: 2,
          message: "Hola",
          type: "received",
          date: "2021-09-01T12:00:00",
        },
        { id: 3, message: "Hola", type: "sent", date: "2021-09-01T12:00:00" },
        {
          id: 4,
          message: "Hola",
          type: "received",
          date: "2021-09-01T12:00:00",
        },
        { id: 5, message: "Hola", type: "sent", date: "2021-09-01T12:00:00" },
      ],
    },
    {
      id: 2,
      name: "Conversation 2",
      message: [
        { id: 1, message: "Hola", type: "sent", date: "2021-09-01T12:00:00" },
        {
          id: 2,
          message: "Hola",
          type: "received",
          date: "2021-09-01T12:00:00",
        },
        { id: 3, message: "Hola", type: "sent", date: "2021-09-01T12:00:00" },
        {
          id: 4,
          message: "Hola",
          type: "received",
          date: "2021-09-01T12:00:00",
        },
        { id: 5, message: "Hola", type: "sent", date: "2021-09-01T12:00:00" },
      ],
    },
    {
      id: 3,
      name: "Conversation 3",
      message: [
        { id: 1, message: "Hola", type: "sent", date: "2021-09-01T12:00:00" },
        {
          id: 2,
          message: "Hola",
          type: "received",
          date: "2021-09-01T12:00:00",
        },
        { id: 3, message: "Hola", type: "sent", date: "2021-09-01T12:00:00" },
        {
          id: 4,
          message: "Hola",
          type: "received",
          date: "2021-09-01T12:00:00",
        },
        { id: 5, message: "Hola", type: "sent", date: "2021-09-01T12:00:00" },
      ],
    },
  ];

  return (
    <div className="text-black">
      {conversations.map((conversation) => (
        <Conversation key={conversation.id} data={conversation} />
      ))}
    </div>
  );
};

export default MessageList;
