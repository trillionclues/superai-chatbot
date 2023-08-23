import Link from 'next/link';
import React from 'react';
import { NavLinks } from '../../../../utils/navlinks';

const MobileMenu = () => {
  return (
    <div className='p-4'>
      {NavLinks.map((link) => (
        <Link href={link.url} key={link.id}>
          <p className='text-black font-bold underline text-sm cursor-pointer mb-2'>
            {link.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default MobileMenu;
