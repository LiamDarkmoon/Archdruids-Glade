import { useContext } from 'react';
import { DiceContext, DiceContextType } from '@/lib/contexts/DiceContext';
import useDice from '@/lib/hooks/useDice';
import Bttn from './Btn';
import DieSelect from './DieSelect';

export default function Controls() {
    const diceContext = useContext(DiceContext);

    if (!diceContext) {
        throw new Error('useDiceContext must be used within a DiceProvider');
    }

    // States
    const { dices } = diceContext as DiceContextType;
    const { HandleDiceNumber, handleDieSelect, HandleMod, handleRollButton, handleClear } = useDice();

  return (
    <div className='w-full flex justify-evenly'>
        <div className='sm:w-1/2 w-full flex sm:ms-1 my-1 p-0'>
            <input className='l w-4/12' type='number' name="diceNumber" value={ dices.Dices.length } min={ 1 } max={ 50 } maxLength={ 2 } required pattern="\d*" onChange={HandleDiceNumber}/>
            <DieSelect  className='w-4/12 p-0' value={ dices.Dice } change={ handleDieSelect } />
            <input className='r w-4/12' type='number' name="Mod" value={ dices.Mod } min={ -50 } max={ 50 } maxLength={ 2 } required pattern="-?\d*" onChange={HandleMod}/>
        </div>
        <div className='sm:w-1/2 w-10/12 flex justify-end sm:ms-2 my-1 p-0'>
            <Bttn className='w-1/2 mx-1' click={ handleRollButton } >Roll</Bttn>
            <Bttn className='w-1/2 mx-1' click={ handleClear } >Clear</Bttn>
        </div>
    </div>
  )
}
