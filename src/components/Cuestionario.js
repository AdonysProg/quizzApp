import React from "react";

const Cuestionario = ({
  showAnswer,
  handleNextPage,
  handleAnswer,
  data: { question, correct_answer, answers },
}) => {
  return (
    <div className="flex flex-col">
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
        <h2
          className="text-2xl text-center"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {answers.map((answer) => {
          const bgColor = showAnswer
            ? answer === correct_answer
              ? "bg-green-500"
              : ""
            : "bg-white";
          return (
            <button
              className={`${bgColor} p-4 text-purple-800 font-bold rounded shadow mb-4 bg-white`}
              onClick={() => handleAnswer(answer)}
            >
              {answer}
            </button>
          );
        })}
      </div>
      {showAnswer && (
        <button 
        onClick={handleNextPage}
        className="ml-auto p-4 font-bold rounded shadow mb-4 bg-purple-700 text-white">
          Siguiente
        </button>
      )}
    </div>
  );
};

export default Cuestionario;
