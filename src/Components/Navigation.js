import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div >
            <nav class="navigation-container">
                <div>
                <NavLink activeClassName="active" to="/productspage">Domů</NavLink>
                </div>
                <div class="non-page-section">
                <NavLink className="nav-link" activeClassName="active" to="/favorites">❤️</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/cart">🛒</NavLink>
                <form>
                    <input type="text" id="searchName" placeholder="Co hledáte?" className="form-control" />
                </form>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
