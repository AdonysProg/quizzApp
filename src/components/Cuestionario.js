import React from "react";

const Cuestionario = ({
  handleAnswer,
  data: { question, correct_answer, incorrect_answers },
}) => {
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div>
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
        <h2
          className="text-2xl text-center"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {shuffledAnswers.map((answer) => (
          <button
            className='p-4 text-purple-800 font-bold rounded shadow mb-4 bg-white'
            onClick={() => handleAnswer(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cuestionario;
