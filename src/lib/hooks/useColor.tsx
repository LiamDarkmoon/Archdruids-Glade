import { useState, useContext } from 'react';
import { charactersContext } from './../contexts/chractersContext';

export default function useColor(){
    const charsContext = useContext(charactersContext);

    if (!charsContext) {
        throw new Error("useDice must be used within a DiceProvider");
    }

    const [color, setColor] = useState<string>("");
    const colors = {
        "sorcerer": "bg-rose-950",
        "blue": "#0000FF",
        "druid": "bg-emerald-950",
        "yellow": "#FFFF00",
        "purple": "#800080",
        "orange": "#FFA500",
        "pink": "#FFC0CB",
        "brown": "#A52A2A",
        "black": "#000000",
    }



        if(char.clas === "sorcerer"){
            setColor(colors.sorcerer)
        } else setColor(colors.druid)
 

    return { color };
}