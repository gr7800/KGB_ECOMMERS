import EmptyCart from '../component/EmptyCart'
import CartWithProducts from '../component/CartWithProducts'
import { useSelector } from 'react-redux'

const Cart = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <div className=" bg-light-pink-1 py-10 px-10 w-screen h-full" >
      {items.length === 0 ? (
        <EmptyCart label="Cart" />
      ) : (
        <CartWithProducts items={items} />
      )}
    </div>
  )
}

export default Cart