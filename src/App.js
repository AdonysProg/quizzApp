import React from "react";

function App() {
  return (
    <div className="container my-4">
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl text-center">
          ¿Cómo se calcula la base aerofotogrametrica de un par de fotos del
          Google Earth?
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-4">
        <button className="bg-white p-4 text-purple-800 font-bold rounded shadow mb-4">
          Para conocer la altitud o altura ortométrica; es decir, respecto al
          nivel del mar, se debe restar el valor de la anomalía a la altura
          elipsoidal obteniendo en este caso una altitud de 160,3 metros.metros.
        </button>
        <button className="bg-white p-4 text-purple-800 font-bold rounded shadow mb-4">
          Respuesta 2
        </button>
        <button className="bg-white p-4 text-purple-800 font-bold rounded shadow">
          Para conocer la altitud o altura ortométrica; es decir, respecto al
          nivel del mar, se debe restar el valor de la anomalía a la altura
          elipsoidal obteniendo en este caso una altitud de 160,3 metros.
        </button>
        <button className="bg-white p-4 text-purple-800 font-bold rounded shadow">
          Respuesta 4
        </button>
      </div>
    </div>
  );
}

export default App;
