'use client'
import { useState, useRef } from 'react';
import Image from 'next/image';
import CardBody from '../common/CardBody';
import CardText from '../common/CardText';
import CardTitle from '../common/CardTitle';
import { motion } from 'framer-motion';
import { Character } from '@/lib/Character.class';
import Button  from '../pure/Btn';

const Card = ({ 
    title, 
    text, 
    img, 
    className 
} : {
    title: string,
    text: string,
    img: string,
    className?: string
}) => {

    const [isHover, setIsHover] = useState(false);
    const [character, setCharacter] = useState<Character>(new Character({name:"Liam Darkmoon", clas:"Druid", race:"Human", background:"Sage", alignment:"Neutral", stats: [16, 18, 18, 10, 18, 10]}))

    return (
        <>
        {
            !isHover ?
        <motion.div
            onMouseOver={ () => setIsHover(true) }
            className={ className + " relative h-[400px] flex flex-col items-center justify-end rounded-md bg-opacity-45"}
        >
            <Image src={ img } className="h-full w-full rounded-md" width={ 200 } height={ 200 } alt={ title }/>
            <CardBody className="absolute bottom-0 h-1/3 rounded-b-lg bg-emerald-950 bg-opacity-80 text-emerald-50 p-2">
                <CardTitle className="text-lg font-bold"> { title } </CardTitle>
                <CardText className="text-sm font-medium italic"> { text } </CardText>
            </CardBody>
        </motion.div>
        :
        // CardBack: Character sheet
        <motion.div
            animate={ { rotateY: 360 } }
            onMouseLeave={ () => setIsHover(false) }
            className={ className + " relative h-[400px] flex flex-col items-center justify-end rounded-md bg-opacity-45 border border-rose-950"}
        >
            <CardBody className={`flex flex-col bg-amber-100 h-full p-6`}>
                <CardTitle className="text-xl text-center font-bold text-rose-950 border-b border-rose-950 pb-2"> { character.name } </CardTitle>
                <CardText className="font-semibold text-rose-950 my-1">
                    class: 
                    <span className="text-sm font-medium italic">
                        { character.class }
                    </span>
                </CardText>
                <CardText className="font-semibold text-rose-950 my-1">
                    Race: 
                    <span className="text-sm font-medium italic">
                        { character.race }
                    </span>
                </CardText>
                <CardText className="font-semibold text-rose-950 my-1">
                    Alignment: 
                    <span className="text-sm font-medium italic">
                        { character.alignment }
                    </span>
                </CardText>
                <CardText className="font-semibold text-rose-950 my-1">
                    Background: 
                    <span className="text-sm font-medium italic">
                        { character.background }
                    </span>
                </CardText>
                <CardText className="font-semibold text-rose-950 my-1">
                    Stats:
                    <span className="text-sm font-medium italic">
                        { character.stats.map((stat, index) => {
                            return <span key={ index }> { stat }</span>
                        })
                        }
                    </span>
                </CardText>
                <Button 
                    click={ () => console.log("View More") }
                    className="align-self-center mt-4"
                >
                    View More
                </Button>
            </CardBody>
        </motion.div>
        }
        </>
    );
};

export default Card;
