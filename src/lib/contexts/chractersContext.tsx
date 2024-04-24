'use client'
import { useState, useEffect, createContext, Dispatch, SetStateAction} from 'react';
import { characters, quotes, imgs } from "@/lib/placeholders";
import { character } from '../Types';

export interface characterContextProps {
    char: character;
    show: boolean; // TODO: add show modal
    setShow: Dispatch<SetStateAction<boolean>>;
    setChar:Dispatch<SetStateAction<{ id: number; lvl: number; name: string; clas: string; race: string; background: string; alignment: string; str: number; dex: number; con: number; int: number; wis: number; cha: number; }>>;
    quotes: string[];
    imgs: string[];
}

export const charactersContext = createContext<characterContextProps | undefined>(undefined);

export function CharactersProvider({ children } : { children: React.ReactNode}) {
    const [char, setChar] = useState(characters[0]); 
    const [show, setShow] = useState(false); 
    return (
        <charactersContext.Provider value={{
            char,
            show,
            setChar,
            setShow,
            quotes,
            imgs
        }}
        >
            {children}
        </charactersContext.Provider>
    )
};