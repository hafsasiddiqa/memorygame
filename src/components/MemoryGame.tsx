"use client"
import React, { useState, useEffect } from 'react';

type CardSymbol = '🍎' | '🍌' | '🍒' | '🍇' | '🍉' | '🍍' | '🥝' | '🍓';

const generateCards = (): CardSymbol[] => {
  const symbols: CardSymbol[] = ['🍎', '🍌', '🍒', '🍇', '🍉', '🍍', '🥝', '🍓'];
  const cards: CardSymbol[] = [...symbols, ...symbols];
  return cards.sort(() => Math.random() - 0.5);
};

const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<CardSymbol[]>(generateCards());
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedIndices, setMatchedIndices] = useState<number[]>([]);
  const [turns, setTurns] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [resultMessage, setResultMessage] = useState<string>('');

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedIndices((prev) => [...prev, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlippedIndices([]), 1000);
      setTurns((prevTurns) => prevTurns + 1);
    }
  }, [flippedIndices, cards]);

  useEffect(() => {
    if (turns >= 16) {
      if (matchedIndices.length === cards.length) {
        setResultMessage('🎉 You Win!');
      } else {
        setResultMessage('😢 You Lose!');
      }
      setGameOver(true);
    } else if (matchedIndices.length === cards.length) {
      setResultMessage('🎉 You Win!');
      setGameOver(true);
    }
  }, [turns, matchedIndices, cards.length]);

  const handleCardClick = (index: number): void => {
    if (
      flippedIndices.length === 2 ||
      flippedIndices.includes(index) ||
      matchedIndices.includes(index) ||
      gameOver
    ) {
      return;
    }
    setFlippedIndices((prev) => [...prev, index]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4">
      <h1 className="text-3xl font-bold mb-6">Memory Game</h1>
      <p className="text-xl mb-4">Turns: {turns}</p>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-20 h-20 flex items-center justify-center text-3xl bg-white rounded shadow-md cursor-pointer ${
              flippedIndices.includes(index) || matchedIndices.includes(index)
                ? 'bg-blue-100'
                : 'bg-blue-300'
            }`}
            onClick={() => handleCardClick(index)}
          >
            {flippedIndices.includes(index) || matchedIndices.includes(index)
              ? card
              : '?'}
          </div>
        ))}
      </div>
      {gameOver && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-2xl font-bold">{resultMessage}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => {
                setCards(generateCards());
                setFlippedIndices([]);
                setMatchedIndices([]);
                setTurns(0);
                setGameOver(false);
                setResultMessage('');
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
