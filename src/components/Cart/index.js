import Header from '../Header'
import CartListView from '../CartListView'
import EmptyCartView from '../EmptyCartView'

import CartContext from '../../context/CartContext'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      return (
        <>
          <Header />
          {cartList.length !== 0 ? (
            <div className="cart-container">
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <CartListView />
              </div>
            </div>
          ) : (
            <EmptyCartView />
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
