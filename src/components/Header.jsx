import {Link} from "react-router-dom";
import { useContext } from "react";
import {ThemeContext} from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { user, logout} = useContext(AuthContext)
    return (
        <header className="header">
            <div>
                <h1>My Blog</h1>
                <nav className ="navbar">
                    <Link to={user ? "/posts" : "/"}>Home</Link>
                    <Link to="/contact">Contact</Link>

                    {!user ? (
                        <Link to="/login">Login</Link>
                    ) : (
                        <button className="theme-btn" onClick={logout}>
                            Logout
                        </button>
                    )}

                    <button className = "theme-btn" onClick={toggleTheme}>
                        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Header;