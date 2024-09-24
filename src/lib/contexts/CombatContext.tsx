'use client'
import { useState, useEffect, createContext, Dispatch, SetStateAction} from 'react';

export interface Player {  
    name: string; // name of the player  
    hp: string; // current hp of the player  
    turn: boolean; // is it the player's turn  
}  

export interface CombatContextProps { 
    initiative: number[]; // initiative order of the players
    setInitiative: Dispatch<SetStateAction<number[]>>; // function to set players 
    players: Player[]; // array of players  
    setPlayers: Dispatch<SetStateAction<Player[]>>; // function to set players 
}

const initialState: Player[] = []

export const CombatContext = createContext<CombatContextProps | undefined>(undefined);

export function CombatProvider({ children } : { children: React.ReactNode}) {
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
            setInitiative
        }}
        >
            {children}
        </CombatContext.Provider>
    )
};