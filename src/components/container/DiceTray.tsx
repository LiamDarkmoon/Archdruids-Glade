'use client'
import { useContext } from 'react';
import { DiceContext, DiceContextType } from '@/lib/contexts/DiceContext';
import DiceCounter from '../pure/DieCounter';
import DiceDial from './../pure/DiceDial';


export const DiceTray = () => {
  const diceContext = useContext(DiceContext);

    if (!diceContext) {
        throw new Error('useDiceContext must be used within a DiceProvider');
    }

    // States
    const { hidden } = diceContext as DiceContextType;
  
  return (
    <>
      <DiceDial/>
      {
        !hidden &&
        <div 
          className='relative w-full sm:h-[70%] dicetray glass bg-amber-100/40 border border-amber-100/30 text-center py-5 mb-4 duration-500 ease-out'
        >
            <DiceCounter/>
        </div>
      }
    </>
  )
}

export default DiceTray