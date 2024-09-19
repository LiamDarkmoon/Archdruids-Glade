import { useContext, useEffect, useState } from 'react'
import AddPlayerForm from './forms/AddPlayerForm'
import { CombatContext, CombatContextProps } from '../../lib/contexts/CombatContext';
import Button from './Btn';
import { Reorder } from "framer-motion"

export default function PartyList({ className } : { className?: string } ) {
    const combatContext = useContext(CombatContext)

    if (!combatContext) {
        throw new Error('useCombatContext must be used within a contextProvider');
    }

    const { players, setPlayers } = combatContext as CombatContextProps
    const [initiative, setInitiative] = useState<number[]>([0,1,2,3,4,5,6,7,8]);

    const handleDissmisPlayer = (i: number) => {
        if (players.length > 0) {
            let newPlayers = [...players]
            newPlayers.splice(i, 1)
            setPlayers(newPlayers)
        }
    }

    const handleHp = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const { value } = e.target
        let currentHp = value
        if (players.length > 0) {
            let newPlayers = [...players]
            newPlayers[i].hp = currentHp
            setPlayers(newPlayers)
        }
    }

    const handleTurn = (i: number) => {
        if (players.length > 0) {
            let newTurn = [...players]
            newTurn[i].turn = !newTurn[i].turn
            newTurn.forEach((player, index) => {
                if (index !== i) {
                    player.turn = false
                }
            })
            newTurn.unshift(newTurn.splice(i, 1)[0])
            setPlayers(newTurn)
        }
    }
  
  return (
    <div className={ className + ' flex flex-col gap-2'}>
        <h2 className="text-xl font-semibold border-b border-amber-950 pb-3 mb-2">Grupo</h2>
        <AddPlayerForm/>
        <Reorder.Group 
        axis='y'
        values={initiative}
        onReorder={setInitiative}
        className="flex flex-col flex-wrap gap-3"
        >
            {
                players.map((player, i) => 
                <Reorder.Item
                key={initiative[i]}
                value={initiative[i]}
                className="flex items-center gap-2 cursor-pointer text-start"
                >
                    <p className="w-[150px] text-lg font-medium truncate border-b border-amber-950">{player.name}</p>
                    <p className="w-[50] text-lg font-medium">HP:
                        <input 
                        type="text" 
                        value={ player.hp }
                        min='0'
                        max='999'
                        onChange={ (e) => handleHp(e, i) }
                        className="w-[46px] px-2 ms-1"
                        />
                    </p>
                    {
                        player.turn ?
                        <button 
                        className='bg-amber-600 font-bold rounded-md py-2 px-4'
                        onClick={() => handleTurn(i)}
                        >F</button>
                        :
                        <button 
                        className='bg-amber-400 font-bold rounded-md py-2 px-4'
                        onClick={() => handleTurn(i)}
                        >T</button>
                    }
                    <Button click={()=> handleDissmisPlayer(i)} className='w-auto px-4 text-sm ms-auto'>
                        E
                    </Button>
                </Reorder.Item>
                )
            }
        </Reorder.Group> 
    </div>
  )
}
