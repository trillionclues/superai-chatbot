'use client';

import React, { useEffect, useState } from 'react';
import { IconHamburgerMenu, IconClose } from '../../../../utils/icons';
import MobileMenu from './MobileMenu';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeWindowMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const updateIsMobile = () => {
      if (window.innerWidth > 768) {
        closeWindowMenu();
      }
    };

    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  return (
    <>
      <div
        className='md:hidden transition-all duration-500 ease-in-out delay-150 cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <IconClose className='text-3xl' />
        ) : (
          <IconHamburgerMenu className='text-3xl' />
        )}
      </div>

      <div
        className={`fixed top-[58px] left-[60px] right-0 bg-white bottom-0 transition-all duration-500 ease-in-out delay-150 transform overflow-hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <MobileMenu />
        </div>
      </div>
    </>
  );
};

export default MobileNav;
