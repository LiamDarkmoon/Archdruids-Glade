import usePlayer from '@/lib/hooks/usePlayer'
import { SwordIcon, TrashIcon } from '../common/Icons';
import Button from './Btn';
import { Reaction } from '../common/Buttons';
import Status from './Status';

export default function PlayerStatus({ turn, i }:{ turn: boolean, i: number }) {
    const { players, handleReaction, handleDissmisPlayer } = usePlayer()

    return(
        <div className="flex items-center gap-2">
            {
                players[i].turn ?
                <span className='bg-none rounded-md'>
                    <SwordIcon show={ turn } />
                </span>
                :
                <Reaction show={players[i].reaction!} click={()=> handleReaction(i)}/>
            }
            <Status i={i}/>
            <Button click={()=> handleDissmisPlayer(i)} className='w-auto ms-auto'>
                <TrashIcon/>
            </Button>
        </div>
    )
}