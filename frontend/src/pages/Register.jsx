import { Link } from "react-router-dom";

export default function Register() {
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: send data to backend
    alert("Registro enviado (demo)");
  };

  return (
    <main className="flex-1 flex items-start justify-center py-14">
      <form onSubmit={onSubmit} className="card w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-center md:text-left">Registrarse</h2>
            <p className="text-center md:text-left text-gray-500 mb-4">¿Ya tienes cuenta?</p>

            <label className="label" htmlFor="email">Correo Electrónico</label>
            <input id="email" type="email" placeholder="Correo Electrónico" className="input mb-3" required />

            <label className="label" htmlFor="email2">Confirmar correo Electrónico</label>
            <input id="email2" type="email" placeholder="Confirmar correo Electrónico" className="input mb-3" required />

            <label className="label" htmlFor="pass">Contraseña</label>
            <input id="pass" type="password" placeholder="Contraseña" className="input mb-3" required />

            <label className="label" htmlFor="pass2">Confirmar Contraseña</label>
            <input id="pass2" type="password" placeholder="Confirmar contraseña" className="input mb-3" required />
          </div>

          <div>
            <label className="label" htmlFor="fecha">Fecha de Nacimiento</label>
            <input id="fecha" type="date" className="input mb-3" required />

            <label className="label" htmlFor="tel">Teléfono</label>
            <input id="tel" type="tel" placeholder="+57 300 000 0000" className="input mb-3" required />

            <label className="label" htmlFor="rol">Seleccione un Rol</label>
            <select id="rol" className="input mb-3">
              <option>Estudiante</option>
              <option>Asesor</option>
              <option>Administrador</option>
            </select>

            <div className="mt-10 md:mt-16 flex items-center justify-center md:justify-start">
              <button type="submit" className="btn btn-primary">Crear cuenta</button>
              <Link to="/login" className="ml-4 text-teal-600 hover:underline">Iniciar Sesión</Link>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
