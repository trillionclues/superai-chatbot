import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { NavLinks } from '../../../utils/navlinks';

const Header: React.FC = () => {
  return (
    <header className='flex justify-around items-center header1'>
      <div className='object-cover'>
        <Image
          src='/superchat-logo.jpg'
          alt='Superchat Logo'
          width={40}
          height={40}
          loading='eager'
        />
      </div>
      <nav className='flex space-x-5 bg-white items-center justify-center px-10 py-2 rounded-full'>
        {NavLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            <div className='text-grey-200 hover:bg-black mr-4'>{link.name}</div>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
