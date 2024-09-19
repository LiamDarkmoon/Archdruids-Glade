'use client'
import { DiceProvider } from '@/lib/contexts/DiceContext';
import { CharactersProvider } from "@/lib/contexts/chractersContext";
import { CombatProvider } from './CombatContext';

export default function ContextProvider({ children } : { children: React.ReactNode }) {
  return (
    <DiceProvider>
      <CombatProvider>
        <CharactersProvider> { children } </CharactersProvider>
      </CombatProvider>
    </DiceProvider>
  )
}
