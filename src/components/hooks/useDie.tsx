'use client'
import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { randomDieFace } from '../../lib/utils';

export default function useDie(modifier: number, dice: number) {
     // State //
     const [die, setDie] = useState(20);
     const [roll, setRoll] = useState(1);
     const [mod, setMod] = useState(0);

     // Clear Button //
    const clearTray = () => {
        setRoll(1);
        setMod(0);
        setDie(20);
        
    };
    // inputHandler functions //
    const chooseDie = (e:any) => {
        setDie(Number(e.value));
        setRoll(1);
        console.log(e.value)
    };
    const chooseMod = (e:any) => {
        if (e.target.value <= 99) setMod(Number(e.target.value));
    };
    // Roll Dice //
    const rollDice = () => {
       randomDieFace(die)
    };

  return { roll, rollDice, clearTray }
}
