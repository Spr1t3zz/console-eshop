import { NavLink } from "react-router-dom";

function Navigation({ searchQuery, onSearchChange }) {
    const activeClass = ({ isActive }) => isActive ? "nav-link active" : "nav-link";

    return (
        <div>
            <nav className="navigation-container">
                <div className="page-section">
                    <NavLink className={activeClass} to="/Products-page">Domů</NavLink>
                    <NavLink className={activeClass} to="/News">Novinky</NavLink>
                    <NavLink className={activeClass} to="/Something-went-wrong">O nás</NavLink>
                </div>
                <div className="non-page-section">
                    <NavLink className={activeClass} to="/Favorites">Oblíbené
                    </NavLink>
                    <NavLink className={activeClass} to="/Cart-items">Košík
                        </NavLink>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            id="searchName"
                            placeholder="Co hledáte?"
                            className="form-control"
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;