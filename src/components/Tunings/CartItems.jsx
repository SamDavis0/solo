import React from 'react' 
import {useSelector, useDispatch} from 'react-redux'
import Fade from 'react-reveal/Fade'
import {removeFromCart} from '../../redux/actions/cartActions'
import styled from "styled-components";

const RemoveButton = styled.button`
  background-color: #dadada95;
  border: none;
  width: 5rem;
`
const FavoritesTitle = styled.h1`
  color: white;
`

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
          <FavoritesTitle>No Tunings</FavoritesTitle>
        </div>
        :
        <div>
          <FavoritesTitle>Favorites</FavoritesTitle>
        </div>
      }
    </div>
    <Fade left cascade>
        <div className="row cart-items">
          {cartItems.map(item =>{
            console.log(item);
            return <div key={item.id} className="col-12 d-flex flex-column">
                <div className="d-flex">
                  <div >
                    <img src={item.image}  />
                  </div>
                  <div>{item.title}</div>
                </div>
                <div className='align-items-center'>
                    <RemoveButton onClick={()=> dispatch(removeFromCart(item))}>Remove</RemoveButton>
                </div>
            </div>
          })}
        </div>
      </Fade>
    </>
  )
}

export default CartItems