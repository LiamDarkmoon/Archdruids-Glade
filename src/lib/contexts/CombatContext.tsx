'use client'
import { useState, useEffect, createContext, Dispatch, SetStateAction} from 'react';
import { Cydrat } from '../placeholders';

export interface attack  {
        name: string; // name of the attack
        description: string; // description of the attack
        damage: string; // damage of the attack
        type: string; // type of the attack
        range: string; // range of the attack
}
export interface spell  {
        name: string; // name of the spell
        description: string; // description of the spell
        damage?: string; // damage of the spell
        effect?: string; // effect of the spell
        type: string; // type of the spell
        range: string; // range of the spell
}
export interface feature  {
        name: string; // name of the feature
        description: string; // description of the feature
        damage?: string; // damage of the feature
        effect?: string; // effect of the feature
        range?: string; // range of the feature
}

export interface Player {  
    name: string; // name of the player  
    hp: string; // current hp of the player  
    turn: boolean; // is it the player's turn  
    attacks?: attack[];
    spells?: spell[];
    features?: feature[]; // features of the player
}  
export interface monster {  
    name: string; // name of the monster  
    ca: string; // ca of the monster
    hp: number; // current hp of the monster  
    turn: boolean; // is it the monster's turn  
    attacks: attack[];
    spells?: spell[];
    features: feature[]; // features of the player
}  

export interface CombatContextProps { 
    initiative: number[]; // initiative order of the players
    setInitiative: Dispatch<SetStateAction<number[]>>; // function to set players 
    players: Player[]; // array of players  
    setPlayers: Dispatch<SetStateAction<Player[]>>; // function to set players
    monster: monster; // monster object
    setMonster: Dispatch<SetStateAction<monster>>; // function to set monster
}

const initialState: Player[] = []

export const CombatContext = createContext<CombatContextProps | undefined>(undefined);

export function CombatProvider({ children } : { children: React.ReactNode}) {
    const [monster, setMonster] = useState<monster>(Cydrat);
    const [players, setPlayers] = useState<Player[]>(initialState);
    const [initiative, setInitiative] = useState(players.map((_, index) => index));

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
        setInitiative(players.map((_, index) => index))
    }, [players])

    useEffect(() => {
        players.forEach((player, index) => {
            if(index === initiative[0]) {
                setPlayers((players) => {
                    player.turn = true
                    return players
                })
            } else {
                setPlayers((players) => {
                    player.turn = false
                    return players
                })
            }
        })
    }, [initiative])


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