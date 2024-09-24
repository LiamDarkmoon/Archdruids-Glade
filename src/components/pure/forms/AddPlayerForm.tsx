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
    const [visible, setVisible] = useState(false)

    //input handler
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPlayer(value);
    }

    const handleAddPlayer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (player !== '' && visible) {
            setPlayers([...players, {name: player, hp: '000', turn:false}])
            setPlayer('')
            setVisible(false)
        }
    }

    const handleShow = () => {
        if (player === '') {
            setVisible(!visible)
        }
    }

  return (
    <form 
    onSubmit={handleAddPlayer}
    className='relative flex gap-2 items-center w-full'
    >
        {
            visible &&
            <input 
            type="text"
            name='playerName'
            placeholder='Agregar miembro'
            className='w-full md:w-[319px] p-2 border border-amber-700 rounded-md'
            onChange={handleInputChange}
            value={player}
            />
        }
        <Button
        className='w-auto absolute -top-16 right-0'
        click={handleShow}
        >
            <svg fill="#fffbeb" width="24px" height="24px" version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="m596.01 241.77c-14.957-22.039-37-40.145-62.188-51.168-16.531-7.082-35.426-11.02-55.105-11.02h-157.44c-77.934 0-141.7 63.762-141.7 141.7v157.44c0 77.934 63.762 141.7 141.7 141.7h157.44c19.68 0 38.574-3.9375 55.105-11.02 25.191-11.02 47.23-28.34 62.188-51.168 15.746-22.828 24.402-50.383 24.402-79.508v-157.44c0-29.125-8.6562-56.676-24.402-79.508zm-101.55 173.97h-78.719v78.719h-31.488v-78.719h-78.719v-31.488h78.719v-78.719h31.488v78.719h78.719z"/>
            </svg>
        </Button>
    </form>
  )
}
