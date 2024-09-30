import { ChainIcon, NextIcon, ReactionIcon, ShieldIcon, SwordIcon } from '../common/Icons';

export function Buffs({ click, show }: { click?: any, show: boolean }) {
  return (
    <button 
    className='bg-none rounded-md'
    onClick={click}
    >
        <ShieldIcon show={show}/>
    </button>
  );
}
export function DeBuffs({ click, show }: { click?: any, show: boolean }) {
  return (
    <button 
    className='bg-none rounded-md'
    onClick={click}
    >
        <ChainIcon show={show}/>
    </button>
  );
}
export function Reaction({ click, show }: { click?: any, show: boolean }) {
  return (
    <button
      className="bg-none rounded-md"
      onClick={click}
    >
      <ReactionIcon show={show}/>
    </button>
  );
}
export function StartButton({ click, next }: { click?: any, next: boolean }) {
  return (
    <button
      className="bg-emerald-700 rounded-md p-2 font-bold text-lg"
      onClick={click}
    >
      {
        next ? 
        <NextIcon/>
        :
        <SwordIcon fill="#fef3c7"/>
      }
    </button>
  );
}
