import PropTypes from 'prop-types';


const Bttn = ({ className, click, clean, text }) => {
    return (
        <button className={ className + ' bttn' } type="submit" onClick={ click } onMouseOver={ clean } > { text } </button>
    );
};


Bttn.propTypes = {
    click: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    clean: PropTypes.func,
    className: PropTypes.string,

};


export default Bttn;
