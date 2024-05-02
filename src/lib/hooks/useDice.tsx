import { useContext, ChangeEvent } from 'react';
import { DiceContext, DiceContextType } from '@/lib/contexts/DiceContext';
import { Dice } from '../../lib/diceClass';



export default function useDice() {
    const diceContext = useContext(DiceContext);

    if (!diceContext) {
        throw new Error("useDice must be used within a DiceProvider");
    }

    // States
    const { dices, setDices } = diceContext as DiceContextType;

    const HandleDiceNumber = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target) {
            const value = Number.parseInt(e.target.value);
            if (value >= 1 && value <= 50) {
                const newDices = [...dices.Dices,...Array.from({ length: value - dices.Dices.length }, () => new Dice(dices.Dice, dices.Mod))];
                setDices(prev => ({
                    ...prev,
                    Dices: newDices
                }));
                if(value < newDices.length){
                    setDices(prev => ({
                        ...prev,
                        Dices: newDices.slice(0,value)
                    }));
                }
            } else if (value > 50) {
                const newDices = [...dices.Dices,...Array.from({ length: 50 - dices.Dices.length }, () => new Dice(dices.Dice, dices.Mod))];
                setDices(prev => ({
                    ...prev,
                    Dices: newDices
                }));
            } else {
                const newDices = dices.Dices.slice(0,1);
                setDices(prev => ({
                    ...prev,
                    Dices: newDices
                }));
            }
        }
    };

    // Choose Die //
    const handleDieSelect = (e: any) => {
        const value = Number.parseInt(e.value);
        const newDices = dices.Dices.map((dice, index) => {
            if (index === dices.Dices.length - 1) {
                dice.faces = value;
                dice.dieResult = 1;
            }
            return dice;
        })
        setDices(prev => ({
            ...prev,
            Dice: value,
            Dices: newDices
        }));
    }

    // Choose Mod //
    const HandleMod = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value);
        if (value >= -50 && value <= 50) {
            const newDices = dices.Dices.map(dice => {
                dice.mod = value;
                return dice;
            })
            setDices(prev => ({
                ...prev,
                Mod: value,
                Dices: newDices
            }));
        } else if (value > 50) {
            const newDices = dices.Dices.map(dice => {
                dice.mod = 50;
                return dice;
            })
            setDices(prev => ({
                ...prev,
                Mod: 50,
                Dices: newDices
            }));
        } else if (value < -50) {
            const newDices = dices.Dices.map(dice => {
                dice.mod = -50;
                return dice;
            })
            setDices(prev => ({
                ...prev,
                Mod: -50,
                Dices: newDices
            }));
        }
    };

    // Clear Button //
    const handleClear = () => {
        setDices({
            Dice: 20,
            Mod: 0,
            Result: 1,
            Dices: [new Dice(20, 0)],
        });
    };

    // Roll onDiceClick
    const handleRoll = (index: number) =>{
        let lastResult = dices.Dices[index].finalResult
        const newDices = dices.Dices.map((dice, i) => {
            if (index === i) {
                dice.roll();
            }
            return dice;
        });
        setDices(prev => ({
            ...prev,
            Dices: newDices,
            Result: dices.Result - lastResult + dices.Dices[index].finalResult
        }));
    }
    // Roll onButtonClick
    const handleRollButton = () => {
        const newDices = dices.Dices.map(dice => {
            dice.roll();
            return dice;
        });
        setDices(prev =>({
            ...prev,
            Dices: newDices,
            Result: dices.Dices.reduce((acc, dice) => acc + dice.finalResult, 0)
        }));
    }

  return { HandleDiceNumber, HandleMod, handleClear, handleRoll, handleRollButton, handleDieSelect }
}


