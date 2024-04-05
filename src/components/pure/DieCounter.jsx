'use client'
import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Die from './Die';
import Bttn from './Btn';
import DieSelect from './DieSelect';
import { useAnimation, motion } from 'framer-motion';
import { Dice } from './../../lib/diceClass';


const DiceCounter = ( { die, mod, clear, chooseMod, chooseDie } ) => {
    // States
    const [reset, setReset] = useState(false)
    const [dices, setDices] = useState([new Dice(die, mod)]);
    const [result, setResult] = useState(1);
    const [lastResult, setLastResult] = useState(1);

    // Refs
    const diceNumberInputRef = useRef(null);
    const ModInputRef = useRef(null);
    const DiceContainerRef = useRef(null);

    const DiceNumber = (e) => {
        const value = Number.parseInt(e.target.value);
        if (value >= 1 && value <= 50) {
            const newDices = Array.from({ length: value }, () => new Dice(die, mod));
            setDices(newDices);
        } else if (value > 50) {
            const newDices = Array.from({ length: 50 }, () => new Dice(die, mod));
            setDices(newDices);
        }
        setResult(1)
    };

    const handleClearButton = () => {
        clear()
        setReset(true)
        diceNumberInputRef.current.value = 1;
        ModInputRef.current.value = 0;
        setDices([new Dice(die, mod)])
        setResult(1)
        setLastResult(1)
    }
    
    const handleRoll = (index) =>{
        let lastResult = dices[index].result
        const newDices = dices.map((dice, i) => {
            if (index === i) {
                dice.roll();
            }
            return dice;
        });
        setLastResult(newDices[index].result)
        setResult(result - lastResult + newDices[index].result)
        setDices(newDices);
    }

    const handleRollButton = () => {
        const newDices = dices.map(dice => {
            dice.roll();
            return dice;
        });
        setDices(newDices);
        let newResult = 0
        dices.map(die => {
            newResult = newResult + die.result;
        });
        setResult(newResult);
        setLastResult(newResult);
    }

    const handleDieSelect = (e) => {
        chooseDie(e)
        const value = Number.parseInt(e.value);
        const newDices = dices.map(dice => {
            dice.faces = value;
            dice.result = 1;
            return dice;
        })
        setDices(newDices);
    }
    
    return (
        <div className='die w-10/12 flex flex-col items-center' >
            {
                dices.length > 1 ?
                <div className='upper-log w-full'>
                    <div className='log-result'>
                        <h5 className='text-xl font-bold mt-1 mb-0'> Your Rolls: </h5>
                        <h3 className='text-lg font-semibold total mt-2'> { dices.length }D{ die }: + { mod } = { result } </h3>
                        { dices.map((die, i) => <h3 key={ i } className='text-lg font-semibold total mt-2'> D{ die.faces }: + { die.modifier } = { die.result } </h3>) } 
                    </div>
                </div>

                :

                <div className='upper-log w-full'>
                    <h5 className='text-xl font-bold m-1 mb-0'> Your Roll: </h5>
                    <h3 className='text-lg font-semibold total mt-2'> D{ die }: + { mod } = { lastResult }  </h3>
                </div>
            } 
            <div className='w-full flex justify-evenly'>
                <div className='sm:w-1/2 w-full flex sm:ms-1 my-1 p-0'>
                    <input className='l w-4/12' type='number' ref={ diceNumberInputRef } defaultValue={ 1 } min={ 1 } max={ 50 } maxLength={ 2 } pattern="\d*" onChange={ DiceNumber }/>
                    <DieSelect  className='w-4/12 p-0' change={ handleDieSelect } />
                    <input className='r w-4/12' type='number' ref={ ModInputRef } defaultValue={ 0 } min={ -50 } max={ 50 } maxLength={ 2 } pattern="-?\d*" onChange={ chooseMod }/>
                </div>
                <div className='sm:w-1/2 w-10/12 flex justify-end sm:ms-2 my-1 p-0'>
                    <Bttn className='w-1/2 mx-1' click={ handleRollButton } text='Roll'/>
                    <Bttn className='w-1/2 mx-1' click={ handleClearButton } text='Clear'/>
                </div>
            </div>
            <div className='under-log w-full'>
                <motion.div 
                    className='flex flex-wrap h-full items-center justify-center px-4'
                    ref={ DiceContainerRef }
                >
                    { 
                        dices && dices.map((die, i) => 
                            <motion.span
                                key={i} 
                                className='w-3/12 sm:w-2/12 m-1 d-border'
                                onClick={() => handleRoll(i)}
                                drag
                                whileHover={{ scale: 1.1 }}
                                animate={die.rolling ? {rotate: 360,transition: { ease: "easeOut", duration: 1 }} :{ rotate: 0,transition: { ease: "easeOut", duration: 1 }}}
                                dragConstraints={ DiceContainerRef }
                                dragTransition={{ bounceStiffness: 900, bounceDamping: 5, power: 1 }}
                                dragElastic={false}
                                onDragEnd={() => handleRoll(i) }
                            >
                                <Die die={ die.faces } faces={ die.result }/>
                            </motion.span>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

DiceCounter.propTypes = {
    die: PropTypes.number.isRequired,
    chooseDie: PropTypes.func.isRequired,
    mod: PropTypes.number.isRequired,
    chooseMod: PropTypes.func.isRequired,
    roll: PropTypes.any.isRequired,
    clear: PropTypes.func.isRequired,
};


export default DiceCounter;
