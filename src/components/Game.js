import React, { useState } from 'react';
import Board from './Board';
import Confetti from 'react-confetti';
import styles from './Game.module.css';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        const newBoard = [...board];
        if (newBoard[index] || calculateWinner(board)) return;

        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const winner = calculateWinner(board);

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    return (
        <div className={styles.game}>
            {winner && <Confetti />}
            {winner && (
                <div className={styles.celebration}>
                    🎉 Congratulations {winner}! 🎉
                </div>
            )}
            <h1 className={styles.title}>Tic Tac Toe</h1>
            <Board squares={board} onClick={handleClick} />
            <div className={styles.info}>
                {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}
            </div>
            <button className={styles.resetButton} onClick={resetGame}>Reset Game</button>
        </div>
    );
};

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export default Game;
