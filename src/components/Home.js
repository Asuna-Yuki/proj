import React from "react";
import DefaultCard from "./DefaultCard";
import VideoPlayer from "./VideoPlayer";

export const Home = () => {
  return (
    <div className='main'>
      <button className='btn btn-outline'>Dashboard</button>
      <button className='btn btn-danger'>Login Now</button>
      <button className='btn btn-danger'>Back to Website</button>
      <DefaultCard />
      <div className='box'>
        <section className='left'>
          <VideoPlayer />
        </section>
        <section className='right'>
          {" "}
          fhkjsdhk wjkfhjk sadhfjahsfljkdajfhj
        </section>
      </div>
    </div>
  );
};
