import { ChangeEvent, useState } from 'react';

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
    const getBoard = (e: ChangeEvent<HTMLFormElement>) => {
        setBoardSize(e.target.value)      
    }

    // handle submit func //
    const showBoard = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        getBoard(e)
    }

    return (

        <div className='col'>
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
        </div>
    );
}

export default Board;
