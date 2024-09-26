import { useEffect } from 'react'
import { actions } from '../../lib/contexts/CombatContext';

interface action {
    name: string,
    taken: boolean
}

export default function ActionList({ actions }: { actions: actions }) {
    const actionList = Object.values(actions).map(action => (action as action).name)
    const actionsTaken = Object.values(actions).map(action => (action as action).taken)

  return (
    <ul className='grid grid-cols-2 grid-rows-2 gap-2'>
        {actionList.map((action, i) => (
            <li key={i} className='font-semibold'>
                <input 
                type='checkbox'
                checked={actions ? actionsTaken[i] : false}
                readOnly
                className='me-1 rounded-xs'
                />
                {action}
            </li>
        ))}
    </ul>
  )
}
