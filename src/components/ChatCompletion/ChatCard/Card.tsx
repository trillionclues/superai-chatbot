import React from 'react';
import ChatQuest from '../Question/ChatQuest';
import ChatResponse from '../Response/ChatResponse';

interface CardProps {
  inputText: string;
  apiResponse: string;
}

const Card: React.FC<CardProps> = ({ inputText, apiResponse }) => {
  return (
    <div className='flex items-start space-x-2 p-2 flex-col'>
      <ChatResponse apiResponse={apiResponse} />

      <div className='p-2 w-full flex flex-row space-x-2 items-center mt-4'>
        <ChatQuest inputText={inputText} />
      </div>
    </div>
  );
};

export default Card;
