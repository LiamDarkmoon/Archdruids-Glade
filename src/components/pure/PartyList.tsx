import useTurn from '@/lib/hooks/useTurn';
import Player from './Player';

export default function PartyList() {
    const { players } = useTurn()

  return (
    <ul
    className="max-w-full flex flex-col pb-3 border-b border-amber-950"
    >
        {
            players && players.map((player, i) => 
            <Player key={ i } player={ player } i={i}/> 
        )}
    </ul>
  )
}
