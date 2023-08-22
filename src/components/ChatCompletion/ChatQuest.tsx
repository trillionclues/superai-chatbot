import React from 'react';
import { IconAvatar } from '../../../utils/icons';

const ChatQuest = () => {
  return (
    <div className='flex items-start justify-start space-x-5'>
      <div className='rounded-full p-2 flex flex-row items-center justify-center bg-[#F6F4EB] object-cover w-10 h-10'>
        <IconAvatar />
      </div>
      <div className='flex flex-col items-start justify-start'>
        <p className='text-sm md:text-base leading-1'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default ChatQuest;
