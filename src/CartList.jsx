import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearItem, removeItem } from "./Redux/slice"
import { useNavigate } from "react-router-dom"
const CartList = () => {
  const cartSelector = useSelector((state) => state.cart.items ?? [])
  const [cartItems, setCartItems] = useState(cartSelector)
  const dispatch = useDispatch()
  const navigate=useNavigate()
  useEffect(() => (
    setCartItems(cartSelector ?? [])
  ), [cartSelector])
const handleSubmite=()=>{
  localStorage.clear();
  dispatch(clearItem());
  navigate('/');
  alert("Order Placed..")

}
  const manageQuantity = (id, q) => {
  const parsedQuantity = parseInt(q, 10)
  const Quantity = Number.isInteger(parsedQuantity) && parsedQuantity > 0 ? parsedQuantity : 1
  const cartTempItems = cartSelector.map((items) =>
    items.id === id ? { ...items, Quantity } : items
  )
  setCartItems(cartTempItems)
}
  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
            <h2>Your cart Items</h2>
            <span>{cartItems.length} items</span>
             </div>
        {cartItems.length > 0
          ? cartItems.map((item) => {
              const itemQuantity = item.Quantity ?? 1
              return (
                <div className="cart-item" key={item.id}>
                  <div className="item-info">
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="item-details">
                      <h4>{item.title}</h4>
                      <p>{item.brand}</p>
                    </div>
                  </div>
                  <div className="item-actions">
                    <div style={{ display: "flex" }}>
                      <input
                        type="number"
                        min="1"
                        placeholder="enter Qty"
                        style={{ margin: "15px" }}
                        value={itemQuantity}
                        onChange={(e) => manageQuantity(item.id, e.target.value)}
                      />
                      <div>
                        <span className="price">
                          ${(item.price * itemQuantity).toFixed(2)}
                        </span>
                        <button
                          className="cart-btn"
                          onClick={() => dispatch(removeItem(item))}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          : null
          }
        <div className="cart-footer">
          Total:$ {cartItems
            .reduce((sum, item) => sum + item.price * (item.Quantity ?? 1), 0)
            .toFixed(2)}
        </div>
        <div className="placeOrder-btn" onClick={handleSubmite}>Place Order</div>
      </div>
     
    </>
  )
}

export default CartList
