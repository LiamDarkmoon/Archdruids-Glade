'use client'
import { useState } from 'react';
import { randomDieFace } from '../../lib/logics';
import DiceCounter from '../pure/DieCounter';
import { D20 }  from '../pure/Dice';


export const DiceTray = () => {

    // State //
    const [dieNumber, setDieNumber] = useState(1);
    const [die, setDie] = useState(20);
    const [roll, setRoll] = useState([1]);
    const [mod, setMod] = useState(0);
    
    let last = roll[roll.length - 1];
    const lastResult = last + mod >= 1 ? last + mod : 1;


    // Roll Dice //
    const rollDice = () => {

        let multRand = [];

        for (let i = 1; i <= dieNumber; i++) {
            multRand.push(randomDieFace( die ));
            setRoll([...multRand])
        }
    };


    // inputHandler functions //
    const chooseDie = (e) => {
        setDie(Number(e.value));
        setRoll([1]);
        setDieNumber(1);
        console.log(e.value)
    };

    const chooseMod = (e) => {
        if (e.target.value <= 99) setMod(Number(e.target.value));
    };

    const chooseDNumber = (e) => {
        if (e.target.value <= 50 && e.target.value >= 1) setDieNumber(Number(e.target.value));
    };


    // Clear Button //
    const clearTray = () => {
        setRoll([1]);
        setMod(0);
        setDie(20);
        setDieNumber(1);
        
    };

    
  return (

    <div className='relative w-full dicetray text-center py-4'>
        <h2 className="text-5xl w-9/12 sm:w-10/12 py-4"> Dice tray: </h2>
        <DiceCounter 
            diceNumber={ dieNumber } 
            die={ die } 
            roll={ roll }
            mod={ mod }
            diceRoll={ rollDice }
            clear={ clearTray } 
            chooseMod={ chooseMod } 
            chooseDie={ chooseDie } 
            chooseDNumber={ chooseDNumber }
            />
    </div>

  )
}


export default DiceTray