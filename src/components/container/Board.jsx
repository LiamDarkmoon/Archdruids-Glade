import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Board = () => {

    const [visible, setVisible] = useState(false);
    const [boardSize, setBoardSize] = useState(150);
    const [show, setShow] = useState(false);

    // generate board //
    let board = [];

    for (let y = 0; y < boardSize; y++) {
        board.push(<div className='tile'></div>)
    }

    // handle input value func //
    const getBoard = (e) => {
        setBoardSize(e.target.value)      
    }

    // handle submit func //
    const showBoard = (e) => {
        e.preventDefault();
        getBoard(e)
        setVisible(true)
    }

    const showM = () => setShow(true);
    const closeM = () => setShow(false);

    return (

        <div className='col'>
            <button className='bttn' onClick={ showM }>
                Board
            </button>
            <Modal show={ show } onHide={ closeM } size='xl' contentClassName='board'>
                <div id='board' className='col container-fluid text-center'>
                    <h1 className='m-3'> This is your game board </h1>
                    {
                        show ?

                    <div id='map' className='row justify-content-center m-4'>
                        { board }
                    </div>
                    :
                    null
                    }
                </div>
            </Modal>
        </div>
    );
}

export default Board;
