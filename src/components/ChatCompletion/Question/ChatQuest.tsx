import React from 'react';
import { IconAvatar } from '../../../../utils/icons';

type ChatQuestProps = {
  inputText: string;
};

const ChatQuest: React.FC<ChatQuestProps> = ({ inputText }) => {
  return (
    <div className='flex justify-between space-x-5 mt-5'>
      <div className='rounded-full  flex flex-row items-center justify-center bg-[#F6F4EB] object-cover w-10 h-8'>
        <IconAvatar />
      </div>
      <div className='flex flex-col items-start'>
        <p className='text-sm font-normal leading-1'>{inputText}</p>
      </div>
    </div>
  );
};

export default ChatQuest;
