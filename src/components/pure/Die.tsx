import { D20, D12, D10, D8, D6, D4 } from './Dice';
import { useContext } from 'react';
import { DiceContext, DiceContextType } from '@/lib/contexts/DiceContext';
import useDice from '@/lib/hooks/useDice';
import { motion } from 'framer-motion';

const Die = ({ index } : { index: number }) => {

    const diceContext = useContext(DiceContext);

    if (!diceContext) {
        throw new Error('useDiceContext must be used within a DiceProvider');
    }

    // States
    const { dices } = diceContext as DiceContextType;
    const { handleRoll } = useDice();

    const d:Array<{ id: number, die: JSX.Element}> = [
        {
            id: 20, 
            die:<D20 faces={dices.Dices[index].dieResult} key={20}/>
        },
        {
            id: 12, 
            die:<D12 faces={dices.Dices[index].dieResult} key={12}/>
        },
        {
            id: 10, 
            die:<D10 faces={dices.Dices[index].dieResult} key={10}/>
        },
        {
            id: 8, 
            die:<D8 faces={dices.Dices[index].dieResult} key={8}/>
        },
        {
            id: 6, 
            die:<D6 faces={dices.Dices[index].dieResult} key={6}/>
        },
        {
            id: 4, 
            die:<D4 faces={dices.Dices[index].dieResult} key={4}/>
        },
        ];

    return (
        <motion.span
            className='w-3/12 sm:w-2/12 m-1'
            onClick={() => handleRoll(index)}
            whileHover={{ scale: 1.1 }}
            animate={ dices.Dices[index].rolling ? { rotate: 360 , transition: { duration: 1.5, easeout: "easeInOut" } } : { rotate: -360,  transition: { duration: 1.5, easeout: "easeInOut" } } }
        >
            { d.map((dice, i: number) => 
             dices.Dices[index].faces === d[i].id ? d[i].die : null) }
        </motion.span>
    )
}

export default Die;
