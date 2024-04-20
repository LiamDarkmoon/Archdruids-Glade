import { useId } from 'react'
import Select from 'react-select';

const bgOptions = [
    { value: 'Acolyte', label: 'Acolyte' },
    { value: 'Anthropologist', label: 'Anthropologist' },
    { value: ' Archaeologist', label: ' Archaeologist' },
    { value: 'Athlete', label: 'Athlete' },
    { value: 'Charlatan', label: 'Charlatan' },
    { value: 'City Watch', label: 'City Watch' },
    { value: 'Clan Crafter', label: 'Clan Crafter' },
    { value: 'Cloistered Scholar', label: 'Cloistered Scholar' },
    { value: 'Courtier', label: 'Courtier' },
    { value: 'Criminal', label: 'Criminal' },
    { value: 'Entertainer', label: 'Entertainer' },
    { value: 'Faceless', label: 'Faceless' },
    { value: 'Faction Agent', label: 'Faction Agent' },
    { value: 'Far Traveler', label: 'Far Traveler' },
]

export default function BackgroundSelect({
    className,
} : {
    className: string
}) {
  return (
    <Select
            name="background"
            instanceId={useId()}
            options={ bgOptions } 
            className={ className }
            defaultValue={ bgOptions[0] }
            isSearchable={ false }
            classNames={{ 
                option: ()=> 'hover:bg-red-700 hover:text-white hover:bg-opacity-30 aria-selected:bg-red-700 aria-selected:text-white active:bg-red-700 active:text-white',
                control: () => 'border border-red-700 shadow-none  hover:border-red-700 hover:shadow-none focused:border-red-700 focused:shadow-none',
            }}
        />
  )
}