import LeftLayout from '@/components/Hero/Left';
import RightLayout from '@/components/Hero/Right';
import React from 'react';
import { IconEllipsisV } from '../../../utils/icons';

const ChatLayout = () => {
  return (
    <main className='flex-col md:flex-row flex w-full justify-between md:space-x-5 space-x-0 md:space-y-0 space-y-5'>
      <section className='header1 rounded-xl border-2'>
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

      <section className='header2 rounded-xl border-2'>
        <div className='container mx-auto'>
          <RightLayout />
        </div>
      </section>
    </main>
  );
};

export default ChatLayout;
