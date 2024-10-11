// src/components/Board.js
import React from 'react';
import Square from './Square';
import styles from './Board.module.css';

const Board = ({ squares, onClick }) => {
    return (
        <div className={styles.board}>
            {squares.map((square, index) => (
                <Square key={index} value={square} onClick={() => onClick(index)} />
            ))}
        </div>
    );
};

export default Board;
