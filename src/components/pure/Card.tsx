import Image from 'next/image';

const Card = ({ 
    title, 
    text, 
    img, 
    className 
} : {
    title: string,
    text: string,
    img: string,
    className: string
}) => {
    return (
        <div className={ className + " card mb-3"}>
            <Image src={ img } className="card-img" alt={ title }/>
            <div className="card-body">
                <h5 className="card-title"> { title } </h5>
                <p className="card-text"> { text } </p>
            </div>
        </div>
    );
};

export default Card;
