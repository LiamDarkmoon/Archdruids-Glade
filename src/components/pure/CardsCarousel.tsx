'use client'
import { useState } from "react";
import { Reorder } from "framer-motion";
import Card from "./Card";

export default function CardsCarousel() {
    const [cards, setCards] = useState([1, 2, 3 ,4 ,5])

  return (
    <section className="w-full h-screen p-6">
        <Reorder.Group 
            axis="x"
            values={cards} 
            onReorder={setCards}
            className="flex flex-wrap justify-center sm:grid grid-cols-5 gap-2"
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
