'use client'
import { useEffect, useState } from "react";
import { imgs } from "@/lib/placeholders";
import Card from "./Card";
import { character } from '../../lib/Types';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function CardsCarousel({ char } : { char: character[] | null }) {
    const [chars, setChars] = useState<character[]>();

    const options = {
        delay: 2000,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
    }
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(options)])

    useEffect(() => {
        let newChars = chars
        if(char) {
            newChars = char
           setChars(newChars)
        }
    }, [char, chars])

  return (
    <article 
        ref={ emblaRef }
        className="p-6 max-w-full overflow-hidden"
    >
        <div className="flex gap-4">
            {chars?.map((char, index) => (
                <Card 
                    key={ char.id }
                    title={ char.name }
                    text={ char.clas } 
                    img={ chars.length <= imgs.length && index < imgs.length ? imgs[index] : imgs[Math.floor(Math.random() * imgs.length)] }
                    character={ char }
                    className={ index === chars.length -1 ? "me-4" : undefined }
                />
            ))}
        </div>
    </article>
  )
}
