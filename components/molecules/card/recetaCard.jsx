"use client";
import { useState } from "react";

const RecetaCard = ({ receta }) => {
  const [mostrarDescripcionCompleta, setMostrarDescripcionCompleta] =
    useState(false);

  const alternarDescripcion = () => {
    setMostrarDescripcionCompleta(!mostrarDescripcionCompleta);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="relative aspect-w-4 aspect-h-3">
        <img
          src={receta.image}
          alt={receta.alt}
          className="w-full h-64 object-cover rounded-t-lg"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-primary-700 mb-2">
          {receta.nombre}
        </h2>
        <p className="text-gray-600 mb-2">
          {receta.persona} / {receta.tiempo_preparacion}
        </p>
        <h3 className="text-lg font-semibold text-primary-700 mb-2">
          Ingredientes:
        </h3>
        <ul className="list-disc list-inside mb-4">
          {receta.ingredientes.map((ingrediente, i) => (
            <li key={i} className="text-gray-600">
              {ingrediente}
            </li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold text-primary-700 mb-2">
          Instrucciones:
        </h3>
        <ol
          className={`list-decimal list-inside ${
            mostrarDescripcionCompleta ? "" : "truncate"
          }`}
        >
          {receta.instrucciones
            .slice(0, receta.instrucciones.length / 2)
            .map((instruccion, i) => (
              <li key={i} className="text-gray-600">
                {instruccion}
              </li>
            ))}
        </ol>
        <div className="flex justify-center">
          <button
            onClick={alternarDescripcion}
            className="mt-4 px-4 py-2 bg-primary-700 text-black rounded-full border-[1px] border-black cursor-pointer transition duration-300 active:scale-95"
          >
            {mostrarDescripcionCompleta ? "Ocultar" : "Saber más"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecetaCard;
