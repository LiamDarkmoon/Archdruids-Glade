import { useState, useContext, useEffect } from "react";
import { CombatContext, CombatContextProps, potion } from '../../lib/contexts/CombatContext';
import ActionsDeck from "./Actions";

export default function Potions() {
    const combatContext = useContext(CombatContext)

    if (!combatContext) {
        throw new Error('useCombatContext must be used within a contextProvider');
    }

    const { players, setPlayers, monster, setMonster} = combatContext as CombatContextProps
    const [player, setPlayer] = useState(players[0]);

    useEffect(() => {
        setPlayer(players.filter(player => player.turn === true)[0])
    }, [])

    const handlePotion = (potion: potion) => { 
        const regex = /(\d+)\s*d\s*(\d+)\s*([\+\-]\s*\d+)?/; // Expresión regular para extraer los dados y el modificador  
        const matches = potion.effect.match(regex);  
            
        if (!matches) return 0;  
        
        const numDados = parseInt(matches[1], 10);  
        const diceFaces = parseInt(matches[2], 10);  
        const mod =  matches[3] ? parseInt(matches[3].replace(/\s/g, ''), 10) : 0;
        
        let healingTotal = mod;  

        for (let i = 0; i < numDados; i++) {  
            healingTotal += Math.floor(Math.random() * diceFaces) + 1; // Sumar el resultado de cada dado  
        }  
        setPlayers((prevPlayers) => prevPlayers.map((player) => player.turn === true ? { ...player, hp: player.hp + healingTotal} : player)) ;
        
        setPlayer((prevPlayer) => ({ ...prevPlayer, actions: { ...prevPlayer.actions, bonusAction: { ...prevPlayer.actions.bonusAction, taken: true }}}))
        setPlayers((prevPlayers) => prevPlayers.map((player) => player.turn === true ? { ...player, actions: { ...player.actions, bonusAction: { ...player.actions.bonusAction, taken: true }}} : player));
    }

  return (
    <ul
    className="flex flex-col gap-2"
    >
        {
            player.actions.bonusAction.taken ?
            <ActionsDeck/> :
            <>
            {
                player.potions && player.potions.map((potion, i) =>
                <li
                key={i}
                >
                    <div 
                    className="flex flex-col items-center justify-center bg-amber-200/50 rounded-md p-2 gap-1 hover:bg-amber-200/80 hover:scale-1.2 hover:cursor-pointer transition-all duration-200"
                    onClick={() => handlePotion(potion)}
                    >
                        <h2 className="w-full text-center font-semibold pb-2 border-b border-amber-950">
                            {potion.name}
                        </h2>
                        <p className=" p-3 italic text-sm">
                            { potion.description }
                        </p>
                    </div>
                </li>
            )}
            </>
        }
    </ul>
  )
}