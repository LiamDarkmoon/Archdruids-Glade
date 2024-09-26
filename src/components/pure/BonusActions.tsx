import { useState, useReducer } from 'react'
import { bonusActions } from '@/lib/ActionTypes.js'
import Potions from './Potions';

function actionReducer(state: {action:string}, action: string) {
    switch (action) {
        case 'Posion':
            // show actions
            return { action: 'potion' };
        case 'Conjuro Rapido':
            // show bonus actions
            return { action: 'Quicken Spell' };
        case '':
            // move
            return { action: '' };
        }
    throw Error('Unknown action: ' + action);
}

export default function BonusActions() {
    const [state, dispatch] = useReducer(actionReducer, { action: '' });
    const [order, setOrder] = useState([0, 1, 2, 3, 4]);

  return (
    <>
    {
        state.action === 'potion' ? <Potions/> : 
        <ul
        className="flex flex-col gap-2"
        >
            {
            bonusActions.map((action, i) => 
                <li
                key={i}
                >
                    <div 
                    className="flex flex-col items-center justify-center bg-amber-200/50 rounded-md p-2 hover:bg-amber-200/80 hover:scale-1.2 hover:cursor-pointer transition-all duration-200"
                    onClick={() => dispatch(action)}
                    >
                        <h2 className="w-full text-center font-semibold pb-2 border-b border-amber-950">
                            { action}
                        </h2>
                    </div>
                </li>
            )}
        </ul>
    }
    </>
  )
}
