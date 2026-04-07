import {Link} from "react-router-dom";
import { useContext } from "react";
import {ThemeContext} from "../context/ThemeContext";

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <header className="header">
            <div>
                <h1>My Blog</h1>
                <nav className ="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <button className = "theme-btn" onClick={toggleTheme}>
                        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Header;