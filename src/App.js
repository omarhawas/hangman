import { useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import image5 from "./images/5.png";
import image6 from "./images/6.png";
import image7 from "./images/7.png";

function App() {
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);

  return (
    <div className="App">
      <h1>Hangman</h1>
      <Keyboard
        correctGuesses={correctGuesses}
        incorrectGuesses={incorrectGuesses}
        onCorrectGuess={(newGuesses) => setCorrectGuesses(newGuesses)}
        onIncorrectGuess={(newIncorrectGuesses) =>
          setIncorrectGuesses(newIncorrectGuesses)
        }
      />
      {incorrectGuesses.length === 0 && <img src={image1} />}
      {incorrectGuesses.length === 1 && <img src={image2} />}
      {incorrectGuesses.length === 2 && <img src={image3} />}
      {incorrectGuesses.length === 3 && <img src={image4} />}
      {incorrectGuesses.length === 4 && <img src={image5} />}
      {incorrectGuesses.length === 5 && <img src={image6} />}
      {incorrectGuesses.length === 6 && <img src={image7} />}
    </div>
  );
}

export default App;

/* pseudo code

1- create a keyboard with all letters
2- 

*/
