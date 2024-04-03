import PropTypes from 'prop-types';


const Card = ({ title, text, img, className }) => {
    return (
        <div className={ className + " card mb-3"}>
            <img src={ img } className="card-img" alt={ title }/>
            <div className="card-body">
                <h5 className="card-title"> { title } </h5>
                <p className="card-text"> { text } </p>
            </div>
        </div>
    );
};


Card.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    quote: PropTypes.string,
    className: PropTypes.string,
    img: PropTypes.any,
};


export default Card;
