import usePlayer from '@/lib/hooks/usePlayer'
import { ChainIcon, ShieldIcon, SwordIcon, TrashIcon } from '../common/Icons';
import Button from './Btn';

export default function PlayerStatus({ turn, i }:{ turn: boolean, i: number }) {
    const { handleDissmisPlayer } = usePlayer()

    return(
        <div className="flex items-center gap-2">
            <span className='bg-none rounded-md'>
                <SwordIcon show={ turn} />
            </span>
            <button 
            className='bg-none rounded-md'
            onClick={() => console.log('buffitos')}
            >
                <ShieldIcon/>
            </button>
            <button 
            className='bg-none rounded-md'
            onClick={() => console.log('debuffitos')}
            >
                <ChainIcon/>
            </button>
            <Button click={()=> handleDissmisPlayer(i)} className='w-auto ms-auto'>
                <TrashIcon/>
            </Button>
        </div>
    )
}