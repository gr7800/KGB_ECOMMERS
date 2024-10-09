import EmptyCart from '../component/EmptyCart'
import CartWithProducts from '../component/CartWithProducts'

const Cart = () => {
  return (
    <div className=" bg-light-pink-1 py-16 px-10 w-screen h-screen max-sm:px-4 max-py-4">
      {/* {cartList.length === 0 ? (
        <EmptyCart label="Cart" />
        ) : (
          <CartWithProducts />
          )} */}

          <CartWithProducts />
    </div>
  )
}

export default Cart