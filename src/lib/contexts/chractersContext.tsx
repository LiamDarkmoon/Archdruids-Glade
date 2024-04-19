'use client'
import { useReducer, createContext } from 'react';
import { characters, quotes, imgs } from "@/lib/placeholders";
import { character } from '../Types';

interface characterContextProps {
    characters: character[];
    quotes: string[];
    imgs: string[];
}

export const charactersContext = createContext<characterContextProps | undefined>(undefined);

export function CharactersProvider({ children } : { children: React.ReactNode}) {
    /* const [chars, setChars] = useState(characters); */

    return (
        <charactersContext.Provider value={{
            characters,
            quotes,
            imgs
        }}
        >
            {children}
        </charactersContext.Provider>
    )
};