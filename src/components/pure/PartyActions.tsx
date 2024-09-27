import useTurn from '@/lib/hooks/useTurn';
import ActionList from './ActionList';
import ActionsDeck from './ActionsDeck';

export default function PartyActions() {
    const { player } = useTurn()

  return (
    <div className='flex flex-col gap-2 text-sm'>
      <h2 className='text-2xl font-bold'>Turno de { player ? player.name : '' }</h2>
      <ActionList/>
      <ActionsDeck/>
    </div>
  )
}
