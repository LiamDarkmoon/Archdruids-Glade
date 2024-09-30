'use client'
import { useState, useEffect, createContext, Dispatch, SetStateAction} from 'react';
import { Cydrat } from '../placeholders';

export interface attack  {
        name: string; // name of the attack
        description: string; // description of the attack
        bonus: number; // bonus of the attack
        dc?: number; // dc of the attack
        damage: string; // damage of the attack
        type: string; // type of the attack
        range: string; // range of the attack
}
export interface spell  {
        name: string; // name of the spell
        description: string; // description of the spell
        castingTime: string; //casting time of the spell
        duration: string; // duration of the spell
        bonus?: number; // bonus of the spell
        dc?: number; // dc of the spell
        damage?: string; // damage of the spell
        effect?: string; // effect of the spell
        type: string; // type of the spell
        range: string; // range of the spell
}

export interface potion {
        name: string; // name of the potion
        description: string; // description of the potion
        effect: string; // effect of the potion
}
export interface feature  {
        name: string; // name of the feature
        description: string; // description of the feature
        damage?: string; // damage of the feature
        effect?: string; // effect of the feature
        range?: string; // range of the feature
}
export interface actions {
    action: {
        name: string; // name of the action
        taken: boolean; // has the action been taken
    }
    bonusAction: {
        name: string; // name of the bonus action
        taken: boolean; // has the bonus action been taken
    }
    movement: {
        name: string; // name of the movement
        taken: boolean; // has the movement been taken
    }
}

export interface buff {
    name: string; // name of the buff
    duration: number; // duration of the buff
}

export interface player {  
    name: string; // name of the player  
    ca: number; // current armor class of the player
    hp: number; // current hp of the player  
    initiative?: number; // initiative count of the player
    turn: boolean; // is it the player's turn  
    attacks: attack[];
    spells?: spell[];
    potions?: potion[];
    features?: feature[]; // features of the player
    actions: actions; // actions of the player
    reaction?: boolean ;
    multiattack?: number | undefined;
    buffs: buff[];
    debuffs: buff[];
}  
export interface monster {  
    name: string; // name of the monster  
    ca: number; // ca of the monster
    hp: number; // current hp of the monster  
    initiative?: number; // initiative count of the monster
    turn: boolean; // is it the monster's turn  
    attacks: attack[];
    spells?: spell[];
    features: feature[]; // features of the monster
    actions: actions; // actions of the monster
    reaction?: boolean ;
    multiattack?: number | undefined;
}  

export interface CombatContextProps { 
    round: number; // current round of the combat
    setRound: Dispatch<SetStateAction<number>>; // function to set the round
    initiative: number[]; // initiative order of the players
    setInitiative: Dispatch<SetStateAction<number[]>>; // function to set players 
    players: player[]; // array of players  
    setPlayers: Dispatch<SetStateAction<player[]>>; // function to set players
    monster: monster; // monster object
    setMonster: Dispatch<SetStateAction<monster>>; // function to set monster
}

const initialState: player[] = []

export const CombatContext = createContext<CombatContextProps | undefined>(undefined);

export function CombatProvider({ children } : { children: React.ReactNode}) {
    const [monster, setMonster] = useState<monster>(Cydrat);
    const [players, setPlayers] = useState<player[]>(initialState);
    const [initiative, setInitiative] = useState<number[]>([]);
    const [round, setRound] = useState(0);

    useEffect(() => {
        // retrieve players to local storage
        const getInitialState = () => {
            const Players = localStorage.getItem('players');
            return Players ? JSON.parse(Players) : []
        }
        setPlayers(getInitialState())
    }, [])
    
    useEffect(() => {
        if(players !== initialState) {
            // save players to local storage
            localStorage.setItem('players', JSON.stringify(players));
        }
        if(players.length !== initiative.length){
            setInitiative([...players.map((player) => player.initiative ? player.initiative : 0)])
        }
       
        
    }, [players])

    useEffect(() => {
        if(players && initiative.length > 0) {
            const initiativeMap: { [key: number]: number } = {};  
            initiative.forEach((value, index) => {  
                initiativeMap[value] = index;  
            });  
    
            // Filtrar y ordenar el array de jugadores  
            const sortedPlayers = players  
                .filter(player => player.initiative !== undefined && player.initiative in initiativeMap) // Filtra jugadores válidos  
                .sort((a, b) => {  
                    const aIndex = initiativeMap[a.initiative!];  // Usamos el operador de aserción no nula  
                    const bIndex = initiativeMap[b.initiative!];  // Si estamos aquí, sabemos que no es undefined  

                    return (aIndex ?? Infinity) - (bIndex ?? Infinity); // Ordenar según el índice en initiativeOrder  
                });    
            if(sortedPlayers.length === players.length) {
                setPlayers(sortedPlayers); // Establece el nuevo array ordenado
            }
        }
    }, [initiative])


    return (
        <CombatContext.Provider value={{
            players,
            setPlayers,
            initiative,
            setInitiative,
            monster,
            setMonster,
            round,
            setRound,
        }}
        >
            {children}
        </CombatContext.Provider>
    )
};