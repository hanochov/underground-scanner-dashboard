import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-700">
          Underground Scanner
        </Link>
        <nav className="flex gap-4 text-sm">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-700 font-semibold" : "text-gray-600"}>
            Home
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-700 font-semibold" : "text-gray-600"}>
            Dashboard
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-700 font-semibold" : "text-gray-600"}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
