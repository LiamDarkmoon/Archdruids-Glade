import AddPlayerForm from './forms/AddPlayerForm'
import PartyActions from './PartyActions';
import PartyList from './PartyList';


export default function Party({ className } : { className?: string } ) {
  
  return (
    <article className={ className + ' flex flex-col gap-3'}>
        <h2 className="text-xl font-semibold border-b border-amber-950 pb-3">Grupo</h2>
        <AddPlayerForm/>
        <PartyList/>
        <PartyActions/>
    </article>
  )
}