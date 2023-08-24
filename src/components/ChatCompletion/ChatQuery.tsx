'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import {
  IconContentSaveCogOutline,
  IconVoiceprintFill,
  IconPaperPlane,
  IconHouseChimneyCrack,
} from '../../../utils/icons';

const ChatQuery = () => {
  const [inputText, setInputText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <form
      className='bg-[#fcfcfc] rounded-xl w-full flex flex-col shadow-md mt-5'
      onSubmit={handleSubmit}
    >
      <textarea
        placeholder='Ask or search anything here...'
        className='bg-[#fcfcfc] rounded-xl w-full focus:outline-none p-2 pb-10 resize-none' // Use
        style={{ minHeight: '40px' }}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <div className='flex flex-row flex justify-between w-full rounded-xl mt-5 bg-[#F6F4EB]'>
        <div className='flex flex-row items-center justify-center space-x-2 p-2'>
          <div className='flex flex-row items-center justify-center space-x-2 p-1 md:p-2 rounded-full bg-[#fcfcfc] cursor-pointer'>
            <IconContentSaveCogOutline className='w-6 h-6 ' />
            <p className='text-sm md:text-base'>Browse Prompts</p>
          </div>
          <div className='flex flex-row items-center justify-center space-x-2 md:p-2 p-1 rounded-full bg-[#fcfcfc] cursor-pointer'>
            <IconVoiceprintFill className='w-6 h-6' />
            <p className='text-sm md:text-base'>No Brand Voice</p>
          </div>
        </div>

        <div className='flex flex-row space-x-2 p-1 md:p-2 items-center'>
          <div className='hidden md:flex flex-row items-center justify-center space-x-2 md:p-2 p-1 rounded-full bg-[#fcfcfc] cursor-pointer'>
            <IconHouseChimneyCrack className='w-6 h-6' />
            <p className='text-sm md:text-base'>Improve</p>
          </div>
          <button
            type='submit'
            className={`text-white flex flex-row items-center justify-center space-x-2 p-2 rounded-full bg-black cursor-pointer ${
              isSubmitting ? 'bg-gray-200' : ''
            } `}
            disabled={isSubmitting}
          >
            <IconPaperPlane />
            {/* {isSubmitting ? 'Submitting...' : 'Submit'} */}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChatQuery;
