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
          <a href='#'>
            <i className='fa-solid fa-location-dot' /> Mumbai
          </a>
        </div>
        <div className='video-player-footer-second'>
          <a href=''>
            <i className='fa-brands fa-chrome' /> lorentx
          </a>
        </div>
        <div className='video-player-footer-third'>
          <i className='fa-brands fa-instagram'></i>
          <i class='fa-brands fa-facebook'></i>
          <i class='fa-brands fa-youtube'></i>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
