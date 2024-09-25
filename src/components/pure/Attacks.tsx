import { useState, useContext } from "react";
import { CombatContext, CombatContextProps, attack } from '../../lib/contexts/CombatContext';
import { attacks } from "@/lib/Actions.enum";

export default function ActionsDeck() {
    const combatContext = useContext(CombatContext)

    if (!combatContext) {
        throw new Error('useCombatContext must be used within a contextProvider');
    }

    const { setMonster} = combatContext as CombatContextProps

    const handleDamage = (damage: string) => { 
        const regex = /(\d+)\s*d\s*(\d+)\s*([\+\-]\s*\d+)?/; // Expresión regular para extraer los dados y el modificador  
        const matches = damage.match(regex);  
            
        if (!matches) return 0;  

        const numDados = parseInt(matches[1], 10);  
        const diceFaces = parseInt(matches[2], 10);  
        const mod =  matches[3] ? parseInt(matches[3].replace(/\s/g, ''), 10) : 0;

        let damageTotal = mod;  
        console.log(`dados: ${numDados}, caras: ${diceFaces} ,mod: ${mod}`)

        for (let i = 0; i < numDados; i++) {  
            damageTotal += Math.floor(Math.random() * diceFaces) + 1; // Sumar el resultado de cada dado  
        }  
        setMonster((prevMonster) => ({ ...prevMonster, hp: prevMonster.hp - damageTotal }));
        console.log(`Monster took ${damageTotal} damage! ${mod}`)
    }

  return (
    <ul
    className="flex flex-col gap-2"
    >
        {
            attacks.map((attack, i) =>
            <li
            key={i}
            >
                <div 
                className="flex flex-col items-center justify-center bg-amber-200/50 rounded-md p-2 gap-1 hover:bg-amber-200/80 hover:scale-1.2 hover:cursor-pointer transition-all duration-200"
                onClick={() => handleDamage(attack.damage)}
                >
                    <h2 className="w-full text-center font-semibold pb-2 border-b border-amber-950">
                        {attack.name} {attack.bonus}
                    </h2>
                    <p className=" p-3 italic text-sm">
                        { attack.description }
                    </p>
                    <p className="font-bold">Daño: { attack.damage }</p>
                    <div className="flex items-center justify-around w-full">
                        <p className="font-semibold">Tipo: { attack.type }</p>
                        <p className="font-semibold">Rango: { attack.range }</p>
                    </div>
                </div>
            </li>
        )}
    </ul>
  )
}
