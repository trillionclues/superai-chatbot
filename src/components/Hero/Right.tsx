import React from 'react';
import { chatHistory } from '../../../utils/chatHistory';

const RightLayout = () => {
  return (
    <>
      <div
        className='header2 flex flex-grow-0 flex-col  items-center justify-between space-y-5 py-2 px-5 w-full'
        style={{ height: '60%' }}
      >
        {chatHistory.map((chat) => (
          <>
            <div
              className='flex flex-row items-center justify-between space-x-2 bg-white rounded-xl p-2 w-full shadow-md'
              key={chat.id}
            >
              <button className='bg-white rounded-full p-2'>{chat.icon}</button>
              <p className='text-sm font-normal'>"{chat.question}"</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default RightLayout;
