'use client';

import React, { useState } from 'react';
import ChatQuery from '../ChatCompletion/ChatQuery/ChatQuery';
import ChatQuest from '../ChatCompletion/Question/ChatQuest';
import ChatResponse from '../ChatCompletion/Response/ChatResponse';
import processMessageToChatGPT from '../../../utils/generateResponse';
import { ConversationProps } from '../../../types/ConversationProps';

const LeftLayout = () => {
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [apiResponse, setApiResponse] = useState('');
  const [conversation, setConversation] = useState<ConversationProps[]>([]);

  const handleChatRequest = async (inputText: string) => {
    setIsSending(true);
    try {
      const updatedConversation = [
        ...conversation,
        { sender: 'user', message: inputText },
      ];
      const apiResponse = await processMessageToChatGPT(updatedConversation);
      console.log('apiResponse: ', apiResponse);
      setApiResponse(apiResponse);
      setConversation(updatedConversation);
      setIsSending(false);
    } catch (error) {
      console.log('error: ', error);
      setIsSending(false);
    } finally {
      setTimeout(() => {
        setInputText('');
        setIsTyping(false);
      }, 1000);
    }
  };

  return (
    <div className='flex flex-col flex-grow'>
      <div className='flex flex-col space-y-2'>
        <div className='flex items-start space-x-2 p-2 flex-col'>
          <ChatResponse apiResponse={apiResponse} />
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
            handleChatRequest={handleChatRequest}
          />
        </div>
      </div>
      {apiResponse}
    </div>
  );
};

export default LeftLayout;
