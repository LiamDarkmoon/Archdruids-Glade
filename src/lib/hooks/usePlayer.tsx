import { useContext, useEffect, useState } from 'react'
import { CombatContext, CombatContextProps, player } from '../../lib/contexts/CombatContext';

export default function usePlayer() {
    const combatContext = useContext(CombatContext)

    if (!combatContext) {
        throw new Error('useCombatContext must be used within a contextProvider');
    }

    const { players, setPlayers } = combatContext as CombatContextProps


    const handleDissmisPlayer = (i: number) => {
        let newPlayers = [...players]
        if (players.length > 0) {
            newPlayers = players.filter((_, index) => index !== i)
            setPlayers(newPlayers)
        }
    }

    const handleHp = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const { value } = e.target
        let currentHp = parseInt(value)
        if (players.length > 0) {
            let newPlayers = [...players]
            newPlayers[i].hp = currentHp
            setPlayers(newPlayers)
        }
    }

    const handleInitiative = (i: number) => {
        if (players.length > 0) {
            setPlayers((prevPlayers) =>  
                prevPlayers.map((player, index) => ({  
                    ...player,  
                    turn: index === i // Ajusta el booleano según si el índice coincide  
                }))  
            )
            if (players[i].turn) {
                const newOrder = [...players]
                const currentPlayer = newOrder.splice(0, 1)[0]
                newOrder.push(currentPlayer)
                setPlayers(newOrder)
            }
        }
    }

    return { handleDissmisPlayer, handleHp, handleInitiative }
}