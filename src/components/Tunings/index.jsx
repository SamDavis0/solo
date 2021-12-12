import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadProducts} from '../../redux/actions/productActions'
import {addToCart} from '../../redux/actions/cartActions'
import Fade from 'react-reveal/Fade'
import CartItems from './CartItems'

const Tunings = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.productsCR.products)


  useEffect(() => {
    dispatch(loadProducts())

  }, [])

  return (
    <>
      <div className="container">
        <div className="row">

          <div className="col-8">
          <Fade bottom cascade>
            <div className="row">
              {products.map(product => {
                return (
                <div key={product.id} className="col-4 mb-5 product">
                    <img src={product.image} alt="" className='w-20' />
                  <div className="d-flex justify-content-around">
                    <button onClick={()=> dispatch(addToCart(product))} className="btn btn-warning">Favorite</button>
                  </div>
                </div>
                )
              })}
            </div>
          </Fade>
          </div>
          <div className="col-4">
            <CartItems></CartItems>
          </div>

        </div>
      </div>
    </>
  )
}

export default Tunings
