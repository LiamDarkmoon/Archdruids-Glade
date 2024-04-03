import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Die from './Die';
import Bttn from './Btn';
import DieSelect from './DieSelect';


const DiceCounter = ( { die, diceNumber, mod, roll, clear, diceRoll, chooseMod, chooseDie, chooseDNumber } ) => {

    const [rolling, setRolling] = useState(false)
    const [reset, setReset] = useState(false)

    const qnt = useRef(null);
    const cMod = useRef(null);

    const rolled = () => {
        setRolling(false)
    }

    const handleClearButton = () => {
        clear()
        setRolling(false)
        setReset(true)
        qnt.current.value = 1;
        cMod.current.value = 0;
    }
    
    const handleRollButton = () => {
        setRolling(true)
        diceRoll()
    }

/*     const handleSelectDie = () => {
        chooseDie()
    } */


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
                <div className='upper-log w-10/12'>
                    <div className='log-result'>
                        <h5 className='mt-1 mb-0'> Your Rolls: </h5>
                        <h3 className='total mt-2'>{ diceNumber }D{ Number(die) }: { Number(roll[roll.length -1]) } + { Number(mod) } = { result } </h3>
                        { roll.map((roll, i) => <h3 key={ i }> D{ Number(die) }: { Number(roll) } + { Number(mod) } = { Number(lastRoll[i]) } </h3>) }
                    </div>
                </div>

                :

                <div className='upper-log w-full'>
                    <h5 className='m-1 mb-0'> Your Roll: </h5>
                    <h3 className='total mt-2'>{ diceNumber }D{ Number(die) }: { Number(roll[roll.length -1]) } + { Number(mod) } = { result } </h3>
                </div>
            } 
            <div className='w-full flex justify-evenly'>
                <div className='sm:w-1/2 w-full flex sm:ms-1 my-1 p-0'>
                    <input className='l w-4/12' type='number' ref={ qnt } defaultValue={ 1 } min={ 1 } max={ 50 } onChange={ chooseDNumber }/>
                    <DieSelect reset={ reset } className='w-4/12 p-0' change={ chooseDie} />
                    <input className='r w-4/12' type='number' ref={ cMod } defaultValue={ 0 } min={ -99 } max={ 99 } onChange={ chooseMod }/>
                </div>
                <div className='sm:w-1/2 w-10/12 flex justify-end sm:ms-2 my-1 p-0'>
                    <Bttn className='w-1/2 mx-1' type="submit" click={ handleRollButton } clean={ rolled } text='Roll'/>
                    <button className='w-1/2 mx-1 secondary-bttn' type="submit" onClick={ handleClearButton }> Clear </button>
                </div>
            </div>
            <div className='under-log w-full'>
                <div className='flex flex-wrap h-full items-center justify-center px-4'>{ roll.length > 0 ? roll.map((r, i) => <Die key={i} className='w-3/12 sm:w-2/12 m-1 d-border' die={ die } faces={ die === 20 || r === roll[roll.length -1] ? lastRoll[i] : r } rolling={ rolling }/>) : <p>¡wep!</p> }</div>
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
