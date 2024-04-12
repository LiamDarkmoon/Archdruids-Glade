import Image from 'next/image';
import CardBody from '../common/CardBody';
import CardText from '../common/CardText';
import CardTitle from '../common/CardTitle';

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
    return (
        <div
            className={ className + " relative flex flex-col items-center justify-end rounded-md bg-opacity-45"}
        >
            <Image src={ img } className="h-full w-full rounded-md" width={ 200 } height={ 200 } alt={ title }/>
            <CardBody className="absolute bottom-0 h-1/3 rounded-b-lg bg-emerald-950 bg-opacity-80 text-emerald-50 p-2">
                <CardTitle className="text-lg font-bold"> { title } </CardTitle>
                <CardText className="text-sm font-medium italic"> { text } </CardText>
            </CardBody>
        </div>
    );
};

export default Card;
