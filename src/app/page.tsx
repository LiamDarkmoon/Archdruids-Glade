import { DiceTray } from './../components/container/DiceTray';
import CardsCarousel from "@/components/pure/CardsCarousel";
import CharacterForm from './../components/pure/forms/CharacterForm';
import prisma from '@/lib/db'
import Image from 'next/image';
import autumn from '../../public/autumn.jpg';
import CharacterSheet from '@/components/pure/CharacterSheet';

export default async function Home() {
    const newChar = await prisma.character.findMany();

  return (
    <main className="relative flex max-screen min-h-screen flex-col items-center justify-between">
      <Image
      src={ autumn }
      alt='Autumn background'
      className='fixed h-screen lg:h-auto -z-20'
      sizes='100vw'
      />
      <section className="relative z-20 flex flex-wrap w-full items-center justify-evenly pt-36 sm:py-20">
        <div className="w-full sm:w-2/5 p-5  text-amber-50">
          <h5 className="hidden sm:block text-sm pb-2 mb-2 border-b-2 text-red-60000 border-amber-800">Welcome to the</h5>
          <h1 className="sm:text-6xl text-4xl font-bold mb-3">Archdruid&apos;s Glade</h1>
          <h2 className="text-2xl font-semibold mb-2">Come check this awesome playgound, where you can roll some dices without anything more than a click</h2>
          <p className="text-lg italic font-medium">
            Call your friends and come to play, tell storyes and enjoy some of the wondrous magic tales the world has to offer 
          </p>
        </div>
        <div className="w-full sm:w-2/5">
          <DiceTray/>
        </div>
      </section>
      <section className='flex flex-col w-full overflow-hidden items-center py-5'>
        <CardsCarousel char={ newChar }/>
        <CharacterForm/>
      </section>
      <CharacterSheet/>
    </main>
  );
}
