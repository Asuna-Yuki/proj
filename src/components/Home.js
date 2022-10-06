import React from "react";
import CampaignCard from "./CampaignCard";
import { DealCard } from "./DealCard";
import DefaultCard from "./DefaultCard";
import VideoPlayer from "./VideoPlayer";
import PitchScreen from "./PitchScreen";
import DetailsScreen from "./DetailsScreen";

export const Home = () => {
  return (
    <div className='main'>
      <button className='btn btn-outline'>Dashboard</button>
      <button className='btn btn-danger'>Login Now</button>
      <button className='btn btn-danger'>Back to Website</button>
      <DefaultCard />
      <div className='box'>
        <section className='left'>
          <a href='#'>Unable to view video ? Click here</a>
          <VideoPlayer />
          <br />
          <div className='button-selector'>
            <button className='btn selected'>Pitch</button>
            <button className='btn'>Details</button>
            <button className='btn'>Updates</button>
            <button className='btn'>Comments</button>
          </div>

          {/* <PitchScreen /> */}
          <DetailsScreen />
        </section>
        <section className='right'>
          <CampaignCard />
          <DealCard />
        </section>
      </div>
    </div>
  );
};
