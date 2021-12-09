import React from "react";
import { useSelector } from "react-redux";

const VideoDetail = ({ video }) => {
  const selectedVideo = useSelector((state) => state.selectedVideo);
  //   if (!video) return <div>Loading...</div>;

  //   React.useEffect(() => {
  //     console.log(video);
  //   }, [video]);

  // const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      {video ? <div>video data</div> : <div>Loading...</div>}
      <div>{/* <iframe title="video player" src={videoSrc} /> */}</div>
      <div className="ui segment">
        {/* <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p> */}
      </div>
    </div>
  );
};

export default VideoDetail;
