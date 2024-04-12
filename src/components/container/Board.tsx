'use client'
import { ChangeEvent, useState, useEffect, useRef } from 'react';
import { motion, Reorder } from "framer-motion";

const Board = () => {
    // States
    const [board, setBoard] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [boardSize, setBoardSize] = useState(200);

    // Refs
    const boardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // generate board based on the board size//
        let newBoard = []
        for (let index = 0; index < boardSize; index++) {
            newBoard.push(index)
        }
        setBoard(newBoard)
    }, [boardSize])

    // handle input value func //
    const getBoard = (e: ChangeEvent<HTMLFormElement>) => {
        setBoardSize(e.target.value)
    }


    return (
        <>
             <div className='flex flex-col w-full items-center pt-24'>
                <h1 className='text-3xl font-bold m-4'> This is your game board </h1>
                 {
                    board &&
                <div id='board' ref={boardRef} className='flex flex-col items-center w-full p-8'>
                    <Reorder.Group 
                        values={board} 
                        onReorder={setBoard}
                        className='grid grid-cols-10 gap-2 w-10/12 h-full bg-emerald-400 p-5'
                    >
                        {board.map((item, index) => (
                            <Reorder.Item
                                whileHover={{ scale: 1.1 } }
                                value={item} 
                                key={item}
                                className='border rounded-md border-red-800 m-auto text-center w-full h-[104.7px] hover:border-red-50'
                            >
                            { index }
                            </Reorder.Item>
                        ))}
                    </Reorder.Group>
                </div>
                }
            </div>
        </>
    );
}

export default Board;
