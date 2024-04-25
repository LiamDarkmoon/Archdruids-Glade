'use client'
import { useState, useContext } from 'react';
import { charactersContext, characterContextProps } from '@/lib/contexts/chractersContext';
import useModal from '@/lib/hooks/useModal';
import Image from 'next/image';
import CardBody from '../common/CardBody';
import CardText from '../common/CardText';
import CardTitle from '../common/CardTitle';
import { motion } from 'framer-motion';
import Button from './Btn';
import { character } from '../../lib/Types';
import { deleteCharacter, getCharacter } from '@/lib/actions';

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
    const deleteWithId = deleteCharacter.bind(null, character.id);
    const { setChar, setShow } = useContext(charactersContext) as characterContextProps;

    const handleClick = () => {
        setChar(character);
        setShow(true);
    }

    return (
        <>
        {
            !isHover ?
        <motion.div
            onMouseOver={ () => setIsHover(true) }
            className={ className + " relative h-[375px] w-[250px] flex flex-col items-center justify-end rounded-lg bg-opacity-45 shadow-lg shadow-amber-950" }
        >
            <Image src={ img } className="h-full w-full rounded-md" width={ 200 } height={ 200 } alt={ title }/>
            <CardBody className={"absolute bottom-0 h-1/3 rounded-b-lg bg-amber-950 bg-opacity-80 text-amber-50 p-4"}>
                <CardTitle className="text-lg font-bold"> { title } </CardTitle>
                <CardText className="text-sm font-medium italic"> { text } </CardText>
            </CardBody>
        </motion.div>
        :
        // CardBack: Character sheet
        <motion.div
            animate={ { rotateY: 360, scale: 1.1 } }
            onMouseLeave={ () => setIsHover(false) }
            className={ className + " relative z-30 h-[375px] w-[250px] flex flex-col items-center justify-end rounded-lg bg-opacity-45 border border-solid border-rose-950 shadow-lg shadow-amber-950" }
        >
            <Image src={ img } className="h-full w-full rounded-md" width={ 200 } height={ 200 } alt={ title }/>
            <CardBody className="absolute flex flex-col gap-5 rounded-lg bg-amber-100 bg-opacity-80 h-full w-full p-6">
                <CardTitle className="text-xl text-center font-bold text-rose-950 border-b border-rose-950 pb-2"> { character.name } </CardTitle>
                <div>
                    <CardText className="font-semibold text-rose-950 my-1">
                        Class: 
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
                    <CardText className="font-semibold text-rose-950 my-1 mx-auto">
                        <span className='block'>Stats:</span> 
                        <span className="text-sm font-medium"> { character.str } </span> |
                        <span className="text-sm font-medium"> { character.dex } </span> |
                        <span className="text-sm font-medium"> { character.con } </span> |
                        <span className="text-sm font-medium"> { character.int } </span> |
                        <span className="text-sm font-medium"> { character.wis } </span> |
                        <span className="text-sm font-medium"> { character.cha } </span>
                    </CardText>
                </div>
                <div>
                    <Button className='mb-2' click={ handleClick }>
                        Show more
                    </Button>
                    <form action={deleteWithId}>
                        <Button secondary>
                            Delete
                        </Button>
                    </form>
                </div>
            </CardBody>
        </motion.div>
        }
        </>
    );
};

export default Card;
