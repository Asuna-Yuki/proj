import React from "react";

const FounderCard = (props) => {
  return (
    <div className='founder-card'>
      <div className='founder-card-img'>
        <img src={props.image} alt='founder-image' />
      </div>
      <h3>{props.name}</h3>
      <h4>CoFounder</h4>
      <div className='founder-card-social'>
        {props.twitter === "None" ? (
          <div className='btn-twitter'>
            <i className='fab fa-twitter' />
          </div>
        ) : (
          <div className='btn-twitter'>
            <a href={props.twitter}>
              <i className='fab fa-twitter'></i>
            </a>
          </div>
        )}
        {props.facebook === "None" ? (
          <div>
            <i className='fab fa-facebook' />
          </div>
        ) : (
          <div>
            <a href={props.facebook}>
              <i className='fab fa-facebook' />
            </a>
          </div>
        )}
        {props.linkedin === "None" ? (
          <div>
            <i className='fab fa-chrome' />
          </div>
        ) : (
          <div>
            <a href={props.linkedin}>
              <i className='fab fa-chrome' />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FounderCard;
