import React from 'react';
import { IconAvatar } from '../../../../utils/icons';

const ChatQuest = () => {
  return (
    <div className='flex justify-between space-x-5 mt-5'>
      <div className='rounded-full  flex flex-row items-start justify-start bg-[#F6F4EB] object-cover w-10 h-10'>
        <IconAvatar />
      </div>
      <div className='flex flex-col items-start'>
        <p className='text-sm md:text-base leading-1'>
          How does the projected growth rate in the global economy correlate
          with the implementation of economic policies and consumer spending
          patterns?
        </p>
      </div>
    </div>
  );
};

export default ChatQuest;
