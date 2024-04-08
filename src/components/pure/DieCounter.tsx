'use client'
import { useRef, useState, useEffect, ChangeEvent } from 'react';
import Die from './Die';
import Bttn from './Btn';
import DieSelect from './DieSelect';
import { useAnimation, motion } from 'framer-motion';
import { Dice } from '../../lib/diceClass';

const DiceCounter = ( {
     die, 
     mod, 
     clear, 
     chooseMod, 
     chooseDie 
    } : {
        die: number,
        mod: number,
        clear: () => void,
        chooseMod: (e: ChangeEvent<HTMLInputElement>) => void,
        chooseDie: (e: any) => void
    } ) => {
    // States
    const [reset, setReset] = useState(false);
    const [dices, setDices] = useState([new Dice(die)]);
    const [result, setResult] = useState(1);
    const [dimentions, setDimentions] = useState({containerWidth: 0, containerHeight: 0, dieWidth: 0, dieHeight: 0});

    // Refs
    const diceNumberInputRef = useRef<HTMLInputElement>(null);
    const ModInputRef = useRef<HTMLInputElement>(null);
    const DiceContainerRef = useRef<HTMLDivElement>(null);
    const DiceRef = useRef<HTMLSpanElement>(null);
    const controls = useAnimation();

    useEffect(() => {
        if(DiceContainerRef.current && DiceRef.current){
            let width = DiceContainerRef.current.clientWidth;
            let Height = DiceContainerRef.current.clientHeight;
            let Dwidth = DiceRef.current.clientWidth;
            let DHeight = DiceRef.current.clientHeight;
            setDimentions({containerWidth: width, containerHeight: Height, dieWidth: Dwidth, dieHeight: DHeight});  
        }
    },[])

    const DiceNumber = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target) {
            const value = Number.parseInt(e.target.value);
            if (value >= 1 && value <= 50) {
                const newDices = Array.from({ length: value }, () => new Dice(die));
                setDices(newDices);
            } else if (value > 50) {
                e.target.value = '50';
                const newDices = Array.from({ length: 50 }, () => new Dice(die));
                setDices(newDices);
            } else {
                e.target.value = '1';
            }
            setResult(1)
        }
    };

    const handleMod = (e: ChangeEvent<HTMLInputElement>) => {
        
        const newDices = dices.map(dice => {
            dice.mod = Number.parseInt(e.target.value);
            return dice;
        })
        setDices(newDices);
    }

    const handleDieSelect = (e: any) => {
        chooseDie(e)
        const value = Number.parseInt(e.value);
        const newDices = dices.map(dice => {
            dice.faces = value;
            dice.dieResult = 1;
            return dice;
        })
        setDices(newDices);
    }

    const handleClearButton = () => {
        if(diceNumberInputRef.current && ModInputRef.current) {
            ModInputRef.current.value = '0';
            diceNumberInputRef.current.value = '1';
        }
        clear()
        setReset(true)
        setDices([new Dice(die)])
        setResult(1)
        controls.start({x: 0, y: 0, rotate: 0})
    }
    
    const handleRoll = (index: number) =>{
        let lastResult = dices[index].finalResult
        const newDices = dices.map((dice, i) => {
            if (index === i) {
                dice.roll();
            }
            return dice;
        });
        setResult(result - lastResult + newDices[index].finalResult)
        setDices(newDices);
        controls.start(dices[index].rolling ? {rotate: 360, transition: { duration: 1 } } : {rotate: 0, transition: { duration: 1 }})
    }

    const handleRollButton = () => {
        const newDices = dices.map(dice => {
            dice.roll();
            return dice;
        });
        setDices(newDices);
        let newResult = 0
        dices.map(die => {
            newResult = newResult + die.finalResult;
        });
        setResult(newResult);
        controls.start(dices[0].rolling ? {x: 25, rotate: 360, transition: { duration: 1 } } : {x: -25, rotate: 0, transition: { duration: 1 }})
    }

    const handleDragRoll = (index: number) =>{
        let lastResult = dices[index].finalResult
        const newDicesPosition = dices.map((dice, i) => {
            if (index === i) {
                dice.roll();
            }return dice;
        })
        setResult(result - lastResult + newDicesPosition[index].finalResult)
        setDices(newDicesPosition);
        controls.start(dices[index].rolling ? {rotate: 360, transition: { duration: 1 } } : {rotate: 0, transition: { duration: 1 }})
    }
    
    return (
        <div className='die w-10/12 flex flex-col items-center' >
            {
                dices.length > 1 ?
                <div className='upper-log w-full'>
                    <div className='log-result'>
                        <h5 className='text-xl font-bold mt-1 mb-0'> Your Rolls: </h5>
                        <h3 className='text-lg font-semibold total mt-2'> { dices.length }D{ die }: { die } + { dices[0].mod } = { result } </h3>
                        { dices.map((die, i) => <h3 key={ i } className='text-lg font-semibold total mt-2'> D{ die.faces }: { die.dieResult } + { die.mod } = { die.finalResult } </h3>) } 
                    </div>
                </div>

                :

                <div className='upper-log w-full'>
                    <h5 className='text-xl font-bold m-1 mb-0'> Your Roll: </h5>
                    <h3 className='text-lg font-semibold total mt-2'> D{ die }: { dices[0].dieResult } + { dices[0].mod } = { dices[0].finalResult }  </h3>
                </div>
            } 
            <div className='w-full flex justify-evenly'>
                <div className='sm:w-1/2 w-full flex sm:ms-1 my-1 p-0'>
                    <input className='l w-4/12' type='number' ref={ diceNumberInputRef } defaultValue={ 1 } min={ 1 } max={ 50 } maxLength={ 2 } required pattern="\d*" onChange={ DiceNumber }/>
                    <DieSelect  className='w-4/12 p-0' change={ handleDieSelect } />
                    <input className='r w-4/12' type='number' ref={ ModInputRef } defaultValue={ 0 } min={ -50 } max={ 50 } maxLength={ 2 } required pattern="-?\d*" onChange={ handleMod }/>
                </div>
                <div className='sm:w-1/2 w-10/12 flex justify-end sm:ms-2 my-1 p-0'>
                    <Bttn className='w-1/2 mx-1' click={ handleRollButton } >Roll</Bttn>
                    <Bttn className='w-1/2 mx-1' click={ handleClearButton } >Clear</Bttn>
                </div>
            </div>
            <div className='under-log w-full mouse-pointer'>
                <motion.div 
                    className='flex flex-wrap h-full items-center justify-center px-4'
                    ref={ DiceContainerRef }
                >
                    { 
                        dices && dices.map((die, i) => 
                            <motion.span
                                key={i}
                                ref={ DiceRef }
                                className='w-3/12 sm:w-2/12 m-1'
                                onClick={() => handleRoll(i)}
                                drag
                                whileHover={{ scale: 1.1 }}
                                animate={ controls }
                                dragConstraints={ DiceContainerRef }
                                dragTransition={{ bounceStiffness: 700, bounceDamping: 7}}
                                dragElastic={false}
                                onDragEnd={() => handleDragRoll(i) }
                            >
                                <Die die={ die.faces } faces={ die.dieResult }/>
                            </motion.span>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default DiceCounter;
