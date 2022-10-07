import React from "react";

export const VideoCard = () => {
  return (
    <div className='video-card'>
      <div className='youtube-player'>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/watch?v=KIAZWfSmNOU&list=RDKIAZWfSmNOU&start_radio=1'
          title='youtube'
        />
      </div>
      <div className='video-card-footer'>
        <section>
          <a href='#!'>
            <i className='fa-solid fa-location-dot' /> Mumbai
          </a>
        </section>
        <section>
          <a href='#!'>
            <i className='fa-brands fa-chrome' /> lorentx
          </a>
        </section>
        <section>
          <i className='fa-brands fa-instagram' />
          <i class='fa-brands fa-facebook' />
          <i class='fa-brands fa-youtube' />
        </section>
      </div>
    </div>
  );
};
