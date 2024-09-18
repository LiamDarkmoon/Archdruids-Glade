'use client'
import { DiceProvider } from '@/lib/contexts/DiceContext';
import { CharactersProvider } from "@/lib/contexts/chractersContext";

export default function ContextProvider({ children } : { children: React.ReactNode }) {
  return (
    <DiceProvider>
        <CharactersProvider> { children } </CharactersProvider>
    </DiceProvider>
  )
}
