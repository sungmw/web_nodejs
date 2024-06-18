import Image from 'next/image';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function Home() {
  const name = 'JIHOON';
  const result = 1 + 2;

  return (
    <main className="min-h-screen">
      <div className="font-mono bg-blue-900 text-blue-300">
        <Navbar />
      </div>
      <div className="font-mono bg-blue-800 text-white text-center mt-1 p-6">
        <h1 className="text-4xl font-bold">Index Page Home</h1>
      </div>
      <div className="font-mono bg-blue-700 text-white text-center m-4 p-6 rounded-lg shadow-lg">
        <p className="text-2xl">{name}, WELCOME!</p>
        <p>이 페이지는 node.js다</p>
      </div>
      <div className="font-mono bg-blue-600 text-white text-center m-4 p-6 rounded-lg shadow-lg">
        <p className="text-2xl">2023 + 2024 = {result}</p>
        <p>node js는 뭘까응..</p>
        <p>안녕하세요 성민욱입니다</p>
      </div>
      <div className="font-mono bg-blue-500 text-white text-center m-4 p-6 rounded-lg shadow-lg flex justify-center">
        <Image
          src="/image_47.jpg"
          alt="minwook.jpg"
          width="500"
          height="300"
          className="rounded-lg shadow-lg"
        />
      </div>
      <Footer />
    </main>
  );
}