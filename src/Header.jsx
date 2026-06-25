import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";
import './App.css';
const Header=()=>{
    return(<>
    <header className="header">
  <div className="logo">
    ShopMart
  </div>

  <nav className="nav-links">
    <Link to="/">Home</Link>
    <a href="#">Products</a>
    <a href="#">Categories</a>
    <a href="#">Contact</a>
  </nav>
<AddToCart/>
</header>

    </>)
}
export default Header;