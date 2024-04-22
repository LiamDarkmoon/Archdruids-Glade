'use client'
import { useFormState, useFormStatus } from 'react-dom';
import Button from '../Btn';
import ClasSelect from '../ClasSelect';
import { createCharacter } from '@/lib/actions';
import RaceSelect from '../RaceSelect';
import BackgroundSelect from '@/components/BackgroundSelect';
import AlignmentSelect from '../AlignmentSelect';
import { State } from '@/lib/Types';

const CharacterForm = () => {
    const initialState: State = { message:  null, errors: {} };
    const [state, dispatch] = useFormState(createCharacter, initialState);

    const stats = [
        'str',
        'dex',
        'con',
        'int',
        'wis',
        'cha'
    ]


    return (
        <form
            action={ dispatch } 
            className='flex flex-col gap-2 max-w-full sm:w-1/2 border rounded-lg mx-auot p-8 bg-amber-100 text-red-800'
        >
            <h1 className='text-3xl font-bold text-center mb-4'>Create your character</h1>

            <div className='w-full flex flex-col gap-1 px-2'>
                <label htmlFor='name'>Name</label>
                <input className='py-1 px-2 rounded aria-selected:shadow-red-800 focus-visible:outline-none focus-visible:border border-red-800' id='name' type='text' name='name' placeholder='Liam Darkmoon' />
                {state?.errors?.name &&
                        state.errors.name.map((error: string) => (
                            <p className="mt-2 mx-auto text-sm text-warning" key={error}>
                            {error}
                            </p>
                ))}
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
                <label className='text-xl font-bold self-center' htmlFor='stats'>Stats</label>
                <div className='w-full flex gap-1 items-center'>
                    {stats.map((stat, index) =>
                    <div key={index}>
                        <label htmlFor={stat}>{stat}</label>
                        <input className='py-1 px-2 rounded aria-selected:shadow-red-800 focus-visible:outline-none focus-visible:border border-red-800' id={stat} name={stat} type='number' defaultValue={10} min='8' max='20' pattern='[0-9]*' step='1' placeholder='10' />
                    </div>
                    )}
                </div>
                {state?.errors?.str &&
                        state.errors.str.map((error: string) => (
                            <p className="mt-2 mx-auto text-sm text-warning" key={error}>
                            {error}
                            </p>
                ))}
            </div>

            <Button 
                className='my-3'
                click={() => console.log(state)}
            >
                Create Character
            </Button>
            <p className="mt-2 mx-auto text-sm text-warning">
                { state?.message && state.message }
            </p>
        </form>
    );
}

export default CharacterForm;
