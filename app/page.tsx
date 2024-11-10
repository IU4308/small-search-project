import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
      <h1 className='grid place-content-center mt-20 text-4xl font-bold'>Try to search for some article</h1>
    </main>
  );
}
