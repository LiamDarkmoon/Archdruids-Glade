import PropTypes from 'prop-types';
import { D20, D12, D10, D8, D6, D4 } from './Dice';



const Die = ({ className, fillcolor, faces, rolling, die }) => {

    const d = [
        {
            id: 20, 
            die:<D20 className={ className } fillcolor={ fillcolor } faces={ faces } rolling={ rolling } key={20}/>
        },
        {
            id: 12, 
            die:<D12 className={ className } fillcolor={ fillcolor } faces={ faces } rolling={ rolling } key={12}/>
        },
        {
            id: 10, 
            die:<D10 className={ className } fillcolor={ fillcolor } faces={ faces } rolling={ rolling } key={10}/>
        },
        {
            id: 8, 
            die:<D8 className={ className } fillcolor={ fillcolor } faces={ faces } rolling={ rolling } key={8}/>
        },
        {
            id: 6, 
            die:<D6 className={ className } fillcolor={ fillcolor } faces={ faces } rolling={ rolling } key={6}/>
        },
        {
            id: 4, 
            die:<D4 className={ className } fillcolor={ fillcolor } faces={ faces } rolling={ rolling } key={4}/>
        },
        ];

    return (
         d.map((d, ) => die === d.id ? d.die : null)
    );
}


Die.propTypes = {
    die: PropTypes.number.isRequired,
    faces: PropTypes.number.isRequired,
    rolling: PropTypes.bool.isRequired,
    className: PropTypes.string,
    fillcolor: PropTypes.string,
}


export default Die;
