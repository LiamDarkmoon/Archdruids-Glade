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
        className="flex flex-col gap-3 p-10 sm:w-1/2 max-w-full h-auto overflow-hidden glass bg-amber-100/40"
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
        {
            chars &&
            <Card
                title={chars[chars?.length - 1].name}
                text={chars[chars?.length - 1].clas}
                character={chars[chars?.length - 1]}
                img={imgs[1]}
                className="mx-auto"
            />
        }
    </article>
  )
}
