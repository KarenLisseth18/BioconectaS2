import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/quienes-somos", label: "¿Quiénes Somos?" },
    { href: "/Unete", label: "Únete a Bioconecta" },
    { href: "/noticias", label: "Noticias" },
    { href: "/servicios", label: "Servicios" },
    { href: "/documentos", label: "Documentos"},
  ];

  return (
    <header className="sticky top-0 z-40 bg-black/95 backdrop-blur border-b-4 border-teal-600">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* 👇 Logo redirige al Home */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/Logo.png" alt="Bioconecta" className="h-10" />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-6 text-white">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  className={`hover:text-teal-400 transition ${
                    pathname === l.href ? "text-teal-400 font-semibold" : ""
                  }`}
                  to={l.href}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          to={pathname === "/perfil" ? "/dashboard" : "/perfil"}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-teal-600 hover:bg-teal-700 transition"
          title="Perfil"
        >
          <img src="/user-icon.svg" alt="perfil" className="h-5 w-5 invert" />
        </Link>
      </div>
    </header>
  );
}
