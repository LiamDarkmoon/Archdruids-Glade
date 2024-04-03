 // random generated number // 
 export const randomDieFace = ( max ) => {

    const min = 1;

    return Math.floor(Math.random()
        * (max - min + 1)) + min;
 };