import { useContext, useEffect } from 'react';
import { DiceContext, DiceContextType } from '@/lib/contexts/DiceContext';
import { motion } from 'framer-motion';
import useDice from '@/lib/hooks/useDice';

export default function UpperLog() {
    const diceContext = useContext(DiceContext);

    if (!diceContext) {
        throw new Error('useDiceContext must be used within a DiceProvider');
    }

    // States
    const { dices } = diceContext as DiceContextType;
    const variants = {
        bounce: { y: [ 0, -50, 0 ], transition: { delay:1.5, duration: 1.5, repeat: Infinity } },
        stop: { y: 0, transition: { duration: 1.5 } }
    }

  return (
    <>
    {
         dices.Dices.length > 1 ?
        <div className='upper-log w-full'>
            <motion.div 
                animate="bounce"
                whileHover="stop"
                variants={ variants }
                className='log-result'
            >
                <h5 className='text-xl font-bold mt-1 mb-0'> Tus Tiradas: </h5>
                <h3 className='text-lg font-semibold total mt-2'> { dices.Dices.length }D{ dices.Dices[0].faces }: { dices.Dices[0].dieResult } + { dices.Dices[0].mod } = { dices.Result } </h3>
                { dices.Dices.map((die, i) => <h3 key={ i } className='text-lg font-semibold total mt-2'> D{ die.faces }: { die.dieResult } + { die.mod } = { die.finalResult } </h3>) } 
            </motion.div>
            <div className='log-result'>
            </div>
        </div>

        :

        <div className='upper-log w-full'>
            <h5 className='text-xl font-bold m-1 mb-0'> Tu tirada: </h5>
            <h3 className='text-lg font-semibold total mt-2'> D{dices.Dices[0].faces }: { dices.Dices[0].dieResult } + { dices.Dices[0].mod } = { dices.Dices[0].finalResult }  </h3>
        </div>
    } 
    </>
  )
}
