import React from 'react';
import {
  IconAvatar,
  IconNotificationsCircleOutline,
  IconSetting,
} from '../../../../utils/icons';

const Header2 = () => {
  return (
    <header className='header2 flex flex-row justify-between items-center space-x-5 bg-none md:bg-white rounded-full'>
      <div className='flex f flex-start justify-between items-center flex-row gap-2'>
        <div className='object-cover rounded-full overflow-hidden border-2 border-solid cursor-pointer'>
          <IconAvatar />
        </div>
        <div className='hidden md:block text-grey-200 mr-4 text-sm'>Excel</div>
      </div>

      <div className='hidden md:flex flex-row justify-end items-center'>
        <div className='object-cover rounded-full overflow-hidden border-[8px] border-solid cursor-pointer'>
          <IconNotificationsCircleOutline />
        </div>
        <div className='object-cover rounded-full overflow-hidden border-[8px] border-solid cursor-pointer'>
          <IconSetting />
        </div>
      </div>
    </header>
  );
};

export default Header2;
