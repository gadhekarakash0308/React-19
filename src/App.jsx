import Header from "./Header"
import Product from "./Product"
import CartList from "./CartList"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import { clearItem } from "./Redux/slice"
function App() {
//  const dispatch=useDispatch()

  return (
    <>
     <BrowserRouter>
       <Header />
       <br />
       <Routes>
         <Route path="/" element={<Product />} />
         <Route path="/cart" element={<CartList />} />
       </Routes>
     </BrowserRouter>
     {/* <button onClick={()=>dispatch(clearItem())} className="clear-btn">Clear Cart</button> */}
    </>
  )
}

export default App
