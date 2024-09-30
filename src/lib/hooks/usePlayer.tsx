import { useContext, useEffect, useState } from 'react'
import { CombatContext, CombatContextProps, player } from '../../lib/contexts/CombatContext';

export default function usePlayer() {
    const combatContext = useContext(CombatContext)

    if (!combatContext) {
        throw new Error('useCombatContext must be used within a contextProvider');
    }

    const { players, setPlayers, initiative, setInitiative } = combatContext as CombatContextProps
    const [init, SetInit] = useState(0)

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

    const handleInit = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const { value } =e.target
        const newInitiative = parseInt(value)
        SetInit(newInitiative)
      }
      
    
    const handleInitiativeCount = (e: React.FormEvent<HTMLFormElement>, i: number) => {
        e.preventDefault()
        const newOrder = [...initiative]
        newOrder[i] = init
        newOrder.sort((a, b) => b - a)
        setInitiative(newOrder)
        if (players.length > 0) {
            const newPlayers = [...players]
            newPlayers[i].initiative = init
            setPlayers(newPlayers)
        }
    }

    const handleReaction = (i: number) => {
        if (players.length > 0) {
            let newPlayers = [...players]
            newPlayers[i].reaction = false
            setPlayers(newPlayers)
        }
    }
    
    return { players, handleDissmisPlayer, handleHp, handleReaction, handleInit, handleInitiativeCount }
}