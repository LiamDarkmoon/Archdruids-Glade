'use client'
import { useState, useEffect, createContext, Dispatch, SetStateAction} from 'react';

export interface Player {  
    name: string; // name of the player  
    hp: string; // current hp of the player  
    turn: boolean; // is it the player's turn  
}  

export interface CombatContextProps {  
    players: Player[]; // array of players or undefined  
    setPlayers: Dispatch<SetStateAction<Player[]>>; // function to set players  
}

const initialState: Player[] = []

export const CombatContext = createContext<CombatContextProps | undefined>(undefined);

export function CombatProvider({ children } : { children: React.ReactNode}) {
    const [players, setPlayers] = useState<Player[]>(initialState);

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
    }, [players])


    return (
        <CombatContext.Provider value={{
            players,
            setPlayers
        }}
        >
            {children}
        </CombatContext.Provider>
    )
};