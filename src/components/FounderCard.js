import React from "react";

const FounderCard = (props) => {
  return (
    <div className="founder-card">
      <div className="founder-card-img">
        <img src={props.image} alt="founder-image" />
      </div>
      <h3>{props.name}</h3>
      <h4>CoFounder</h4>
      <div className="founder-card-social">
        {props.twitter === "None" ? (
          <>
            <i className="fab fa-twitter" />
          </>
        ) : (
          <a href={props.twitter}>
            <i className="fab fa-twitter"></i>
          </a>
        )}
        {props.facebook === "None" ? (
          <>
            <i className="fab fa-facebook" />
          </>
        ) : (
          <a href={props.facebook}>
            <i className="fab fa-facebook" />
          </a>
        )}
        {props.linkedin === "None" ? (
          <>
            <i className="fab fa-chrome" />
          </>
        ) : (
          <a href={props.linkedin}>
            <i className="fab fa-chrome" />
          </a>
        )}
      </div>
    </div>
  );
};

export default FounderCard;
