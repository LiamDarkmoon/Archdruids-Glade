'use client'
import { useContext } from 'react';
import { DiceContext, DiceContextType } from '@/lib/contexts/DiceContext';
import { motion } from 'framer-motion';
import UpperLog from './UpperLog';
import Controls from './CounterControls';
import Die from './Die';

const DiceCounter = () => {
    const diceContext = useContext(DiceContext);

    if (!diceContext) {
        throw new Error('useDiceContext must be used within a DiceProvider');
    }

    // States
    const { dices } = diceContext as DiceContextType;
    const variants = {
        shaking: { rotate: [0, 90, 0, -90, 0], transition: { duration: 1 } },
    }

    return (
        <div className='die w-10/12 flex flex-col items-center' >
            <UpperLog/>
            <Controls/>
            <motion.div 
                animate={ { rotate: [0, 5, 0, -5, 0], transition: { duration: 0.5 } } }
                className='under-log w-full cursor-pointer'
            >
                <div 
                    className='flex flex-wrap h-full items-center justify-center px-4'
                >
                    { 
                        dices && dices.Dices.map((die, index) => 
                        <Die key={index} index={index} />
                    )}
                </div>
            </motion.div>
        </div>
    );
}

export default DiceCounter;
