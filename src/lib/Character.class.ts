export class Character {
    name = 'Liam Darkmoon';
    class = 'Druid';
    race = 'Werewolf';
    background = 'Hermit';
    alignment = 'Neutral Chaotic';
    stats = [18, 16, 16, 12, 20, 14];

    constructor(
        {name, 
        clas, 
        race, 
        background, 
        alignment, 
        stats
    } : {
        name: string,
        clas: string,
        race: string,
        background: string,
        alignment: string,
        stats: number[] // [str, dex, con, int, wis, cha]
    }) {
        this.name = name;
        this.class = clas;
        this.race = race;
        this.background = background;
        this.alignment = alignment;
        this.stats = stats;
    }

}