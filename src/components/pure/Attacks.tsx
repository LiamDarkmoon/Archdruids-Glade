import { useState, useContext, useEffect } from "react";
import { CombatContext, CombatContextProps, attack } from '../../lib/contexts/CombatContext';
import ActionsDeck from "./Actions";

export default function Attacks() {
    const combatContext = useContext(CombatContext)

    if (!combatContext) {
        throw new Error('useCombatContext must be used within a contextProvider');
    }

    const { players, setPlayers, monster, setMonster} = combatContext as CombatContextProps
    const [player, setPlayer] = useState(players[0]);

    useEffect(() => {
        setPlayer(players.filter(player => player.turn === true)[0])
    }, [])

    const handleAttack = (attack: attack) => { 
        const hit = Math.floor(Math.random() * 20) + 1 + attack.bonus;
        
        const regex = /(\d+)\s*d\s*(\d+)\s*([\+\-]\s*\d+)?/; // Expresión regular para extraer los dados y el modificador  
        const matches = attack.damage.match(regex);  
            
        if (!matches) return 0;  
        
        const numDados = parseInt(matches[1], 10);  
        const diceFaces = parseInt(matches[2], 10);  
        const mod =  matches[3] ? parseInt(matches[3].replace(/\s/g, ''), 10) : 0;
        
        let damageTotal = mod;  

        if(hit >= monster.ca) {
            for (let i = 0; i < numDados; i++) {  
                damageTotal += Math.floor(Math.random() * diceFaces) + 1; // Sumar el resultado de cada dado  
            }  
            setMonster((prevMonster) => ({ ...prevMonster, hp: prevMonster.hp - damageTotal }));
        }
        
        if(player.multiattack === undefined) {
            setPlayer((prevPlayer) => ({ ...prevPlayer, actions: { ...prevPlayer.actions, action: { ...prevPlayer.actions.action, taken: true }}}));
        } else if(player.multiattack !== undefined) {
            if (player.multiattack > 0) {
                let leftAttacks = player.multiattack -= 1;
                setPlayer((prevPlayer) => ({ ...prevPlayer, multiattack: leftAttacks }));
            } else if (player.multiattack === 0) {
                setPlayer((prevPlayer) => ({ ...prevPlayer, actions: { ...prevPlayer.actions, action: { ...prevPlayer.actions.action, taken: true }}}));
            }
        }
        setPlayers((prevPlayers) => prevPlayers.map((player) => player.turn === true ? { ...player, actions: { ...player.actions, action: { ...player.actions.action, taken: true }}} : player));
    }

  return (
    <ul
    className="flex flex-col gap-2"
    >
        {
            player.actions.action.taken ?
            <ActionsDeck/> :
            <>
            {
                player.attacks.map((attack, i) =>
                <li
                key={i}
                >
                    <div 
                    className="flex flex-col items-center justify-center bg-amber-200/50 rounded-md p-2 gap-1 hover:bg-amber-200/80 hover:scale-1.2 hover:cursor-pointer transition-all duration-200"
                    onClick={() => handleAttack(attack)}
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
            </>
        }
    </ul>
  )
}
