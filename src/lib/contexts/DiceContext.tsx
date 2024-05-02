import { useState, createContext } from 'react';
import { Dice } from '../diceClass';

export interface DiceContextType {
    dices: {
        Dice: number,
        Mod: number,
        Result: number,
        Dices: Dice[],
    },
    setDices: React.Dispatch<React.SetStateAction<{
        Dice: number,
        Mod: number,
        Result: number,
        Dices: Dice[],
    }>>
}

export const DiceContext = createContext<DiceContextType | undefined>(undefined);

export function DiceProvider({ children } : { children: React.ReactNode}) {
    const [dices, setDices] = useState({
        Dice: 20,
        Mod: 0,
        Result: 1,
        Dices: [new Dice(20, 0)],
    });


    return (
        <DiceContext.Provider value={{
            dices,
            setDices
        }}
        >
            {children}
        </DiceContext.Provider>
    )
};