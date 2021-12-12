import React, {useState} from "react";
import styled from "styled-components";
import "./styles/styles.css";
import Logo from "./styles/images/solo logo.png";
import VideoList from "./components/VideoList";
import Search from "./components/Search";

// import VideoDetails from "./components/VideoDetails";
// import Video from './components/Video'
// import { useDispatch, useSelector } from "react-redux";
// import { fetchVideos, setVideo } from "./redux/actions/searchAction";

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
    width: 20rem
  }
`;

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <React.Fragment>
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
