import React from "react";

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <div className="youtube-player">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          title="youtube"
        ></iframe>
      </div>
      <div className="video-player-footer">
        <div className="video-player-footer-first">
          <i class="fa-solid fa-location-dot" /> Mumbai
        </div>
        <div className="video-player-footer-second">
          <i class="fa-brands fa-chrome" /> lorentx
        </div>
        <div className="video-player-footer-third">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
