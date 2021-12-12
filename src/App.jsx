import React, {useState} from "react";
import styled from "styled-components";
import "./styles/styles.css";
import Logo from "./styles/images/solo logo.png";
import VideoList from "./components/VideoList";
import Search from "./components/Search";

import {removeFromCart} from './redux/actions/cartActions'
import {useDispatch, useSelector} from 'react-redux'

const RemoveButton = styled.button`
  background-color: #dadada95;
  border: none;
  width: 5rem;
`
const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10;

  .logo {
    margin-top: -28%;
    width: 20rem
  }
`;

const CartItems = styled.div`
  align-items:flex-end;
  display: inline-block;
`

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cartCR.cartItems)

  return (
    <React.Fragment>
          {cartItems.map(item =>{
            console.log(item);
            return <CartItems key={item.id} className="col-12 d-flex flex-column cart-items">
                <div className="d-flex">
                  <div>
                    <img src={item.image}  />
                  </div>
                  <div>{item.title}</div>
                </div>
                <div>
                    <RemoveButton onClick={()=> dispatch(removeFromCart(item))}>Remove</RemoveButton>
                </div>
            </CartItems>
          })}
      <AppWrapper>
        <img to='/' className="logo" src={Logo} alt="" />
        <Search setSearchQuery={setSearchQuery} />
        <div>
          <div>
            {/* <VideoDetails video={selectedVideo} /> */}
          </div>
          <div>
            <VideoList
              // onVideoSelect={onVideoSelect}
              searchQuery={searchQuery}
            />
          </div>
        </div>
      </AppWrapper>
    </React.Fragment>
  );
}
