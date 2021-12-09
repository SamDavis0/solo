import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import VideoItem from "./VideoItem";

export default function VideoList() {
  const videos = useSelector((state) => state.videoList);
  
  React.useEffect(() => {
    console.log(videos);
  }, [videos])
  
  return (
    <div>
      {videos
        ? videos.map((video) => <div key={video.data.id.videoId}>{video.data.name}</div>)
        : null}
    </div>
  );
}
