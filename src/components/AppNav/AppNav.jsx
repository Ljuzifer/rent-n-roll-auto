import { NavLink } from "react-router-dom";
import { Navigation } from "./AppNav.styled";

export default function AppNav() {
    return (
        <Navigation>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/catalog">Catalog</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
        </Navigation>
    );
}
