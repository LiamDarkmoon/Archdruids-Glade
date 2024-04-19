'use client'
import { useState } from 'react';
import Image from 'next/image';
import CardBody from '../common/CardBody';
import CardText from '../common/CardText';
import CardTitle from '../common/CardTitle';
import { motion } from 'framer-motion';
import Button from './Btn';
import { character } from '../../lib/Types';

const Card = ({ 
    title, 
    text, 
    img, 
    character,
    className 
} : {
    title: string,
    text: string,
    img: string,
    character: character,
    className?: string
}) => {

    const [isHover, setIsHover] = useState(false);

    return (
        <>
        {
            !isHover ?
        <motion.div
            onMouseOver={ () => setIsHover(true) }
            className={ className + " relative h-[375px] w-[250px] flex flex-col items-center justify-end rounded-lg bg-opacity-45" }
        >
            <Image src={ img } className="h-full w-full rounded-md" width={ 200 } height={ 200 } alt={ title }/>
            <CardBody className={"absolute bottom-0 h-1/3 rounded-b-lg bg-emerald-950 bg-opacity-80 text-emerald-50 p-4"}>
                <CardTitle className="text-lg font-bold"> { title } </CardTitle>
                <CardText className="text-sm font-medium italic"> { text } </CardText>
            </CardBody>
        </motion.div>
        :
        // CardBack: Character sheet
        <motion.div
            animate={ { rotateY: 360 } }
            onMouseLeave={ () => setIsHover(false) }
            className={ className + " relative h-[375px] w-[250px] flex flex-col items-center justify-end rounded-lg bg-opacity-45 border border-solid border-rose-950" }
        >
            <Image src={ img } className="h-full w-full rounded-md" width={ 200 } height={ 200 } alt={ title }/>
            <CardBody className="absolute flex flex-col gap-5 bg-amber-100 bg-opacity-80 h-full w-full p-6">
                <CardTitle className="text-xl text-center font-bold text-rose-950 border-b border-rose-950 pb-2"> { character.name } </CardTitle>
                <div>
                    <CardText className="font-semibold text-rose-950 my-1">
                        class: 
                        <span className="text-sm font-medium italic">
                            { character.clas }
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
                        {Object.entries(character.stats).map(([key, value]) => 
                            <span className="text-sm font-medium italic" key={ key }> { key }: { value } </span>
                        )}
                    </CardText>
                </div>
                <Button click={()=> console.log("clicked")}>Show more</Button>
            </CardBody>
        </motion.div>
        }
        </>
    );
};

export default Card;
