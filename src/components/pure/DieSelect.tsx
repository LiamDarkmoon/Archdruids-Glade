import { useId } from 'react';
import Select from 'react-select';

const diceOptions = [
    { value: '20', label: 'D20' },
    { value: '12', label: 'D12' },
    { value: '10', label: 'D10' },
    { value: '8', label: 'D8' },
    { value: '6', label: 'D6' },
    { value: '4', label: 'D4' },
  ]

const DieSelect = ({
     value,
     change, 
     className, 
    } : {
        value: number
        change: (e: any) => void,
        className?: string,
    }) => {

    return (
        <Select
            name="dice"
            instanceId={useId()}
            options={ diceOptions } 
            onChange={ change } 
            className={ className +' dice-select' }
            value={diceOptions.find(o => o.value === value.toString())} // TODO: fix this
            isSearchable={ false }
            unstyled
            classNames={{ 
                option: ()=> 'dice-option',
                dropdownIndicator: ()=> 'nn',
                menu: ()=> 'dice-menu'
            }}
        />
    );
}

export default DieSelect;
