'use client';

import React, { useState } from 'react';
import ChatQuery from '../ChatCompletion/ChatQuery/ChatQuery';
import ChatQuest from '../ChatCompletion/Question/ChatQuest';
import ChatResponse from '../ChatCompletion/Response/ChatResponse';
import { getChatCompletion } from '../../../utils/getchatCompletion';

const LeftLayout = () => {
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChatCompletion = async (inputText: string) => {
    setIsSending(true);
    try {
      const response = await getChatCompletion(inputText);
      console.log('Response from Open Ai: ', response);
    } catch (error) {
      console.log('Error', error);
    } finally {
      setTimeout(() => {
        setIsSending(false);
        setInputText('');
      }, 2000);
    }
  };

  return (
    <div className='flex flex-col flex-grow'>
      <div className='flex flex-col space-y-2'>
        <div className='flex items-start space-x-2 p-2 flex-col'>
          <ChatResponse />
          <div className='p-2 w-full flex flex-row space-x-2 items-center mt-4'>
            <ChatQuest />
          </div>
        </div>

        <div className='flex items-start space-x-2 p-2 flex-col'>
          <ChatQuery
            inputText={inputText}
            setInputText={setInputText}
            isTyping={isTyping}
            setIsTyping={setIsTyping}
            isSending={isSending}
            setIsSending={setIsSending}
            handleChatCompletion={handleChatCompletion}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftLayout;
