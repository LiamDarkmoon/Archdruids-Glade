import Image from "next/image";
import { DiceTray } from './../components/container/DiceTray';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-20">
      <section className="flex w-screen h-screen items-center justify-evenly">
        <div className="w-2/5 p-5  text-emerald-900">
          <h5 className="text-sm pb-2 mb-2 border-b border-emerald-700">Welcome to the</h5>
          <h1 className="text-6xl font-bold mb-3">Archdruid&apos;s Glade</h1>
          <h2 className="text-2xl font-semibold mb-2">Come check this awesome playgound, where you can roll some dices without anything more than a click</h2>
          <p className="text-lg italic font-medium">
            Call your friends and come to play, tell storyes and enjoy some of the wondrous magic tales the world has to offer 
          </p>
        </div>
        <div className="w-2/5 p-5">
          <DiceTray/>
        </div>
      </section>
    </main>
  );
}
