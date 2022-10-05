import React from "react";

const VideoPlayer = () => {
  return (
    <div className="social">
      <div className="youtube-player">
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          title="youtube"
        ></iframe>
      </div>
      <div className="social-footer">
        <div className="social-footer-first">
          <i class="fa-solid fa-location-dot" /> Mumbai
        </div>
        <div className="social-footer-second">
          <i class="fa-brands fa-chrome" /> lorentx
        </div>
        <div className="social-footer-third">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
