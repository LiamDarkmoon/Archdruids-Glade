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

export interface player {  
    name: string; // name of the player  
    ca: number; // current armor class of the player
    hp: number; // current hp of the player  
    turn: boolean; // is it the player's turn  
    attacks: attack[];
    spells?: spell[];
    potions?: potion[];
    features?: feature[]; // features of the player
    actions: actions; // actions of the player
    multiattack?: number | undefined;
}  
export interface monster {  
    name: string; // name of the monster  
    ca: number; // ca of the monster
    hp: number; // current hp of the monster  
    turn: boolean; // is it the monster's turn  
    attacks: attack[];
    spells?: spell[];
    features: feature[]; // features of the monster
    actions: actions; // actions of the monster
    multiattack?: number | undefined;
}  

export interface CombatContextProps { 
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
    const [initiative, setInitiative] = useState(players.map((_, index) => index));

    useEffect(() => {
        // retrieve players to local storage
        const getInitialState = () => {
            const Players = localStorage.getItem('players');
            return Players ? JSON.parse(Players) : []
        }
        setPlayers(getInitialState())
        setPlayers((prevPlayers) =>  
            prevPlayers.map((player, index) => ({  
                ...player,  
                turn: index === 0 // Ajusta el booleano según si el índice coincide  
            }))  
        ); 
    }, [])

    useEffect(() => {
        if(players !== initialState) {
            // save players to local storage
            localStorage.setItem('players', JSON.stringify(players));
        }
        setInitiative(players.map((_, index) => index))
    }, [players])


    return (
        <CombatContext.Provider value={{
            players,
            setPlayers,
            initiative,
            setInitiative,
            monster,
            setMonster
        }}
        >
            {children}
        </CombatContext.Provider>
    )
};