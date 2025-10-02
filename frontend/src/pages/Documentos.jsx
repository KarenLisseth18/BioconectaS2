import React, { useState } from "react";

function Documentos() {
  const [archivo, setArchivo] = useState(null);
  const [documentos, setDocumentos] = useState([]);

  const manejarArchivo = (e) => {
    setArchivo(e.target.files[0]);
  };

  const subirArchivo = () => {
    if (!archivo) {
      alert("Selecciona un archivo");
      return;
    }

    // Simulación de subida - aquí iría tu backend
    setDocumentos([
      ...documentos,
      { nombre: archivo.name, fecha: new Date().toLocaleDateString() },
    ]);
    setArchivo(null);
    alert("Archivo subido con éxito (simulado)");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-teal-800">
        Gestión de Documentos - BIOCONECTA
      </h2>

      {/* Sección de carga */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-2">Subir Documento</h3>
        <input
          type="file"
          onChange={manejarArchivo}
          className="mb-2 block w-full border border-gray-300 rounded-lg p-2"
        />
        <button
          onClick={subirArchivo}
          className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
        >
          Subir
        </button>
      </div>

      {/* Sección de visualización */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Documentos Subidos</h3>
        <input
          type="text"
          placeholder="Buscar documento..."
          className="mb-2 block w-full border border-gray-300 rounded-lg p-2"
        />
        {documentos.length === 0 ? (
          <p className="text-gray-500">No hay documentos subidos.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {documentos.map((doc, index) => (
              <li key={index} className="py-2 flex justify-between">
                <span>{doc.nombre}</span>
                <span className="text-sm text-gray-500">{doc.fecha}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Documentos;
