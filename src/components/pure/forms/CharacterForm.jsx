'use client'
import { useFormState, useFormStatus } from 'react-dom';
import Button from './../Btn';
import ClasSelect from '../ClasSelect';
import { createCharacter } from '@/lib/actions';
import RaceSelect from '../RaceSelect';
import BackgroundSelect from '@/components/BackgroundSelect';
import AlignmentSelect from '../AlignmentSelect';

const CharacterForm = () => {
    const { state, dispatch } = useFormState(createCharacter);
    const { status } = useFormStatus();


    return (
        <form
            action={ dispatch } 
            className='flex flex-col gap-2 w-full sm:w-1/2 border rounded-lg mx-auot p-8 bg-amber-100 text-red-800'
        >
            <h1 className='text-3xl font-bold text-center mb-4'>Creat your character</h1>

            <div className='w-full flex flex-col gap-1 px-2'>
                <label htmlFor='name'>Name</label>
                <input className='py-1 px-2 rounded aria-selected:shadow-red-800 focus-visible:outline-none focus-visible:border border-red-800' id='name' type='text' name='name' placeholder='Liam Darkmoon' />
            </div>
                        
            <div className='w-full flex flex-col gap-1 px-2'>
                <label htmlFor='clas'>Class</label>
                <ClasSelect  className='py-1 rounded-md'/>
            </div>

            <div className='w-full flex flex-col gap-1 px-2'>
                <label htmlFor='race'>Race</label>
                <RaceSelect className='py-1 rounded-md'/>
            </div>

            <div className='w-full flex flex-col gap-1 px-2'>
                <label htmlFor='background'>Background</label>
                <BackgroundSelect className='py-1 rounded-md'/>
            </div>

            <div className='w-full flex flex-col gap-1 px-2'>
                <label htmlFor='alignment'>Alignment</label>
                <AlignmentSelect className='py-1 rounded-md'/>
            </div>

            <div className='w-full flex flex-col gap-1 px-2'>
                <label htmlFor='stats'>Stats</label>
                <input className='py-1 px-2 rounded aria-selected:shadow-red-800 focus-visible:outline-none focus-visible:border border-red-800' id='stats' type='text' name='stats' placeholder='10, 10, 10, 10, 10, 10' />
            </div>

            <Button 
                className='my-3' 
                click={() => alert('character created', status)}
            >
                Create Character
            </Button>
        </form>
    );
}

export default CharacterForm;
