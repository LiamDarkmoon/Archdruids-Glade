import { useState } from 'react';
import { player } from '../../lib/contexts/CombatContext';
import HpBar from './HpBar';
import PlayerStatus from './PlayerStatus';
import InitiativeCount from './InitiativeCount';

export default function Player({ player, i } : { player: player, i: number }) {
    const [show, setShow] = useState(false)
    
  return (       
    <li
    key={i}
    className="w-full flex items-center"
    >
      {
        show ?
        <InitiativeCount i={i} setShow={setShow} />
        :
        <div className="w-full  flex items-center gap-2 p-2 text-start cursor-pointer rounded-md hover:bg-amber-200/50">
          <p className="w-[100px] sm:w-[82px] text-lg font-bold truncate border-b border-amber-950"
          onClick={() => setShow(!show)}
          >
            { player.name }
          </p>
          <p className="font-medium">HP:
              <HpBar player={ player } i={i} />
          </p>
          <PlayerStatus turn={ player.turn } i={i}/>
        </div>
      }
    </li>
  )
}
