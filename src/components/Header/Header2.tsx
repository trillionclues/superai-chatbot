import Image from 'next/image';
import React from 'react';

const Header2 = () => {
  return (
    <header className='header2 flex flex-row space-x-5 bg-white rounded-full'>
      <div className='px-5 py-2 flex justify-between items-center flex-row gap-2'>
        <Image
          src='/superchat-logo.jpg'
          alt='Avatar'
          width={20}
          height={20}
          loading='lazy'
        />

        <div className='text-grey-200 hover:bg-black mr-4'>Excel</div>
      </div>
    </header>
  );
};

export default Header2;
