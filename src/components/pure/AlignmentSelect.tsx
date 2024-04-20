import { useId } from 'react'
import Select from 'react-select';

const alignmentOptions = [
    { value: 'Lawful Good', label: 'Lawful Good' },
    { value: 'Lawful Neutral', label: 'Lawful Neutral' },
    { value: 'Lawful Evil', label: 'Lawful Evil' },
    { value: 'Neutral good', label: 'Neutral good' },
    { value: 'Neutral', label: 'Neutral' },
    { value: 'Neutral Evil', label: 'Neutral Evil' },
    { value: 'Chaotic Good', label: 'Chaotic Good' },
    { value: 'Chaotic Neutral', label: 'Chaotic Neutral' },
    { value: 'Chaotic Evil', label: 'Chaotic Evil' },
]

export default function AlignmentSelect({
    className,
} : {
    className: string
}) {
  return (
    <Select
            name="alignment"
            instanceId={useId()}
            options={ alignmentOptions } 
            className={ className }
            defaultValue={ alignmentOptions[0] }
            isSearchable={ false }
            classNames={{ 
                option: ()=> 'hover:bg-red-700 hover:text-white hover:bg-opacity-30 aria-selected:bg-red-700 aria-selected:text-white active:bg-red-700 active:text-white',
                control: () => 'border border-red-700 shadow-none  hover:border-red-700 hover:shadow-none focused:border-red-700 focused:shadow-none',
            }}
        />
  )
}
