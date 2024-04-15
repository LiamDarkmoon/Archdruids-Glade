'use client'
import { useEffect, useRef, useState } from "react";
import { Reorder } from "framer-motion";
import Card from "./Card";

export default function CardsCarousel() {
    const [cards, setCards] = useState([1, 2, 3 ,4 ,5])
    const [width, setWidth] = useState(1000)

    const carouselRef = useRef<HTMLTableSectionElement>(null)

    useEffect(() => {
        if(carouselRef.current) {
            setWidth(carouselRef.current?.clientWidth)
        }
    }, [carouselRef])


  return (
    <section 
        ref={ carouselRef } 
        className="w-full h-screen p-6"
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
                >
                <Card 
                    title={`Card ${index}`}
                    text="Powerfull as wise the archdruid looks over the life on the glade like a father over his child" 
                    img="/assets/imgs/Archdruid.png"
                />
                </Reorder.Item>
            ))}
        </Reorder.Group>
    </section>
  )
}
