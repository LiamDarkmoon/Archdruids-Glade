import PropTypes from 'prop-types';
import { d20, d12, d10, d8, d6, d4 } from '../../lib/Dice.enum';

export function D20( {
   className, 
   fillColor, 
   faces
  } : {
    className?: string,
    fillColor?: string,
    faces: number,
  } ) {

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 13.951 16"
        fill={ faces === 1 ? '#da2d28' : faces === 20 ? '#1E6B44' : faces > 20 ? '#1B979B' : fillColor }
        className={ className }
      >
         { d20.map((die, index) => faces === die.id ? <path key={index} d={ die.path } /> : null) }
      </svg>
    );
  }

export function D12( {
  className, 
  fillColor, 
  faces
  } : {
    className?: string,
    fillColor?: string,
    faces: number,
  } ) {

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.331 16"
        fill={ faces === 1 ? '#da2d28' : faces === 12 ? '#1E6B44' : fillColor }
        className={  className  }
      >
         { d12.map((die, index) => faces === die.id ? <path key={index} d={ die.path } /> :null ) }
      </svg>
    );
  }

  export function D10( {
    className, 
    fillColor, 
    faces
   } : {
     className?: string,
     fillColor?: string,
     faces: number,
   } ) {

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.138 16"
        fill={ faces === 1 ? '#da2d28' : faces === 10 ? '#1E6B44' : fillColor }
        className={ className }
      >
         { d10.map((die, index) => faces === die.id ? <path key={index} d={ die.path } /> :null ) }
      </svg>
    );
  }

  export function D8( {
    className, 
    fillColor, 
    faces
   } : {
     className?: string,
     fillColor?: string,
     faces: number,
   } ) {

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14.181 16"
        fill={ faces === 1 ? '#da2d28' : faces === 8 ? '#1E6B44' : fillColor }
        className={ className }
      >
         { d8.map((die, index) => faces === die.id ? <path key={index} d={ die.path } /> :null ) }
      </svg>
    );
  }

  export function D6( {
    className, 
    fillColor, 
    faces
   } : {
     className?: string,
     fillColor?: string,
     faces: number,
   } ) {
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 15.991"
      fill={ faces === 1 ? '#da2d28' : faces === 6 ? '#1E6B44' : fillColor }
      className={ className }
    >
       { d6.map((die, index) => faces === die.id ? <path key={index} d={ die.path } /> :null ) }
    </svg>
  );
}

export function D4( {
  className, 
  fillColor, 
  faces
 } : {
   className?: string,
   fillColor?: string,
   faces: number,
 } ) {
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 14.126"
      fill={ faces === 1 ? '#da2d28' : faces === 4 ? '#1E6B44' : fillColor }
      className={ className }
    >
       { d4.map((die, index) => faces === die.id ? <path key={index} d={ die.path } /> :null ) }
    </svg>
  );
}
 

