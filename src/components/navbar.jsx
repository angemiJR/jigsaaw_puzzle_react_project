import {Link} from 'react-router-dom';
import Logo from "../assets/logo.png";
import "../components/main.css";


function Navbar(){
return (
    <nav>
    <img src={Logo} alt="Logo picture" />
    <div>
      <ul>
        <li> <Link to="/">Home</Link></li>
        <li><Link to="/about">Color Picker</Link></li>
        <li> <Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>


);


}

export default Navbar;