import React from 'react'

export default function ActionList() {
    const actionTypes = ['Accion', 'Accion Rapida', 'Movimiento', 'Reaccion']

  return (
    <ul className='grid grid-cols-2 grid-rows-2 gap-2'>
        {actionTypes.map((action, index) => (
            <li key={index} className='font-semibold'>
                <input type='checkbox'className='me-1 rounded-xs'/>
                {action}
            </li>
        ))}
    </ul>
  )
}
