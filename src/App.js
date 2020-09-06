import React, { useEffect, useState } from "react";
import {Cuestionario} from './components';

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple";

function App() {
  const [preguntas, setPreguntas] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setPreguntas(data.results);
      });
  }, []);
const handleAnswer = () => {
  //bla
}
  return preguntas.length > 0 ? (
    <div className="container my-4">
    <Cuestionario data={preguntas[0]} handleAnswer={handleAnswer}/>
    </div>
  ) : (
    <p></p>
  );
}

export default App;
