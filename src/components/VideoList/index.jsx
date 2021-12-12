import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/actions/searchAction";
import styled from "styled-components";
import VideoItem from '../VideoItem'

const VideoListStyle = styled.iframe`
  width: 50rem;
  height: 30rem;
`;

export default function VideoList({ searchQuery }) {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.videoList);

  useEffect(() => {
    dispatch(fetchVideos(searchQuery));
  }, [dispatch, searchQuery]);

  // useEffect(() => {
  //   videos !== undefined && console.log(videos);
  // }, [videos]);

  return (
    <div>
      {videos.map((video) => <div><VideoListStyle src={'https://www.youtube.com/embed/'+video.id.videoId}></VideoListStyle></div>)}
    </div>
  );
}
