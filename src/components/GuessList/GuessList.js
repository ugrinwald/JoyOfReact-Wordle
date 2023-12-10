import React from "react";

import Guess from "../Guess";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessList({ guesses, answer }) {
  const renderGuesses = range(NUM_OF_GUESSES_ALLOWED).map((num) => {
    const word = guesses[num];
    return <Guess word={word} key={num} answer={answer} />;
  });

  return <div className="guess-results">{renderGuesses}</div>;
}

export default GuessList;
