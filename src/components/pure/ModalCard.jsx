import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalDialog } from 'react-bootstrap';
import Card from './Card';
import Bttn from './Btn';


const ModalCard = ({ title, text, img, className }) => {

    const [show, setShow] = useState(false)

    const handleCloseButton = () => {
        setShow(false)
    }
    const handleShowButton = () => {
        setShow(true)
    }

    return (
        <div>
            <Bttn click={ handleShowButton } text={ title }/>
            <Modal show={ show } onHide={ handleCloseButton } >
                <Card className={ className } title={ title } text={ text } img={ img }/>
            </Modal>
        </div>
    );
};


ModalCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    img: PropTypes.any,
};


export default ModalCard;
