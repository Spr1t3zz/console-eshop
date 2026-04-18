import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div class="horiozntal-container">
            <h1>RetroVšem - konzole a příslušentsví</h1>
            <div>
            <NavLink className="nav-link" activeClassName="active" to="/">Sign Up</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/">Log In</NavLink>
            <img id="pfp" src="https://www.matheon.de/showImage.php?file=public_access/users/0_Pavel_Dvurechenskii.png" alt="Account" />
            </div>
        </div>
    );
}

export default Header;