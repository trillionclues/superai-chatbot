'use client';

import React, { useState } from 'react';
// import { webkitSpeechRecognition } from 'webspeechapi';
import {
  IconContentSaveCogOutline,
  IconVoiceprintFill,
  IconPaperPlane,
  IconHouseChimneyCrack,
  IconLoading3Quarters,
} from '../../../../utils/icons';
import { ChatQueryProps } from '../../../../types/ChatQueryProps';

const ChatQuery: React.FC<ChatQueryProps> = (props) => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');

  // const handleStartRecording = () => {
  //   setIsRecording(true);
  //   const recorgnition = new webkitSpeechRecognition();
  //   recorgnition.onstart = () => {};
  //   recorgnition.onresult = (e) => {
  //     setTranscript(e.results[0][0]);
  //   };
  //   recorgnition.onerror = (e) => {
  //     console.log(e);
  //   };
  //   recorgnition.start();
  // };

  // const handleStopRecording = () => {
  //   setIsRecording(false);
  //   const recorgnition = new webkitSpeechRecognition();
  //   recorgnition.stop();
  // };

  // handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (props.inputText.trim() === '') return;
    // Pass the user's message as an array to the processing function
    await props.handleChatRequest(props.inputText);
  };

  return (
    <form
      className='bg-[#fcfcfc] rounded-xl w-full flex flex-col shadow-md mt-5'
      onSubmit={handleSubmit}
    >
      <textarea
        placeholder='Ask or search anything here...'
        className='bg-[#fcfcfc] rounded-xl w-full focus:outline-none p-2 pb-10 resize-none' // Use
        style={{ minHeight: '40px' }}
        value={props.inputText}
        onChange={(e) => props.setInputText(e.target.value)}
        onFocus={() => props.setIsTyping(true)}
        onBlur={() => props.setIsTyping(false)}
      />
      <div className='flex flex-row flex justify-between w-full rounded-xl mt-5 bg-[#F6F4EB]'>
        <div className='flex flex-row items-center justify-center space-x-2 p-2'>
          <div className='flex flex-row items-center justify-center space-x-2 p-1 md:p-2 rounded-full bg-[#fcfcfc] cursor-pointer'>
            <IconContentSaveCogOutline className='w-6 h-6 ' />
            <p className='text-sm font-normal flex flex-row'>
              <span className='hidden md:block mr-1'>Browse</span> Prompts
            </p>
          </div>
          <div
            className='flex flex-row items-center justify-center space-x-2 md:p-2 p-1 rounded-full bg-[#fcfcfc] cursor-pointer'
            // onClick={handleStartRecording}
          >
            <IconVoiceprintFill className='w-6 h-6' />
            <p className='text-sm font-normal flex flex-row'>
              <span className='hidden md:block mr-1'>Record</span>Voice
            </p>
          </div>
        </div>

        <div className='flex flex-row space-y x-2 p-1 md:p-2 items-center'>
          <div className='hidden md:flex flex-row items-center justify-center space-x-2 md:p-2 p-1 rounded-full bg-[#fcfcfc] cursor-pointer'>
            <IconHouseChimneyCrack className='w-6 h-6' />
            <p className='text-sm font-normal'>Improve</p>
          </div>

          <button
            type='submit'
            className={`text-white flex flex-row items-center justify-center space-x-2 p-2 rounded-full ${
              props.isTyping
                ? 'bg-black cursor-pointer'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {props.isSending ? (
              <IconLoading3Quarters className='w-6 h-6 animate-spin' />
            ) : (
              <IconPaperPlane className='w-6 h-6' />
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChatQuery;
