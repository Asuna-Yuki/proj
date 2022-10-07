import React, { useState } from "react";
import { CampaignCard } from "./CampaignCard";
import { DealCard } from "./DealCard";
import { HeadCard } from "./HeadCard";
import { VideoCard } from "./VideoCard";
import { PitchScreen } from "./PitchScreen";
import { DetailsScreen } from "./DetailsScreen";
import { UpdateScreen } from "./UpdateScreen";
import { CommentsScreen } from "./CommentsScreen";
import deals from "./dealsData";

export const Home = () => {
  const [screen, setScreen] = useState(1);

  const onClick = (e) => {
    if (e.target.name == "details") {
      let btn_1 = document.getElementById("btn-1");
      let btn_3 = document.getElementById("btn-3");
      let btn_4 = document.getElementById("btn-4");
      btn_1.classList.remove("selected");
      btn_3.classList.remove("selected");
      btn_4.classList.remove("selected");
      e.target.classList.add("selected");
      setScreen(2);
    } else if (e.target.name == "pitch") {
      let btn_2 = document.getElementById("btn-2");
      let btn_3 = document.getElementById("btn-3");
      let btn_4 = document.getElementById("btn-4");
      btn_2.classList.remove("selected");
      btn_3.classList.remove("selected");
      btn_4.classList.remove("selected");
      e.target.classList.add("selected");
      setScreen(1);
    } else if (e.target.name == "updates") {
      let btn_1 = document.getElementById("btn-1");
      let btn_2 = document.getElementById("btn-2");
      let btn_4 = document.getElementById("btn-4");
      btn_1.classList.remove("selected");
      btn_2.classList.remove("selected");
      btn_4.classList.remove("selected");
      e.target.classList.add("selected");
      setScreen(3);
    } else if (e.target.name == "comments") {
      let btn_1 = document.getElementById("btn-1");
      let btn_2 = document.getElementById("btn-2");
      let btn_3 = document.getElementById("btn-3");
      btn_1.classList.remove("selected");
      btn_2.classList.remove("selected");
      btn_3.classList.remove("selected");
      e.target.classList.add("selected");
      setScreen(4);
    }
  };

  const switchScreen = () => {
    switch (screen) {
      case 1:
        return <PitchScreen />;
      case 2:
        return <DetailsScreen />;
      case 3:
        return <UpdateScreen />;
      case 4:
        return <CommentsScreen />;
      default:
        return <PitchScreen />;
    }
  };

  return (
    <div className='main'>
      <button className='btn btn-outline'>Dashboard</button>
      <button className='btn btn-danger'>Login Now</button>
      <button className='btn btn-danger'>Back to Website</button>
      <HeadCard />
      <div className='container'>
        <section className='container-main'>
          <a href='#'>Unable to view video ? Click here</a>
          <VideoCard />
          <br />
          <div className='button-selector'>
            <button
              id='btn-1'
              className='btn selected'
              name='pitch'
              onClick={(e) => onClick(e)}
            >
              {" "}
              Pitch
            </button>
            <button
              id='btn-2'
              className='btn'
              name='details'
              onClick={(e) => onClick(e)}
            >
              Details
            </button>
            <button
              id='btn-3'
              className='btn'
              name='updates'
              onClick={(e) => onClick(e)}
            >
              Updates
            </button>
            <button
              id='btn-4'
              className='btn'
              name='comments'
              onClick={(e) => onClick(e)}
            >
              Comments
            </button>
          </div>
          {switchScreen()}
        </section>
        <section className='container-sub'>
          <CampaignCard />
          <h1>Deal Terms</h1>
          <p>Perks you will receive for Investing Letzrent</p>
          {deals.map((x) => (
            <DealCard value={x} />
          ))}
        </section>
      </div>
    </div>
  );
};
