
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const AddToCart=()=>{
  const cartSelector=useSelector((state)=>state.cart.items);
  console.log(cartSelector.length)
    return(<>
  <div className="cart-containers">
    <Link to="/cart">
     <span className="cart-icon">  <FaShoppingCart className="cart-icon" /></span>
    <span className="cart-count">{cartSelector.length ? cartSelector.length : 0}</span>
    </Link>
   
  </div>

    </>)
}
export default AddToCart