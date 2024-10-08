import { actionsT } from "./ActionTypes"

export const characters = [
    {
        id:1,
        lvl: 10,
        name:" Lythir Getzuga", 
        clas:" Druid", 
        race:" Human", 
        background:" Sage", 
        alignment:" Neutral", 
            str: 18, 
            dex: 18, 
            con: 18, 
            int: 12, 
            wis: 20, 
            cha: 14
    },
    {
        id: 2,
        lvl: 10,
        name:" Aluhen", 
        clas:" Sorcerer", 
        race:" Elf", 
        background:" Noble", 
        alignment:" Chaotic Neutral", 
            str: 10, 
            dex: 16, 
            con: 16, 
            int: 14, 
            wis: 14, 
            cha: 20
    },
    {
        id: 3,
        lvl: 10,
        name:" Norros Canji", 
        clas:" Wizard", 
        race:" Vampire", 
        background:" Doctor", 
        alignment:" Neutral Good", 
            str: 14, 
            dex: 16, 
            con: 16, 
            int: 20, 
            wis: 12, 
            cha: 14
    },
    {
        id: 4,
        lvl: 10,
        name:" Regan van", 
        clas:" Rogue", 
        race:" Half-elf", 
        background:" Guild Artisan", 
        alignment:" Chaotic Neutral", 
            str: 14, 
            dex: 20, 
            con: 16, 
            int: 14, 
            wis: 12, 
            cha: 12
    },
/*     {
        id: 5,
        lvl: 10,
        name:" Thuran", 
        clas:" Bard", 
        race:" Human", 
        background:" Musician", 
        alignment:" Chaotic Good", 
        stats: {
            str: 12, 
            dex: 18, 
            con: 16, 
            int: 12, 
            wis: 14, 
            cha: 20
        }
    }, */
]

export const quotes = [
    "I will rather die standing than live falling. None will fall on my watch",
    "She's not the adorable little princess she seems to be. Better not make that mistake",
    "Seeking out the way to beat the death, the doctor chose the curse as a cure",
    "Like a father to everyone, the good old one is ever watching over the party",
    "he was a bard... dont't ask me please",
]

export const imgs = [
    "/assets/imgs/Archdruid.png",
    "/assets/imgs/aluhen.jpg",
    "/assets/imgs/norros.jpg",
    "/assets/imgs/regan.jpg",
    "/assets/imgs/thuran.jpg",
]

export const monsters = [
    {
        id: 1,
        name: "Goblin",
        img: "/assets/imgs/goblin.jpg",
        type: "Humanoid",
        size: "Small",
        alignment: "Chaotic Evil",
        ac: 15,
        hp: 7,
        speed: 30,
        str: 8,
        dex: 14,
    }
]

export const Cydrat = {
    name: 'Cydrat, El Terror Rugiente', // name of the monster  
    ca: 22, // ca of the monster
    hp: 500, // current hp of the monster  
    turn: true, // is it the monster's turn
    actions: actionsT,
    multiattack: 4,
    attacks: [
        {
            name: 'Mordisco',
            description: '+17, alcance 15 pies, 2d10 +10 daño penetrante mas 2d10 daño de rayo',
            bonus: 17,
            damage: '2d10+10',
            type: 'Penetrante',
            range: '15 pies'
        },
        {
            name: 'Garra',
            damage: '2d6+10',
            description: '+17, alcance 10 pies, 2d6 +10 daño cortante',
            bonus: 17,
            type: 'Cortante',
            range: '10 pies'
        },
        {
            name: 'Coletazo',
            damage: '2d8+10',
            description: '+17, alcance 20 pies, 2d8 +10 daño contundente',
            bonus: 17,
            type: 'Contundente',
            range: '20 pies'
        },

    ],
    features: [
        {
            name: 'Coletazo',
            damage: '2d8+10',
            description: '+17, alcance 20 pies, 2d8 +10 daño contundente',
            type: 'Contundente',
            range: '20 pies'
        },
        {
            name: 'Coletazo',
            damage: '2d8+10',
            description: '+17, alcance 20 pies, 2d8 +10 daño contundente',
            type: 'Contundente',
            range: '20 pies'
        },
        {
            name: 'Coletazo',
            damage: '2d8+10',
            description: '+17, alcance 20 pies, 2d8 +10 daño contundente',
            type: 'Contundente',
            range: '20 pies'
        },
        {
            name: 'Coletazo',
            damage: '2d8+10',
            description: '+17, alcance 20 pies, 2d8 +10 daño contundente',
            type: 'Contundente',
            range: '20 pies'
        },
    ],
}