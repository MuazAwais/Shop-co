import CartView from "../views/cart"


const Cart = () => {
  return (
    <div className="pt-[150px] container mx-auto">
        <h2 className="font-inter font-black text-[32px] md:text-[40px] uppercase">Your cart</h2>
        <div>
          <CartView />
        </div>
    </div>
  )
}

export default Cart