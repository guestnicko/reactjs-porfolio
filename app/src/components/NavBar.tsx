import { Link, NavLink } from "react-router";
import { BG_COLOR, ACCENT_COLOR } from "../utils/constants";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
];

export default function NavBar() {
  return (
    <header
      className="border-b border-slate-700/60"
      style={{ backgroundColor: BG_COLOR }}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-sm text-slate-100">
        <Link to="/" className="font-semibold tracking-wide">
          <span style={{ color: ACCENT_COLOR }}>Port</span>
          <span>folio</span>
        </Link>
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  [
                    "transition-colors",
                    isActive
                      ? "font-medium"
                      : "text-slate-300 hover:text-slate-50",
                  ].join(" ")
                }
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderBottom: `2px solid ${ACCENT_COLOR}`,
                        paddingBottom: "2px",
                      }
                    : undefined
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
