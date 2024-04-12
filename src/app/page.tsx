import Image from "next/image";
import { DiceTray } from './../components/container/DiceTray';
import Board from './../components/container/Board';
import Card from "@/components/pure/Card";
import { motion } from 'framer-motion';


export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <section className="bg-autumn bg-no-repeat bg-cover flex flex-wrap w-full items-center justify-evenly pt-28 sm:py-20">
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
      <section className="w-full h-screen p-6">
        <div className="grid grid-cols-5 gap-2 bg-emerald-100">
          <Card 
            title="Moon's Archdruid"
            text="Powerfull as wise the archdruid looks over the life on the glade like a father over his child" 
            img="/assets/imgs/Archdruid.png"
            className="hover:scale-110 transition-all duration-300 ease-in-out hover:Z-10"
          />
          <Card 
            title="Moon's Archdruid"
            text="Powerfull as wise the archdruid looks over the life on the glade like a father over his child" 
            img="/assets/imgs/Archdruid.png"
            className="hover:scale-110 transition-all duration-300 ease-in-out hover:Z-10"
          />
          <Card 
            title="Moon's Archdruid"
            text="Powerfull as wise the archdruid looks over the life on the glade like a father over his child" 
            img="/assets/imgs/Archdruid.png"
            className="hover:scale-110 transition-all duration-300 ease-in-out hover:Z-10"
          />
          <Card 
            title="Moon's Archdruid"
            text="Powerfull as wise the archdruid looks over the life on the glade like a father over his child" 
            img="/assets/imgs/Archdruid.png"
            className="hover:scale-110 transition-all duration-300 ease-in-out hover:Z-10"
          />
          <Card 
            title="Moon's Archdruid"
            text="Powerfull as wise the archdruid looks over the life on the glade like a father over his child" 
            img="/assets/imgs/Archdruid.png"
            className="hover:scale-110 transition-all duration-300 ease-in-out hover:Z-10"
          />
        </div>
      </section>
    </main>
  );
}
