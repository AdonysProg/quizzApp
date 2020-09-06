import React, { useEffect, useState } from "react";
import { Cuestionario } from "./components";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple";

function App() {
  const [preguntas, setPreguntas] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setPreguntas(data.results);
      });
  }, []);
  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1;
    setcurrentIndex(newIndex);
    if (answer === preguntas[currentIndex].correct_answer) {
      setScore(score + 1);
    }
  };
  return preguntas.length > 0 ? (
    <div className="container my-4">
      {currentIndex >= preguntas.length ? (
        <div className="h-screen">
          <h1 className="text-3xl text-white font-bold">
            Tu puntaje fue {score}.
          </h1>
        </div>
      ) : (
        <Cuestionario
          data={preguntas[currentIndex]}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  ) : (
    <p></p>
  );
}

export default App;
