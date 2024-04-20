import { useId } from 'react'
import Select from 'react-select';

const raceOptions = [
    { value: 'Dragonborn', label: 'Dragonborn' },
    { value: 'Dwarf', label: 'Dwarf' },
    { value: 'Elf', label: 'Elf' },
    { value: 'Gnome', label: 'Gnome' },
    { value: 'Half-Elf', label: 'Half-Elf' },
    { value: 'Half-Orc', label: 'Half-Orc' },
    { value: 'Halfling', label: 'Halfling' },
    { value: 'Human', label: 'Human' },
    { value: 'Tiefling', label: 'Tiefling' },
]

export default function RaceSelect({
    className,
} : {
    className: string
}) {
  return (
    <Select
            name="race"
            instanceId={useId()}
            options={ raceOptions } 
            className={ className }
            defaultValue={ raceOptions[0] }
            isSearchable={ false }
            classNames={{ 
                option: ()=> 'hover:bg-red-700 hover:text-white hover:bg-opacity-30 aria-selected:bg-red-700 aria-selected:text-white active:bg-red-700 active:text-white',
                control: () => 'border border-red-700 shadow-none  hover:border-red-700 hover:shadow-none focused:border-red-700 focused:shadow-none',
            }}
        />
  )
}
