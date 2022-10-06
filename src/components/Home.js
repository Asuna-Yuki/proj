import React, { useEffect, useState } from "react";
import CampaignCard from "./CampaignCard";
import { DealCard } from "./DealCard";
import DefaultCard from "./DefaultCard";
import VideoPlayer from "./VideoPlayer";
import PitchScreen from "./PitchScreen";
import DetailsScreen from "./DetailsScreen";
import CommentsScreen from "./CommentsScreen";
import deals from "./dealsData";

export const Home = () => {
  const [screen, setScreen] = useState(1);
  const [curr, setcurr] = useState(1);
  // const removeAll = () => {
  //   // document.getElementsByClassName("btn-1").classList.remove("selected");
  //   const node = ReactDOM.findDOMNode().getElementsByClassName("btn-1");
  //   console.log(node);
  // };
  const screenUpdater = (e) => {
    e.target.classList.add("selected");
    switch (e.target.name) {
      case "pitch":
        setcurr(1);
        setScreen(1);
        break;
      case "details":
        setcurr(2);
        setScreen(2);
        break;
      case "updates":
        setcurr(3);
        setScreen(3);
        break;
      case "comments":
        setcurr(4);
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
        return <></>;
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
            {curr === 1 ? (
              <button
                className="btn selected"
                name="pitch"
                onClick={screenUpdater}
              >
                {" "}
                Pitch
              </button>
            ) : (
              <button className="btn" name="pitch" onClick={screenUpdater}>
                Pitch
              </button>
            )}
            {curr === 2 ? (
              <button
                className="btn selected"
                name="details"
                onClick={screenUpdater}
              >
                Details
              </button>
            ) : (
              <button className="btn" name="details" onClick={screenUpdater}>
                Details
              </button>
            )}
            {curr === 3 ? (
              <button
                className="btn selected"
                name="updates"
                onClick={screenUpdater}
              >
                Updates
              </button>
            ) : (
              <button className="btn" name="updates" onClick={screenUpdater}>
                Updates
              </button>
            )}
            {curr === 4 ? (
              <button
                className="btn btn-4"
                name="comments"
                onClick={screenUpdater}
              >
                Comments
              </button>
            ) : (
              <button
                className="btn btn-4"
                name="comments"
                onClick={screenUpdater}
              >
                Comments
              </button>
            )}
          </div>
          {renderSwitch()}
        </section>
        <section className="right">
          <CampaignCard />
          {deals.map((x) => (
            <DealCard value={x} />
          ))}
        </section>
      </div>
    </div>
  );
};
