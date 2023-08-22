import React from 'react';
import {
  IconClipboardCopy,
  IconHandThumbsDown,
  IconHandThumbsUp,
  IconLogoSass,
  IconPlayListAdd,
} from '../../../utils/icons';

const ChatResponse = () => {
  return (
    <div className='bg-[#C8FFE0] rounded-xl p-5 w-full flex flex-row space-x-4'>
      <div className='rounded-full p-2 hidden md:flex flex-row items-center justify-center space-x-2 bg-[#F6F4EB] object-cover w-12 h-12'>
        <IconLogoSass />
      </div>
      <div className='flex flex-col items-start justify-start'>
        <p className='text-sm md:text-base leading-1'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          fugiat cum doloribus possimus odit, enim dicta deleniti eius officiis
          alias! Accusantium fugiat cum doloribus possimus odit, enim dicta
          deleniti eius officiis alias! Accusantium fugiat cum doloribus
          possimus odit, enim dicta deleniti eius officiis alias!
        </p>

        <div className='mt-5 flex justify-between w-full'>
          <div className='flex items-center space-x-2'>
            <button className='bg-[#F6F4EB] rounded-full p-2 flex flex-row items-center justify-center space-x-2'>
              <IconHandThumbsUp />
            </button>
            <button className='bg-[#F6F4EB] rounded-full p-2 flex flex-row items-center justify-center space-x-2'>
              <IconHandThumbsDown />
            </button>
          </div>
          <div className='flex items-center md:space-x-5 space-x-2'>
            <button className='bg-[#F6F4EB] rounded-full p-2 flex flex-row items-center justify-center space-x-2 text-sm'>
              <IconClipboardCopy />{' '}
              <span className='hidden md:inline-block'>Copy</span>
            </button>
            <button className='bg-[#F6F4EB] rounded-full md:p-2 p-1 flex flex-row items-center justify-center md:space-x-2 space-x-0 text-sm'>
              <IconPlayListAdd />{' '}
              <span className='hidden md:inline-block'>Add to Editor</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatResponse;
