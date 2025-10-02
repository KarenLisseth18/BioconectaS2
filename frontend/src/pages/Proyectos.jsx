export default function Proyectos() {
  const proyectos = [
    "Proyecto #1 • **/**/20**",
    "Proyecto #2 • **/**/20**",
    "Proyecto #3 • **/**/20**",
    "Proyecto #4 • **/**/20**",
  ];

  return (
    <main className="flex-1 flex items-start justify-center py-10">
      <section className="card w-full max-w-5xl">
        <h1 className="text-xl font-bold mb-6">PROYECTOS</h1>

        <div className="border-b-4 border-teal-600 w-32 mb-6"></div>

        <ul className="space-y-3">
          {proyectos.map((p) => (
            <li key={p} className="bg-gray-100 rounded-lg px-4 py-3 text-gray-700">{p}</li>
          ))}
        </ul>

        <p className="text-center text-gray-400 mt-10">No hay más proyectos</p>
      </section>
    </main>
  );
}
