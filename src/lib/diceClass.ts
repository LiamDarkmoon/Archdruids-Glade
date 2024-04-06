export class Dice {
    faces: number = 20;
    dieResult: number = 1;
    finalResult: number = 1;
    rolling: boolean = false;
    
    constructor(faces: number) {
        this.faces = faces;
    }

    roll(mod: number) {
        const rollResult = Math.floor(Math.random() * this.faces) + 1 ;
        this.rolling = !this.rolling;
        this.dieResult = rollResult;
        this.finalResult = this.dieResult + mod;
        return rollResult;
    }
}