export class Character {
    name = 'Liam Darkmoon';
    class = 'Druid';
    race = 'Changeling';
    backgroud = 'Hermit';
    alignment = 'Neutral Chaotic';
    stats = [10, 10, 10, 10, 10, 10];

    constructor(name, clas, race, backgroud, alignment, stats) {
        this.name = name;
        this.class = clas;
        this.race = race;
        this.backgroud = backgroud;
        this.alignment = alignment;
        this.stats = stats;
    }

}