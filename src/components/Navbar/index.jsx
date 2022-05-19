
import { Link } from "react-router-dom";
import './navbar.css';


const Navbar = () => {


    return(

       <div className="container">
       <nav className="nav">

        <Link to="/" className="container">Home</Link>
        <Link to="/about" className="container">About</Link>
        <Link to="/work" className="container">Work</Link>

        <button className="button">MODE</button>

        </nav>
        </div>

        

    )
};

    export default Navbar;


    