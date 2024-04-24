'use client'
import { useState, useEffect, createContext } from 'react';
import { characters, quotes, imgs } from "@/lib/placeholders";
import { character } from '../Types';

export interface characterContextProps {
    chars: character[];
    setChars: (newChars: character[]) => void;
    quotes: string[];
    imgs: string[];
}

export const charactersContext = createContext<characterContextProps | undefined>(undefined);

export function CharactersProvider({ children } : { children: React.ReactNode}) {
    const [chars, setChars] = useState(characters); 

    useEffect(() => {
        setChars(characters);
    }, [])

    return (
        <charactersContext.Provider value={{
            chars,
            setChars,
            quotes,
            imgs
        }}
        >
            {children}
        </charactersContext.Provider>
    )
};