import ChatLayout from './chat/page';

export default function Home() {
  return (
    <>
      <main className='min-h-screen bg-white'>
        <div className='md:px-24 pt-5 px-4'>
          <ChatLayout />
        </div>
      </main>
    </>
  );
}
