import useTurn from '@/lib/hooks/useTurn';

export default function ActionList() {
    const { actions, taken } = useTurn()

  return (
    <ul className='flex gap-2 justify-center'>
        {actions.map((action, i) => (
            <li key={i} className='font-semibold truncate'>
                <input 
                type='checkbox'
                checked={actions ? taken[i] : false}
                readOnly
                className='me-1 rounded-xs'
                />
                {action}
            </li>
        ))}
    </ul>
  )
}
