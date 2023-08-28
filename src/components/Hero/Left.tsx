'use client';

import React, { useState } from 'react';
import ChatQuery from '../ChatCompletion/ChatQuery/ChatQuery';
import processMessageToChatGPT from '../../../utils/generateResponse';
import { dummTextJoinWithLineBreak } from '../../../utils/dummyResp/apiResp';
import Card from '../ChatCompletion/ChatCard/Card';

const LeftLayout = () => {
  const [inputText, setInputText] = useState('');
  const [storedInputText, setStoredInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [apiResponse, setApiResponse] = useState('');

  const handleChatRequest = async (inputText: string) => {
    setIsSending(true);
    try {
      const apiResponse = await processMessageToChatGPT([
        { sender: 'USER', message: inputText },
      ]);
      setApiResponse(apiResponse);
      setStoredInputText(inputText);
      setIsSending(false);
    } catch (error) {
      // console.log('error: ', error);
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
        {apiResponse ? (
          <Card inputText={storedInputText} apiResponse={apiResponse} />
        ) : (
          <Card
            inputText='Practical steps to land an internship in Nigeria after learning HTML, Tailwind, ReactJS, NextJS, NodeJS, Django, DBM, Docker, and FastApi 🐱‍👤'
            apiResponse={
              "The skillset you mentioned is quite extensive and may be considered too much to ask for from an intern, especially someone who is just starting to learn and contribute to a workspace. It's important to remember that interns are usually in a learning phase and gaining hands-on experience. \n\nInstead of expecting proficiency in all of these technologies, it would be more reasonable to focus on a few fundamental skills that will allow the intern to learn and contribute effectively. Providing guidance and support to develop these skills will benefit both the intern and your workspace."
            }
          />
        )}

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
    </div>
  );
};

export default LeftLayout;
