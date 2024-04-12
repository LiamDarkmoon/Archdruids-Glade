'use client'
import { DiceProvider } from '@/lib/contexts/DiceContext';
import DiceCounter from '../pure/DieCounter';

export const DiceTray = () => {
  
  return (
    <DiceProvider>
      <div className='relative w-full dicetray text-center py-4'>
          <h2 className="text-5xl w-9/12 sm:w-10/12 py-4"> Dice tray: </h2>
          <DiceCounter/>
      </div>
    </DiceProvider>
  )
}

export default DiceTray