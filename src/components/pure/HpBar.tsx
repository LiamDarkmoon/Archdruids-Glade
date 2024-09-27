import { player } from '@/lib/contexts/CombatContext'
import usePlayer from '@/lib/hooks/usePlayer'

export default function HpBar({ player, i }:{ player: player, i: number }) {
    const { handleHp } = usePlayer()

    return(
        <input 
        type="text" 
        value={ player.hp }
        min={0}
        max={999}
        onChange={ (e) => handleHp(e, i) }
        className="w-[46px] text-center px-2 ms-1"
        />
    )
}