import React from 'react' 
import {useSelector, useDispatch} from 'react-redux'
import Fade from 'react-reveal/Fade'
import {removeFromCart} from '../../redux/actions/cartActions'

const CartItems = () => {

  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cartCR.cartItems)
  console.log(cartItems);

  return (
    <>
    <div>
      {
        cartItems.length === 0
        ?
        <div>
          <h1>No Tunings</h1>
        </div>
        :
        <div>
          <h1>Tunings</h1>
        </div>
      }
    </div>
    <Fade left cascade>
        <div className="row cart-items">
          {cartItems.map(item =>{
            console.log(item);
            return <div key={item.id} className="col-12 d-flex flex-column">
                <div className="d-flex">
                  <div>
                    <img src={item.image}  />
                  </div>
                  <div>{item.title}</div>
                </div>
                <div>
                    <button onClick={()=> dispatch(removeFromCart(item))} className="btn btn-warning">Remove</button>
                </div>
            </div>
          })}
        </div>
      </Fade>
    </>
  )
}

export default CartItems