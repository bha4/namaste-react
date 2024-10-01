import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart =()=>{
    const cartItems =useSelector((store)=>store.cart.items)
    const dispatch = useDispatch();
    const clearTheCart =()=>{
        dispatch(clearCart())
    }
 return (
   <div className="text-center m-10">
     <h1 className=" font-bold text-2xl shadow-2xl mb-3">CART</h1>
     <button
       onClick={() => {
         clearTheCart();
       }}
       className="font-bold p-1 mb-3 text-lg hover:text-green-500 bg-black text-white rounded-lg"
     >
       Clear Cart
     </button>
     {cartItems.length===0 && (<h1>cart is Empty!! please add some Items!</h1>)}
     
       <ItemList list={cartItems} />
         
   </div>
 );   
}
export default Cart;