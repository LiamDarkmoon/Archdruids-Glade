'use client'
import { useEffect, useRef, useState } from "react";
import { Reorder } from "framer-motion";
import { characters, quotes, imgs } from "@/lib/placeholders";
import Card from "./Card";
import { character } from '../../lib/Types';

export default function CardsCarousel({ char } : { char: character[] | null }) {
    const [chars, setChars] = useState(characters);
    const [cards, setCards] = useState(Array.from({ length: 4 }, (_, i) => i))
    const [width, setWidth] = useState(1000)

    const carouselRef = useRef<HTMLTableSectionElement>(null)

    useEffect(() => {
        console.log(cards.length)
        if(char) {
           setChars(char.slice(-5))
        }
        setCards(Array.from({ length: chars.length }, (_, i) => i))
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
            {cards.map((card, index) => (
                <Reorder.Item
                    value={card}
                    key={card}
                    drag
                    dragDirectionLock
                    dragElastic={ false }
                    dragConstraints={ carouselRef }
                >
                <Card 
                    title={ chars[index].name }
                    text={ quotes[index] } 
                    img={ imgs[index] }
                    character={ chars[index] }
                />
                </Reorder.Item>
            ))}
        </Reorder.Group>
    </article>
  )
}
