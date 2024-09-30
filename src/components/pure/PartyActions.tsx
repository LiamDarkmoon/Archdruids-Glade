import useTurn from '@/lib/hooks/useTurn';
import ActionList from './ActionList';
import ActionsDeck from './ActionsDeck';
import { StartButton } from '../common/Buttons';

export default function PartyActions() {
    const { player, round, handleRound } = useTurn()

  return (
    <div className='flex flex-col gap-2 text-sm'>
        <div className="flex justify-between items-center">
          <h2 className='text-2xl font-bold'>Turno de { player ? player.name : '' }</h2>
          <StartButton click={ handleRound } next={round !== 0 ? true : false}/>
        </div>
      <ActionList/>
      <ActionsDeck/>
    </div>
  )
}
