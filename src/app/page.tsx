import Image from 'next/image'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function Home() {
  const name = 'JIHOON'
  const result = 1 + 2
  return (
    <main>
      <div className="font-mono bg-blue-900 text-blue-300">
        <Navbar />
      </div>
      <div className="font-mono bg-blue-900 text-blue-300 text-center mt-1 p-4">
        <h1 className="text-3xl font-bold">Main Page! Wa!!!!</h1>
      </div>
      <div className="font-mono bg-blue-600 text-blue-300 text-center m-4">
        <p>{name}, WELCOME!</p>
        <p>This page is made for node js, next js, tailwind.</p>
      </div>
      <div className="font-mono bg-blue-600 text-blue-300 text-center m-4">
        <p>1 + 2 = {result}</p>
        <p>
          node js 안에 슬라이드쇼와 같은 기능을 어떻게 구현할 지 모르겠어요.
        </p>
        <p>
          나중에 방학때 시간이 된다면 node js 를 사용하는 법에 대해서 더
          면밀하게 공부해보고 싶어요.
        </p>
      </div>
      <div className="font-mono bg-blue-600 text-blue-300 text-center m-4 flex justify-center">
        <Image
          src="/image_47.png"
          alt="guitar.jpg"
          width="500"
          height="300"
        ></Image>
      </div>
      <Footer />
    </main>
  )
}
