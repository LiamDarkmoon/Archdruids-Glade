import { character } from "@/lib/Types";
export class Character {
    name = 'Liam Darkmoon';
    class = 'Druid';
    race = 'Werewolf';
    background = 'Hermit';
    alignment = 'Neutral Chaotic';
    stats = {
        str: 18,
        dex: 18,
        con: 18,
        int: 12,
        wis: 20,
        cha: 14
    };

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
        stats: {
            str: number,
            dex: number,
            con: number,
            int: number,
            wis: number,
            cha: number,
        }// {str, dex, con, int, wis, cha}
    }) {
        this.name = name;
        this.class = clas;
        this.race = race;
        this.background = background;
        this.alignment = alignment;
        this.stats = stats
    }

}