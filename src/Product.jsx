import { useDispatch, useSelector } from "react-redux";
import { addItem,removeItem } from "./Redux/slice";
import { useEffect } from "react";
import { fetchProduct } from "./Redux/productSlice";


export function Product() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    const productSelector = useSelector((state) => state.products.item);
    console.log(productSelector);
     const cartSelector=useSelector((state)=>state.cart.items);

    return (
        <>
            <div className="grid">
                {productSelector?.length > 0
                    ? productSelector.map((item) => (
                          <div key={item.id} className="card"><img src={item.thumbnail} alt={item.title} />
                          <div className="content">
                              <div className="title">{item.title}</div>  
                              <div className="brand">{item.brand}</div>  
                              <div className="price">{item.price}</div>  
                              <div className="rating">{item.rating}</div>
                              {
                                cartSelector.find((AddItems)=>AddItems.id===item.id)?
                                <button className="remove-btn"onClick={()=>dispatch(removeItem(item))}>Remove From cart</button>:
                                <button className="cart-btn" onClick={()=>dispatch(addItem(item))}>Add to cart</button>
                              }
                              
                          </div>
                          </div>
                      ))
                    : null}
            </div>
        </>
    );
}
export default Product
