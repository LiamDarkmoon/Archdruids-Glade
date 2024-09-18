'use client'
import { useEffect, useContext, useState } from 'react';
import Link from 'next/link';
import DiceTray from './DiceTray';
import { useScrollPosition } from './../../lib/hooks/useScrollPosition';
import { DiceContext, DiceContextType } from '@/lib/contexts/DiceContext';
import { motion } from 'framer-motion'


export default function HeroSection() {
    const diceContext = useContext(DiceContext);

    if (!diceContext) {
        throw new Error('useDiceContext must be used within a DiceProvider');
    }

    // States
    const { hidden, setHidden} = diceContext as DiceContextType;
    const { scrollY } = useScrollPosition();
    const [monsters, setMonsters] = useState();

   useEffect(() => {
      if(scrollY > 250){
        setHidden(true)
      } else {
        setHidden(false)
      }
   }, [scrollY])

  return (
    <section className="relative z-20 flex flex-wrap min-h-screen w-full items-center justify-center pt-36 sm:py-[100px]">
        <motion.div 
          animate={ hidden ? { x: 350 } : { x: 0 } }
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={ !hidden ? "absolute left-24 w-full sm:w-2/5 p-5  text-amber-50" : "absolute left-24 w-full sm:w-2/5 p-5  text-amber-50 text-center"}
        >
          <h5 className="hidden sm:block text-sm pb-2 mb-2 border-b-2 border-amber-800">Bienvenidos a</h5>
          <h1 className="sm:text-5xl text-4xl font-bold mb-4">El Templo del Lobo</h1>
          <h2 className="text-2xl font-semibold mb-3">Un espacio unico donde puedes lanzar los dados con solo un click y preparar tus personajes para la aventura</h2>
          <p className="text-lg italic font-medium mb-5">
            Trae a tus amigos junto al fuego a oir toda clase de aventuras que el mundo tiene para ofrecer
          </p>
          <Link 
          href='/characters'
          className='w-full bg-red-700 rounded-md py-2 px-4 text-white font-semibold hover:bg-red-800 transition-colors duration-300 ease-in-out'
          >
          Crea un Personaje
        </Link>
        </motion.div>
        <div className="fixed top-[100px] right-20 w-full sm:w-2/5">
          <DiceTray/>
        </div>
      </section>
  )
}
