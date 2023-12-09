import { Link } from "react-router-dom";

const Navbar = () => {
return(
    <>
     <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
    </nav>
    </>
 

);
};
export default Navbar;