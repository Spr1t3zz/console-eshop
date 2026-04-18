import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <p>© 2026 Konzole. Všechna práva vyhrazena.</p>
            <NavLink to="/">Podmínky použití</NavLink>
            <NavLink to="/">Ochrana osobních údajů</NavLink>
        </footer>
    );
}

export default Footer;