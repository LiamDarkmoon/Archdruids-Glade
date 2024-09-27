import { useReducer } from 'react'
import { actions } from '@/lib/ActionTypes.js'
import Attacks from './Attacks';

function actionReducer(state: {action:string}, action: string) {
    switch (action) {
        case 'Atacar':
            // show actions
            return { action: 'attack' };
        case 'Conjurar':
            // show bonus actions
            return { action: 'cast' };
        case 'Defender':
            // move
            return { action: 'dodge' };
        case 'Retirarse':
            // show reactions
            return { action: 'disengage' };
        case 'Correrr':
            // show reactions
            return { action: 'dash' };
        }
    throw Error('Unknown action: ' + action);
}

export default function Actions() {
    const [state, dispatch] = useReducer(actionReducer, { action: '' });

  return (
    <>
    {
        state.action === 'attack' ? <Attacks/> : 
        <ul
        className="flex flex-col gap-2"
        >
            {
            actions.map((action, i) => 
                <li
                key={i}
                >
                    <div 
                    className="flex flex-col items-center justify-center bg-amber-200/50 rounded-md p-2 hover:bg-amber-200/80 hover:scale-1.2 hover:cursor-pointer transition-all duration-200"
                    onClick={() => {dispatch(action.name), console.log(action.name)}}
                    >
                        <h2 className="w-full text-center font-semibold pb-2 border-b border-amber-950">
                            { action.name }
                        </h2>
                        <p className=" p-3 text-sm">
                            { action.description }
                        </p>
                    </div>
                </li>
            )}
        </ul>
    }
    </>
  )
}
