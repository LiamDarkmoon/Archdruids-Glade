import { useState, useContext, useEffect, useReducer } from "react";
import { CombatContext, CombatContextProps } from '../../lib/contexts/CombatContext';
import Actions from "./Actions";
import BonusActions from "./BonusActions";

function actionReducer(state: {action:string}, action: string) {
    switch (action) {
        case 'Accion':
            // show actions
            return { action: 'action' };
        case 'Accion Rapida':
            // show bonus actions
            return { action: 'bonus action' };
        case 'Movimiento':
            // move
            return { action: 'move' };
        case 'Reaccion':
            // show reactions
            return { action: 'reaction' };
        case '':
            // hide actions
            return { action: '' };
        }
    throw Error('Unknown action: ' + action);
}

interface action {
    name: string,
    taken: boolean
}

export default function ActionsDeck() {
    const [state, dispatch] = useReducer(actionReducer, { action: '' });
    const combatContext = useContext(CombatContext)

    if (!combatContext) {
        throw new Error('useCombatContext must be used within a contextProvider');
    }

    const { players, setPlayers, monster, setMonster } = combatContext as CombatContextProps
    const [player, setPlayer] = useState(players[0]);
    const [actions, setActions] = useState<string[]>([]);
    const [taken, setTaken] = useState<boolean[]>([]);

    useEffect(() => {
        setPlayer(players.filter(player => player.turn === true)[0])
        dispatch('')
        if(player && player.actions){
            const actionList = Object.values(player.actions).map(action => (action as action).name)
            const actionTaken = Object.values(player.actions).map(action => (action as action).taken)
            setActions(actionList)
            setTaken(actionTaken)
        }
    }, [players])
    useEffect(() => {
        if(state.action === 'move'){
            setPlayers((prevPlayers) => prevPlayers.map((player) => player.turn === true ? { ...player, actions: { ...player.actions, movement: { ...player.actions.movement, taken: true }}} : player))
        }
    }, [state])
    useEffect(() => {
        if (taken[0] && taken[1] && taken[2]) {  
            setPlayers((prevPlayers) => {  
                const currentTurnIndex = prevPlayers.findIndex(player => player.turn);  
                const nextTurnIndex = (currentTurnIndex + 1) % prevPlayers.length;  

                // Cambiar el turno del jugador actual a false  
                return prevPlayers.map((player, index) => {  
                    if (index === currentTurnIndex) {  
                        return { ...player, turn: false };  
                    }  
                    if (index === nextTurnIndex) {  
                        return { ...player, turn: true };  
                    }  
                    return player;  
                });  
            });  
        } 
    },[taken])
    

  return (
    <>
    {
        state.action === '' ?
        <ul
        className="flex flex-col gap-2"
        > 
            {
                actions.map((action, i)=> 
                    <li
                key={i}
                className="flex flex-col items-center justify-center bg-amber-200/50 rounded-md p-2 hover:bg-amber-200/80 hover:scale-1.2 hover:cursor-pointer transition-all duration-200"
                onClick={() => dispatch(taken[i] ? '' : action)}
                >
                    { taken[i] ? '¡Hecho!' : action  }
                </li>
            )}
        </ul>
        :
        state.action === 'action' && !taken[0] ? <Actions/> : 
        state.action === 'bonus action' && !taken[1] ? <BonusActions/> 
        :
        <></>
    }
    </>
  )
}
