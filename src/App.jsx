import React from "react";
// import Video from './components/Video'
import styled from "styled-components";
import "./styles/styles.css";
import Logo from "./styles/images/solo logo.png";
import VideoList from "./components/VideoList";
import Search from "./components/Search";

const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .logo {
    margin-top: -28%;
  }
`;

export default function App() {
  return (
    <React.Fragment>
      <AppWrapper>
        <img className="logo" src={Logo} alt="" />
        <Search />
        <VideoList />
      </AppWrapper>
    </React.Fragment>
  );
}
