import React from 'react';
import ChatQuest from '../Question/ChatQuest';
import ChatResponse from '../Response/ChatResponse';

interface CardProps {
  inputText: string;
  apiResponse: string;
  chatHistory: Array<{
    sender: string;
    message: string;
  }>;
}

const Card: React.FC<CardProps> = ({ inputText, apiResponse, chatHistory }) => {
  // retrieve the last assistant message from the chatHistory
  const getlastAssistantMessage = (
    history: Array<{ sender: string; message: string }>
  ) => {
    const reversedHistory = [...history].reverse();
    const lastAssistantMessage = reversedHistory.find(
      (message) => message.sender === 'assistant'
    );
    return lastAssistantMessage;
  };

  const lastAssistantMessage = getlastAssistantMessage(chatHistory);
  const apiResponseMsg = lastAssistantMessage
    ? lastAssistantMessage.message
    : '';

  return (
    <div className='flex items-start space-x-2 p-2 flex-col'>
      <ChatResponse apiResponse={apiResponse} chatHistory={chatHistory} />

      <div className='p-2 w-full flex flex-row space-x-2 items-center mt-4'>
        <ChatQuest inputText={inputText} />
      </div>
    </div>
  );
};

export default Card;
