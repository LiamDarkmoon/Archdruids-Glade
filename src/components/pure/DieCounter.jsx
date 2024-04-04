'use client'
import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Die from './Die';
import Bttn from './Btn';
import DieSelect from './DieSelect';
import { useAnimation, motion } from 'framer-motion'


const DiceCounter = ( { die, diceNumber, mod, roll, clear, diceRoll, chooseMod, chooseDie, chooseDNumber } ) => {

    const controls = useAnimation()
    const [rolling, setRolling] = useState(false)
    const [reset, setReset] = useState(false)

    const qnt = useRef(null);
    const cMod = useRef(null);
    const container = useRef(null);

    useEffect(() => {
            controls.start({ rotate: 360,transition: { ease: "easeOut", duration: 1 } });  
    }, [rolling])

    const handleDragEnd = (event, info) => {
        /* controls.start({ rotate: 360, transition: { ease: "easeOut", duration: 1 } }); */
        setRolling(!rolling)
        diceRoll()
    };

    const handleClearButton = () => {
        clear()
        setReset(true)
        qnt.current.value = 1;
        cMod.current.value = 0;
    }
    
    const handleRollButton = () => {
        setRolling(!rolling)
        diceRoll()
    }

    //suming the result of the last roll
    const lastRoll = []
    roll.forEach((item) => {
        if (item + mod >= 1 && item + mod <= die && die !== 20) {
            lastRoll.push(item + mod)
        } else if (die === 20 && item + mod >= 1 && item + mod <= 30) {
            lastRoll.push(item + mod)
        } else if (item + mod >= 1 && item + mod > die && die !== 20) {
            lastRoll.push(die)
        } else if (die === 20 && item + mod > 30) {
            lastRoll.push(30)
        } else lastRoll.push(1)
    })

    let result = 0;
    lastRoll.forEach((item) => {
        result = result + item
    })


    

    return (
        <div className='die w-10/12 flex flex-col items-center' >
            {
                diceNumber > 1 ?
                <div className='upper-log w-full'>
                    <div className='log-result'>
                        <h5 className='text-xl font-bold mt-1 mb-0'> Your Rolls: </h5>
                        <h3 className='text-lg font-semibold total mt-2'>{ diceNumber }D{ Number(die) }: { Number(roll[roll.length -1]) } + { Number(mod) } = { result } </h3>
                        { roll.map((roll, i) => <h3 key={ i } className='text-lg font-semibold total mt-2'> D{ Number(die) }: { Number(roll) } + { Number(mod) } = { Number(lastRoll[i]) } </h3>) }
                    </div>
                </div>

                :

                <div className='upper-log w-full'>
                    <h5 className='text-xl font-bold m-1 mb-0'> Your Roll: </h5>
                    <h3 className='text-lg font-semibold total mt-2'>{ diceNumber }D{ Number(die) }: { Number(roll[roll.length -1]) } + { Number(mod) } = { result } </h3>
                </div>
            } 
            <div className='w-full flex justify-evenly'>
                <div className='sm:w-1/2 w-full flex sm:ms-1 my-1 p-0'>
                    <input className='l w-4/12' type='number' ref={ qnt } defaultValue={ 1 } min={ 1 } max={ 50 } onChange={ chooseDNumber }/>
                    <DieSelect reset={ reset } className='w-4/12 p-0' change={ chooseDie} />
                    <input className='r w-4/12' type='number' ref={ cMod } defaultValue={ 0 } min={ -99 } max={ 99 } onChange={ chooseMod }/>
                </div>
                <div className='sm:w-1/2 w-10/12 flex justify-end sm:ms-2 my-1 p-0'>
                    <Bttn className='w-1/2 mx-1' click={ handleRollButton } text='Roll'/>
                    <Bttn className='w-1/2 mx-1' click={ handleClearButton } text='Clear'/>
                </div>
            </div>
            <div className='under-log w-full'>
                <motion.div 
                    className='flex flex-wrap h-full items-center justify-center px-4'
                    ref={ container }
                >
                    { roll.length > 0 ? roll.map((r, i) => 
                    <motion.span
                        key={i} 
                        className='w-3/12 sm:w-2/12 m-1 d-border'
                        drag
                        whileHover={{ scale: 1.1 }}
                        animate={rolling ? {rotate: 360,transition: { ease: "easeOut", duration: 1 }} :{ rotate: 0,transition: { ease: "easeOut", duration: 1 }}}
                        dragConstraints={ container }
                        dragTransition={{ bounceStiffness: 900, bounceDamping: 5, power: 1 }}
                        dragElastic={false}
                        onDragEnd={ handleDragEnd }
                    >
                        <Die die={ die } faces={ die === 20 || r === roll[roll.length -1] ? lastRoll[i] : r }/> 
                    </motion.span>)
                        : 
                        <p>¡wep!</p> }
                </motion.div>
            </div>
        </div>
    );
}

DiceCounter.propTypes = {
    diceNumber: PropTypes.number.isRequired,
    chooseDNumber: PropTypes.func.isRequired,
    die: PropTypes.number.isRequired,
    chooseDie: PropTypes.func.isRequired,
    diceRoll: PropTypes.func.isRequired,
    mod: PropTypes.number.isRequired,
    chooseMod: PropTypes.func.isRequired,
    roll: PropTypes.any.isRequired,
    clear: PropTypes.func.isRequired,
};


export default DiceCounter;
