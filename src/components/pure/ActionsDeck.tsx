import { useReducer } from "react";
import {  actionTypes } from "@/lib/Actions.enum";
import Actions from "./Actions";

function actionReducer(state: {action:string}, action: string) {
    switch (action) {
        case 'Accion':
            // show actions
            return { action: 'action' };
        case 'Accion Rapida':
            // show bonus actions
            return { action: 'bonus action' };
        case 'Movimiento':
            // move
            return { action: 'move' };
        case 'Reaccion':
            // show reactions
            return { action: 'reaction' };
        }
    throw Error('Unknown action: ' + action);
}

export default function ActionsDeck() {
    const [state, dispatch] = useReducer(actionReducer, { action: '' });

  return (
    <>
    {
        state.action === 'action' ? <Actions/> :
        <ul
        className="flex flex-col gap-2"
        > 
            {
            actionTypes.map((action, i)=> 
                <li
                key={i}
                className="flex flex-col items-center justify-center bg-amber-200/50 rounded-md p-2 hover:bg-amber-200/80 hover:scale-1.2 hover:cursor-pointer transition-all duration-200"
                onClick={() => dispatch(action)}
                >
                    { action }
                </li>
            )}
        </ul>
    }
    </>
  )
}
