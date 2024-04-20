'use client'
import { useEffect, useRef, useState } from "react";
import { Reorder } from "framer-motion";
import { characters, quotes, imgs } from "@/lib/placeholders";
import Card from "./Card";

export default function CardsCarousel() {
    const [cards, setCards] = useState([0, 1, 2, 3, 4])
    const [width, setWidth] = useState(1000)

    const carouselRef = useRef<HTMLTableSectionElement>(null)

    useEffect(() => {
        if(carouselRef.current) {
            setWidth(carouselRef.current?.clientWidth)
        }
    }, [carouselRef])


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
                    dragConstraints={ carouselRef}
                >
                <Card 
                    title={ characters[card].name }
                    text={ quotes[card] } 
                    img={ imgs[card] }
                    character={ characters[card] }
                />
                </Reorder.Item>
            ))}
        </Reorder.Group>
    </article>
  )
}
