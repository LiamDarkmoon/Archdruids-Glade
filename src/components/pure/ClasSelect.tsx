import { useId } from 'react'
import Select from 'react-select';

const classOptions = [
    { value: 'Artificer', label: 'Artificer' },
    { value: 'Barbarian', label: 'Barbarian' },
    { value: 'Bard', label: 'Bard' },
    { value: 'Blood Huner', label: 'Blood Huner' },
    { value: 'Cleric', label: 'Cleric' },
    { value: 'Druid', label: 'Druid' },
    { value: 'Fighter', label: 'Fighter' },
    { value: 'Monk', label: 'Monk' },
    { value: 'Paladin', label: 'Paladin' },
    { value: 'Ranger', label: 'Ranger' },
    { value: 'Rogue', label: 'Rogue' },
    { value: 'Sorcerer', label: 'Sorcerer' },
    { value: 'Warlock', label: 'Warlock' },
    { value: 'Wizard', label: 'Wizard' },
]

export default function ClasSelect({
    className,
} : {
    className: string
}) {
  return (
    <Select
            name="clas"
            instanceId={useId()}
            options={ classOptions } 
            className={ className }
            defaultValue={ classOptions[Math.floor(Math.random() * classOptions.length)] }
            isSearchable={ false }
            classNames={{ 
                option: ()=> 'hover:bg-red-700 hover:text-white hover:bg-opacity-30 aria-selected:bg-red-700 aria-selected:text-white active:bg-red-700 active:text-white',
                control: () => 'border border-red-700 shadow-none  hover:border-red-700 hover:shadow-none focused:border-red-700 focused:shadow-none',
            }}
        />
  )
}
