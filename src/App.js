import React, { useEffect, useState } from "react";
import { Cuestionario } from "./components";
import { render } from "@testing-library/react";

//const API_URL = "https://quizzgeoapi.herokuapp.com/preguntas";

function App() {
  const [preguntas, setPreguntas] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [badScore, setBadScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    fetch(`./data.json`)
      .then((res) => res.json())
      .then((data) => {
        const preguntas = data.results
          .sort(() => Math.random() - 0.5)
          .map((preguntas) => ({
            ...preguntas,
            answers: [
              preguntas.correct_answer,
              ...preguntas.incorrect_answers,
            ].sort(() => Math.random() - 0.5),
          }));
        setPreguntas(preguntas);
      });
  }, []);
  const handleAnswer = (answer) => {
    if (!showAnswer) {
      if (answer === preguntas[currentIndex].correct_answer) {
        setScore(score + 1);
      } else {
        setBadScore(badScore + 1);
      }
    }
    setShowAnswer(true);
  };
  const handleNextPage = () => {
    setShowAnswer(false);
    setcurrentIndex(currentIndex + 1);
  };
  return preguntas.length > 0 ? (
    <div className="container my-4">
      {currentIndex <= preguntas.length ? (
        <div className="h-screen m-20 resultados">
          <h1 className="text-3xl text-white font-bold bg-green-500 p-10 rounded shadow-lg m-5 text-center">
            Has respondido {score} preguntas correctamente.
          </h1>
          <div>
            <h1 className="text-3xl text-white font-bold bg-red-500 p-10 rounded shadow-lg text-center">
              Fallaste en {badScore} preguntas.
            </h1>
          </div>
        </div>
      ) : (
        <Cuestionario
          data={preguntas[currentIndex]}
          handleAnswer={handleAnswer}
          handleNextPage={handleNextPage}
          showAnswer={showAnswer}
        />
      )}
    </div>
  ) : (
    <p></p>
  );
}

export default App;
