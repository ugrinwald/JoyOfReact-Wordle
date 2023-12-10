import React from "react";

function GuessInput({ handleAddWord, gameStatus }) {
  const [guessValue, setGuessValue] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddWord(guessValue);
    setGuessValue("");
  };

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          disabled={gameStatus !== "running"}
          id="guess-input"
          type="text"
          value={guessValue}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          onChange={(event) => {
            const nextGuessValue = event.target.value.toUpperCase();
            setGuessValue(nextGuessValue);
          }}
        />
      </form>
    </div>
  );
}

export default GuessInput;
