import { useState, useContext, useEffect, useReducer } from "react";
import { CombatContext, CombatContextProps, attack, spell } from '../../lib/contexts/CombatContext';

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
        case 'Next Round':
            // next round
            return 'next round';
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

    const { round, setRound, players, setPlayers, monster, setMonster } = combatContext as CombatContextProps

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
        if (taken.length > 0 && taken[0] && taken[1] && taken[2] && players[players.length-1].name === player.name) {  
            dispatch('Next Round')
        } else if (taken.length > 0 && taken[0] && taken[1] && taken[2]) {
            dispatch('Next')
        } else dispatch('')
    },[taken])

    // HANDLERS //

    const handleRound = () => {
        setRound((prevRound) => prevRound + 1)
        setPlayers((prevPlayers) => prevPlayers.map((player) => ({...player, reaction: true})))
        setPlayers((prevPlayers) => prevPlayers.map((player, index) => index === 0 ? { ...player, turn: true } : { ...player, turn: false }))
        setPlayers((prevPlayers) => prevPlayers.map((player) => ({...player, actions: { ...player.actions, action: { ...player.actions.action, taken: false }, bonusAction: { ...player.actions.bonusAction, taken: false }, movement: { ...player.actions.movement, taken: false }}})))
        setPlayers((prevPlayers) =>   
            prevPlayers.map((p) => {  
              // Si hay buffs, descontamos uno a la duración de cada buff  
              if (p.buffs.length > 0) {  
                return {  
                  ...p,  
                  buffs: p.buffs  
                    .map(buff => ({ ...buff, duration: buff.duration - 1 })) // Descontamos 1 a duración  
                    .filter(buff => buff.duration > 0) // Filtramos buffs con duración > 0  
                };  
              }  
              // Si no hay buffs, simplemente retornamos el jugador sin cambios  
              return p;  
            })  
          )
    }

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

    const handleSpell = (spell: spell) => { 
        const regex = /(\d+)\s*d\s*(\d+)\s*([\+\-]\s*\d+)?/; // Expresión regular para extraer los dados y el modificador  
        if(spell.bonus && spell.damage) {
            const matches = spell.damage.match(regex);
            const hit = Math.floor(Math.random() * 20) + 1 + spell.bonus;
            
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
        }

        if(spell.type === 'buff') {
            const buff = {
                name: spell.name,
                duration: spell.duration,
            }
            player.buffs = [...player.buffs, buff];
            setPlayers((prevPlayers) => prevPlayers.map((p) => p.turn === true ? player : p));
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

    return { round, players, monster, player, actions, taken, actionState, handleRound, handleNextTurn, handleAttack, handleSpell, setPlayers, setMonster, setPlayer, setActions, setTaken, dispatch };
}
export default useTurn;