import { useContext, useState, useEffect } from 'react'
import { CombatContext, CombatContextProps } from '../../lib/contexts/CombatContext';
import ActionList from './ActionList';
import ActionsDeck from './ActionsDeck';
import { actionsT } from '@/lib/ActionTypes';

export default function PartyActions() {
    const combatContext = useContext(CombatContext)

    if (!combatContext) {
        throw new Error('useCombatContext must be used within a contextProvider');
    }

    const { players, setPlayers } = combatContext as CombatContextProps
    const [currentPlayer, setCurrentPlayer] = useState(players[0])
    const [turn, setTurn] = useState('Jugador')

    useEffect(() => {
        const player = players.filter(player => player.turn).length > 0 ? players.filter(player => player.turn)[0] : players[0]
        setCurrentPlayer(player)
        const newTurn = player ? player.name : ''
        setTurn(newTurn)
    }, [players])

  return (
    <div className='flex flex-col gap-2 text-sm'>
      <h2 className='text-2xl font-bold'>Turno de { turn }</h2>
      <ActionList actions={ currentPlayer ? currentPlayer.actions : actionsT }/>
      <ActionsDeck/>
    </div>
  )
}
