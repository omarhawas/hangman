import React, { useState, useEffect } from "react";
import axios from "axios";

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const uniqueLetterCount = (word) => {
  let newArray = [];
  for (let char of word) {
    if (!newArray.includes(char)) {
      newArray.push(char);
    }
  }
  return newArray.length;
};

const Keyboard = (props) => {
  const [gameState, setGameState] = useState(true);
  const [currentWord, setCurrentWord] = useState("");

  const generateNewWord = () => {
    axios.get("https://api.api-ninjas.com/v1/randomword").then((response) => {
      setCurrentWord(response.data.word);
    });
  };

  useEffect(() => {
    generateNewWord();
  }, []);

  useEffect(() => {
    if (
      currentWord &&
      (props.correctGuesses.length === uniqueLetterCount(currentWord) ||
        props.incorrectGuesses.length === 6)
    ) {
      setGameState(false);
    }
  }, [props.correctGuesses, props.incorrectGuesses]);

  const handleClick = (a) => {
    if (currentWord.includes(a)) {
      props.onCorrectGuess([...props.correctGuesses, a]);
    } else if (!currentWord.includes(a)) {
      props.onIncorrectGuess([...props.incorrectGuesses, a]);
    }
  };

  const handleReset = () => {
    props.onCorrectGuess([]);
    props.onIncorrectGuess([]);
    setGameState(false);
    generateNewWord();
    // setCurrentWord(words[Math.floor(Math.random() * words.length)]);
  };

  const hiddenWord = currentWord
    ? currentWord
        .split("")
        .map((letter) => (props.correctGuesses.includes(letter) ? letter : "_"))
        .join(" ")
    : "";

  return (
    <div>
      <p>{hiddenWord}</p>
      {alphabet.map((a, index) => (
        <button
          key={index}
          onClick={() => handleClick(a)}
          disabled={
            props.incorrectGuesses.length === 6 ||
            props.correctGuesses.includes(a) ||
            props.incorrectGuesses.includes(a)
          }
        >
          {a}
        </button>
      ))}
      {<p>Guess the word. You have 6 lives.</p>}
      {props.incorrectGuesses.length === 6 ? (
        <p>You Lost! The word was {currentWord}</p>
      ) : (
        <p>Lives: {props.incorrectGuesses.length}</p>
      )}
      {!hiddenWord.includes("_") && <p>You won!</p>}
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};

export default Keyboard;
