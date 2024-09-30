import usePlayer from '@/lib/hooks/usePlayer';
import { useEffect, useState } from 'react';
import { Buffs, DeBuffs } from '../common/Buttons';

export default function Status({ i }: { i: number }) {
    const { players } = usePlayer();
    const [buffs, setBuffs] = useState(false)
    const [debuffs, setDebuffs] = useState(false)
    

    useEffect(() => {
        if(players.length > 0) {
            const b = players[i].buffs.length > 0 ? true : false
            const d = players[i].debuffs.length > 0 ? true : false
            setBuffs(b)
            setDebuffs(d)
        }0
    },[players])

  return (
    <div className="flex items-center gap-2">
        <Buffs show={buffs} click={()=> console.log(players[i].buffs)}/>
        <DeBuffs show={debuffs}/>
    </div>
  );
}