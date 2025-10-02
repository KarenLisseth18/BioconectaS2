import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // 🔹 Simulación de backend (puedes reemplazar con fetch/axios)
      if (email === "admin@bioconeecta.com" && password === "1234") {
        navigate("/dashboard"); // si es válido
      } else {
        setError("Credenciales inválidas. Intenta de nuevo.");
      }
    } catch (err) {
      setError("Ocurrió un error al iniciar sesión.");
    }
  };

  return (
    <main className="flex-1 flex items-center justify-center relative">
      {/* Barra teal decorativa */}
      <div className="absolute inset-x-0 top-0 h-1 bg-teal-600"></div>

      <form
        onSubmit={onSubmit}
        className="card w-[380px] text-center bg-white p-6 shadow-lg rounded-xl"
      >
        <h2 className="text-2xl font-bold mb-1">Iniciar Sesión</h2>
        <p className="text-gray-500 mb-4">¿Aún no estás registrado?</p>

        <label className="label" htmlFor="email">Correo Electrónico</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo Electrónico"
          className="input mb-3"
          required
        />

        <label className="label" htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="input mb-2"
          required
        />

        <Link to="#" className="text-sm text-gray-500 hover:underline">
          ¿Olvidaste tu contraseña?
        </Link>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button type="submit" className="btn btn-primary w-full mt-4">
          Iniciar Sesión
        </button>

        <p className="mt-4 text-sm">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-teal-600 hover:underline">
            Regístrate
          </Link>
        </p>
      </form>
    </main>
  );
}
