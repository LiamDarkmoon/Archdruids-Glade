'use client'
import { useContext, useState } from 'react'
import Button from '../../pure/Btn';
import { CombatContext, CombatContextProps } from '../../../lib/contexts/CombatContext';

export default function AddPlayerForm() {
    const combatContext = useContext(CombatContext)

    if (!combatContext) {
        throw new Error('useCombatContext must be used within a contextProvider');
    }

    const { players, setPlayers } = combatContext as CombatContextProps
    const [player, setPlayer] = useState('')

    //input handler
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPlayer(value);
    }

    const handleAddPlayer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (player.length > 0) {
            setPlayers([...players, {name: player, hp: '000', turn:false}])
            setPlayer('')
        }
    }

  return (
    <form 
    onSubmit={handleAddPlayer}
    className='flex gap-2 items-center w-full'
    >
        <input 
        type="text"
        name='playerName'
        placeholder='Agregar miembro'
        className='w-[320px] p-2 border border-amber-700 rounded-md'
        onChange={handleInputChange}
        value={player}
        />
        <Button
        className='w-auto px-4'
        >
            Agregar
        </Button>
    </form>
  )
}
