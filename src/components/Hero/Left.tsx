import React from 'react';
import ChatQuery from '../ChatCompletion/ChatQuery';
import ChatQuest from '../ChatCompletion/ChatQuest';
import ChatResponse from '../ChatCompletion/ChatResponse';

const LeftLayout = () => {
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
          <ChatQuery />
        </div>
      </div>
    </div>
  );
};

export default LeftLayout;
