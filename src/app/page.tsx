import Image from "next/image";
import { DiceTray } from './../components/container/DiceTray';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="bg-autumn bg-no-repeat bg-cover flex flex-wrap w-screen items-center justify-evenly pt-28 sm:py-20">
        <div className="w-full sm:w-2/5 p-5  text-emerald-50">
          <h5 className="text-sm pb-2 mb-2 border-b text-emerald-400 border-emerald-400">Welcome to the</h5>
          <h1 className="sm:text-6xl text-4xl font-bold mb-3">Archdruid&apos;s Glade</h1>
          <h2 className="text-2xl font-semibold mb-2">Come check this awesome playgound, where you can roll some dices without anything more than a click</h2>
          <p className="text-lg italic font-medium">
            Call your friends and come to play, tell storyes and enjoy some of the wondrous magic tales the world has to offer 
          </p>
        </div>
        <div className="w-full sm:w-2/5 p-5">
          <DiceTray/>
        </div>
      </section>
    </main>
  );
}
