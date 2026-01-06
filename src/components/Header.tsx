import { NavLink } from "react-router";

function Header() {
    return (
        <header className="flex gap-4  bg-gray-400">
            <NavLink
                className={({ isActive }) =>
                    `${isActive && "bg-gray-600"}  p-4`
                }
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `${isActive && "bg-gray-600"}  p-4`
                }
                to="tickets"
            >
                Tickets
            </NavLink>
        </header>
    );
}

export default Header;
