import React from "react";

const VideoPlayer = () => {
  return (
    <div className='video-player'>
      <div className='youtube-player'>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/watch?v=MV_3Dpw-BRY&list=RDMV_3Dpw-BRY&start_radio=1'
          title='youtube'
        />
      </div>
      <div className='video-player-footer'>
        <div className='video-player-footer-first'>
          <i className='fa-solid fa-location-dot' /> Mumbai
        </div>
        <div className='video-player-footer-second'>
          <i className='fa-brands fa-chrome' /> lorentx
        </div>
        <div className='video-player-footer-third'>
          <i className='fa-brands fa-instagram'></i>
          <i className='fa-brands fa-instagram'></i>
          <i className='fa-brands fa-instagram'></i>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
