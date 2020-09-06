import React from "react";

const Button = ({ answer }) => (
  <button className="bg-white p-4 text-purple-800 font-bold rounded shadow mb-4">
    {answer}
  </button>
);

const Cuestionario = ({
 handleAnswer, data: { question, correct_answer, incorrect_answers },
}) => {
    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);

  return  (
  <div>
    <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
      <h2
        className="text-2xl text-center"
        dangerouslySetInnerHTML={{ __html: question }}
      />
    </div>
    <div className="grid grid-cols-2 gap-6 mt-6">
      <Button onClick={() => handleAnswer(shuffledAnswers[0])} answer={shuffledAnswers[0]}/>
      <Button onClick={() => handleAnswer(shuffledAnswers[1])} answer={shuffledAnswers[1]}/>
      <Button onClick={() => handleAnswer(shuffledAnswers[2])} answer={shuffledAnswers[2]}/>
      <Button onClick={() => handleAnswer(shuffledAnswers[3])} answer={shuffledAnswers[3]}/>

    </div>
  </div>
)};

export default Cuestionario;
