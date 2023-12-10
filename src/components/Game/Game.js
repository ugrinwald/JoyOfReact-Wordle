import React from "react";

import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import GameOverBanner from "../GameOverBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleAddWord(word) {
    const newWord = {
      word,
      id: Math.random(),
    };
    const nextWord = [...guesses, newWord];
    setGuesses(nextWord);

    if (nextWord.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
    if (word === answer) {
      setGameStatus("won");
    }
  }
  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput handleAddWord={handleAddWord} gameStatus={gameStatus} />
      {gameStatus !== "running" && (
        <GameOverBanner
          gameStatus={gameStatus}
          answer={answer}
          numOfGuesses={guesses.length}
        />
      )}
    </>
  );
}

export default Game;
