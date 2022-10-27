import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//   console.log("correct", correctGuesses);
//   console.log("incorrect", incorrectGuesses);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       console.log("ekey", e.key);
//       if (alphabet.includes(e.key)) {
//         if (word.toLowerCase().includes(e.key)) {
//           setCorrectGuesses((correctGuesses) => {
//             const newGuesses = [...correctGuesses, e.key];

//             return [...correctGuesses, e.key];
//           });
//           if (correctGuesses.length === word.length) {
//             setGameState(false);
//             setCorrectGuesses([]);
//             setIncorrectGuesses([]);
//           }
//         } else if (!word.toLowerCase().includes(e.key)) {
//           setIncorrectGuesses((incorrectGuesses) => {
//             const newIncorrectGuesses = [...incorrectGuesses, e.key];
//             return newIncorrectGuesses;
//           });

//           if (incorrectGuesses.length === 6) {
//             setGameState(false);
//             setCorrectGuesses([]);
//             setIncorrectGuesses([]);
//           }
//         }
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);
