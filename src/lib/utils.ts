
 // random generated throw distance // 
 export const randomThrow = ( container: number, object: number ) => {
    const n = (Math.random() - 0.5) * container - (object / 2) 
    return n 
 };
// bounce if reach the "wall"
 export const bounce = (container: number, object: number) => {
    const n  = randomThrow(container, object)
    if(n <= 0 || n >= container){
        return -n - object
    } else {
        return n 
    }
 };
 