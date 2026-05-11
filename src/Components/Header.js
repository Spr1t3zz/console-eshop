import { NavLink } from "react-router-dom";

function Header() {
    const activeClass = ({ isActive }) => isActive ? "nav-link active" : "nav-link";

    return (
        <div className="horiozntal-container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img id="logo" src="https://www.iconshock.com/image/SUPERVISTA/computer_gadgets/gaming_console/" alt="logo" />
                <h1>RetroVšem - konzole a příslušenství</h1>
            </div>
            <div>
                <NavLink className={activeClass} to="/Something-went-wrong">Sign Up</NavLink>
                <NavLink className={activeClass} to="/Something-went-wrong">Log In</NavLink>
                <img id="pfp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Od7GMBiPjGt5snzjUUAWRoxa0Ce_IcQg0A&s" alt="Account" />
            </div>
        </div>
    );
}

export default Header;