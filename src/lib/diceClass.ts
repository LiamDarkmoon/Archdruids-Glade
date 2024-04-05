export class Dice {
    faces: number = 20;
    result: number = 1;
    rolling: boolean = false;
    
    constructor(faces: number) {
        this.faces = faces;
    }

    roll() {
        const rollResult = Math.floor(Math.random() * this.faces) + 1 ;
        this.rolling = !this.rolling;
        this.result = rollResult;
        return rollResult;
    }
}