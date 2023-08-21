import Header from '@/components/Header/Header';
import Header2 from '@/components/Header/Header2';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col justify-between p-5'>
      <div className='header-container'>
        <Header />
        <Header2 />
      </div>
    </main>
  );
}
