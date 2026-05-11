import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <p>© 2026 RetroVšem. Všechna práva vyhrazena.</p>
            <NavLink className="footer-link" to="/Something-went-wrong">Podmínky použití</NavLink>
            <NavLink className="footer-link" to="/Something-went-wrong">Ochrana osobních údajů</NavLink>
        </footer>
    );
}

export default Footer;