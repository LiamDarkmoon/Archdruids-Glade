import PropTypes from 'prop-types';
import { D20, D12, D10, D8, D6, D4 } from './Dice';
import { useState } from 'react';

const Die = ({
     className, 
     fillColor, 
     faces, 
     die, 
    } : {
        className?: string,
        fillColor?: string,
        faces: number,
        die: number,
    }) => {

    const d = [
        {
            id: 20, 
            die:<D20 className={ className } fillColor={ fillColor } faces={ faces } key={20}/>
        },
        {
            id: 12, 
            die:<D12 className={ className } fillColor={ fillColor } faces={ faces } key={12}/>
        },
        {
            id: 10, 
            die:<D10 className={ className } fillColor={ fillColor } faces={ faces } key={10}/>
        },
        {
            id: 8, 
            die:<D8 className={ className } fillColor={ fillColor } faces={ faces } key={8}/>
        },
        {
            id: 6, 
            die:<D6 className={ className } fillColor={ fillColor } faces={ faces } key={6}/>
        },
        {
            id: 4, 
            die:<D4 className={ className } fillColor={ fillColor } faces={ faces } key={4}/>
        },
        ];

    return (
            d.map((d, ) => die === d.id ? d.die : null) 
    );
}

export default Die;
