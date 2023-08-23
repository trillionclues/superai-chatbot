'use client';
import React from 'react';
import Link from 'next/link';
import { NavLinks } from '../../../../utils/navlinks';
import { IconLogoSass } from '../../../../utils/icons';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className='flex justify-start items-center header1'>
      <Link href='/' passHref>
        <div className='object-cover mr-0 md:mr-24 cursor-pointer'>
          <IconLogoSass />
        </div>
      </Link>
      <nav className='hidden md:flex space-x-5 bg-white items-center justify-center px-8 py-1 rounded-full flex-1'>
        {NavLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            <p
              className={`${
                pathname === link.url
                  ? 'text-black font-bold underline'
                  : 'text-grey-200 hover:bg-black hover:text-white px-2 py-1 rounded-full'
              } text-sm cursor-pointer`}
            >
              {link.name}
            </p>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
