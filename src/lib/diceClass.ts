export class Dice {
    faces: number = 20;
    mod: number = 0; // modifier
    dieResult: number = 1;
    finalResult: number = this.dieResult + this.mod;
    rolling: boolean = false;
        
    constructor(faces: number, mod: number) {
        this.faces = faces;
        this.mod = mod;
    }

    roll() {
        const rollResult = Math.floor(Math.random() * this.faces) + 1 ;
        this.rolling = !this.rolling;
        this.dieResult = rollResult;
        this.finalResult = this.dieResult + this.mod;
        return rollResult;
    }
}