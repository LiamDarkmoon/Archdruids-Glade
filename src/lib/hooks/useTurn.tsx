import { useState, useContext, useEffect, useReducer } from "react";
import { CombatContext, CombatContextProps, attack } from '../../lib/contexts/CombatContext';

function actionReducer(state: string, action: string) {
    switch (action) {
        case 'Accion':
            // show actions
            return 'action';
        case 'Accion Rapida':
            // show bonus actions
            return 'bonus action';
        case 'Movimiento':
            // move
            return 'movement';
        case 'Next':
            // next turn
            return 'next';
        case '':
            // hide actions
            return '';
        }
    throw Error('Accion Desconocida:'  + action);
}

interface action {
    name: string,
    taken: boolean
}

const useTurn = () => {
    const combatContext = useContext(CombatContext)

    if (!combatContext) {
        throw new Error('useCombatContext must be used within a contextProvider');
    }

    const { players, setPlayers, monster, setMonster } = combatContext as CombatContextProps

    const [actionState, dispatch] = useReducer(actionReducer, '' );
    const [player, setPlayer] = useState(players[0]);
    const [actions, setActions] = useState<string[]>([]);
    const [taken, setTaken] = useState<boolean[]>([]);

    useEffect(() => {
        dispatch('')
        if(players && players.length > 0){
            setPlayer(players.filter(player => player.turn === true)[0])
        }
        if(player && player.actions){
            const actionList = Object.values(player.actions).map(action => (action as action).name)
            const actionTaken = Object.values(player.actions).map(action => (action as action).taken)
            setActions(actionList)
            setTaken(actionTaken)
        }
    }, [players, player])
    useEffect(() => {
        if(actionState === 'movement'){
            setPlayers((prevPlayers) => prevPlayers.map((player) => player.turn === true ? { ...player, actions: { ...player.actions, movement: { ...player.actions.movement, taken: true }}} : player))
        }
    }, [actionState])
    useEffect(() => {
        if (taken.length > 0 && taken[0] && taken[1] && taken[2]) {  
            dispatch('Next')
        } else dispatch('')
    },[taken])

    // HANDLERS //

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

    const handleNextTurn = () => {
        setPlayers((prevPlayers) => {  
            const currentTurnIndex = prevPlayers.findIndex(player => player.turn);  
            const nextTurnIndex = (currentTurnIndex + 1) % prevPlayers.length;  

            // Cambiar el turno del jugador actual a false  
            return prevPlayers.map((player, index) => {  
                if (index === currentTurnIndex) {  
                    return { ...player, turn: false, actions: {
                        action: { ...player.actions.action, taken: false},
                        bonusAction: { ...player.actions.bonusAction, taken: false},
                        movement: { ...player.actions.movement, taken: false}
                     }};  
                }  
                if (index === nextTurnIndex) {  
                    return { ...player, turn: true };  
                }  
                return player;  
            });
        });
        dispatch('')
    }

    return { players, monster, player, actions, taken, actionState, handleNextTurn, handleAttack, setPlayers, setMonster, setPlayer, setActions, setTaken, dispatch };
}
export default useTurn;