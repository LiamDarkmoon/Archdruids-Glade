'use client'
import { useEffect, useRef, useState } from "react";
import { Reorder } from "framer-motion";
import { characters, quotes, imgs } from "@/lib/placeholders";
import Card from "./Card";
import { character } from '../../lib/Types';

export default function CardsCarousel({ char } : { char: character[] | null }) {
    const [chars, setChars] = useState(characters);
    const [cards, setCards] = useState(Array.from({ length: chars.length }, (_, i) => i))
    const [width, setWidth] = useState(1000)

    const carouselRef = useRef<HTMLTableSectionElement>(null)

    useEffect(() => {
        console.log(char)
        if(char) {
           setChars(char.slice(-5))
        }
        if(carouselRef.current) {
            setWidth(carouselRef.current?.clientWidth)
        }
    }, [char])


  return (
    <article 
        ref={ carouselRef }
        className="w-full p-6"
    >
        <Reorder.Group 
            axis={ width > 500 ? "x" : "y"}
            values={cards}
            onReorder={setCards}
            className="flex flex-wrap justify-center sm:grid grid-cols-5 sm:gap-2 gap-4"
        >
            {chars.map((char, index) => (
                <Reorder.Item
                    value={char.id}
                    key={char.id}
                    drag
                    dragDirectionLock
                    dragElastic={ false }
                    dragConstraints={ carouselRef}
                >
                <Card 
                    title={ char.name }
                    text={ quotes[index] } 
                    img={ imgs[index] }
                    character={ char }
                />
                </Reorder.Item>
            ))}
        </Reorder.Group>
    </article>
  )
}
