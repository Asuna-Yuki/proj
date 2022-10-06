import React, { useState } from "react";
import CampaignCard from "./CampaignCard";
import { DealCard } from "./DealCard";
import DefaultCard from "./DefaultCard";
import VideoPlayer from "./VideoPlayer";
import PitchScreen from "./PitchScreen";
import DetailsScreen from "./DetailsScreen";
import CommentsScreen from "./CommentsScreen";

export const Home = () => {
  const [screen, setScreen] = useState(1);
  const screenUpdater = (e) => {
    console.log(e);
    switch (e.target.name) {
      case "pitch":
        setScreen(1);
        break;
      case "details":
        setScreen(2);
        break;
      case "updates":
        setScreen(3);
        break;
      case "comments":
        setScreen(4);
        break;
      default:
        break;
    }
  };
  const renderSwitch = () => {
    switch (screen) {
      case 1:
        return <PitchScreen />;
      case 2:
        return <DetailsScreen />;
      case 3:
        return <></>;
      case 4:
        return <CommentsScreen />;
      default:
        return <PitchScreen />;
    }
  };
  return (
    <div className="main">
      <button className="btn btn-outline">Dashboard</button>
      <button className="btn btn-danger">Login Now</button>
      <button className="btn btn-danger">Back to Website</button>
      <DefaultCard />
      <div className="box">
        <section className="left">
          <a href="#">Unable to view video ? Click here</a>
          <VideoPlayer />
          <br />
          <div className="button-selector">
            <button
              className="btn selected"
              name="pitch"
              onClick={screenUpdater}
            >
              Pitch
            </button>
            <button className="btn" name="details" onClick={screenUpdater}>
              Details
            </button>
            <button className="btn" name="updates" onClick={screenUpdater}>
              Updates
            </button>
            <button className="btn" name="comments" onClick={screenUpdater}>
              Comments
            </button>
          </div>

          {renderSwitch()}
        </section>
        <section className="right">
          <CampaignCard />
          <DealCard />
        </section>
      </div>
    </div>
  );
};
