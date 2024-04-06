'use client'
import { useState, context } from 'react';
import DiceCounter from '../pure/DieCounter';

export const DiceTray = () => {

    // State //
    const [die, setDie] = useState(20);
    const [mod, setMod] = useState(0);

    // inputHandler functions //
    const chooseDie = (e) => {
        setDie(Number(e.value));
    };
    const chooseMod = (e) => {
        const value = Number.parseInt(e.target.value);
        if (value >= -50 && value <= 50) {
            setMod(value);
        } else if (value > 50) {
            e.target.value = 50;
            setMod(50);
        } else {
            e.target.value = -50;
            setMod(-50)
        }
    };

    // Clear Button //
    const clearTray = () => {
        setMod(0);
        setDie(20);
    };

    
  return (

    <div className='relative w-full dicetray text-center py-4'>
        <h2 className="text-5xl w-9/12 sm:w-10/12 py-4"> Dice tray: </h2>
        <DiceCounter 
            die={ die } 
            mod={ mod }
            clear={ clearTray } 
            chooseMod={ chooseMod } 
            chooseDie={ chooseDie } 
            />
    </div>

  )
}


export default DiceTray