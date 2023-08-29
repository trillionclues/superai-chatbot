import LeftLayout from '@/components/Hero/Left';
import RightLayout from '@/components/Hero/Right';
import React from 'react';
import { IconEllipsisV, IconBook, IconLogoSass } from '../../../utils/icons';

const ChatLayout = () => {
  return (
    <main className='flex-col md:flex-row flex w-full justify-between md:space-x-5 space-x-0 md:space-y-0 space-y-5'>
      <section className='header1 rounded-xl border-2 h-full'>
        <div className='bg-[#F6F4EB] px-3 py-2 flex justify-between'>
          <h1 className='font-bold text-lg'>Super Chat</h1>
          <div className='flex items-center space-x-5'>
            <button className='bg-white rounded-full p-2'>
              <IconEllipsisV />
            </button>
          </div>
        </div>
        <LeftLayout />
      </section>

      <section className='header2 h-full'>
        <div className='bg-[#F6F4EB] px-3 py-2 flex justify-between rounded-t-xl border-2'>
          <h1 className='font-bold text-lg'>Chat History</h1>
          <div className='flex items-center space-x-5'>
            <button className='bg-white rounded-full p-2'>
              <IconBook />
            </button>
          </div>
        </div>
        <div className='flex flex-col h-full'>
          <div className='rounded-b-xl border-2'>
            <RightLayout />
          </div>
          <div className='mt-2 rounded-xl border-0 shadow-md bg-emerald-400 flex flex-col justify-between items-center space-y-2 py-5 px-5 w-full'>
            <div className='text-white flex flex-row justify-between items-center space-x-2 w-full'>
              <div>
                <IconLogoSass />
              </div>
              <h1 className='font-bold text-white text-lg'>Chat History</h1>
            </div>
            <div className='text-white flex flex-col justify-start items-start px-5 py-2 space-y-2'>
              <h2 className='text-3xl font-bold'>
                $126.54<span className='text-sm font-normal'>/month</span>
              </h2>
              <p className='text-sm'>Get various other interesting features</p>
            </div>
            <button
              type='button'
              className='text-center text-white bg-black rounded-full
              px-5 py-1 w-full
              '
            >
              Get Pro Plan Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ChatLayout;
