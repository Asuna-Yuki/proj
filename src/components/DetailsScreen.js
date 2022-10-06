import React from "react";
import FounderCard from "./FounderCard";

const DetailsScreen = () => {
  return (
    <div className='details-card'>
      <div className='details-card-header'>
        <strong>Meet our strong</strong> and visionary team members
      </div>
      <div className='founder'>
        <FounderCard
          name='Manish Pratik'
          image='https://api.pepcorns.com/clientassets/icon1651231237314.jpg'
          twitter='https://twitter.com/manishpratik'
          facebook='None'
          linkedin='https://www.linkedin.com/in/manishpratik/'
        />
        <FounderCard
          name='Gautam Menon'
          image='https://api.pepcorns.com/clientassets/icon1651243119561.jpg'
          twitter='None'
          facebook='None'
          linkedin='https://www.linkedin.com/in/gautam-menon-040379208/'
        />
      </div>

      <div className=' card details-card-third'>
        How will we use funds : Sales & Marketing - 50% | Human Resource-30% |
        Technology -10% | OPEX-10%
      </div>
      <div className='details-card-fourth'>
        <div className='card card-stats'>
          <section>
            <div>
              <h3>Start Date</h3>
              <h2>2022-06-26 16:38:05</h2>
            </div>
            <div className='btn-social'>
              <i className='fa-regular fa-hand-point-up fa-xl' />
            </div>
          </section>
          <span>
            <i className='fa fa-arrow-up' /> Ends in
          </span>
          <span> 0 days</span>
        </div>
        <div className='card card-stats'>
          <section>
            <div>
              <h3>Target Raise</h3>
              <h2>5000000</h2>
            </div>
            <div className='btn-social'>
              <i class='fa-solid fa-chart-pie' />
            </div>
          </section>

          <span>
            <i className='fa fa-arrow-up' /> 0%
          </span>
          <span> Raised So far</span>
        </div>
      </div>
      <div className='card details-card-fifth'>
        <div className='details-card-fifth-header'>
          <h3>Frequently Asked Question [Found 3]</h3>
        </div>
        <div className='details-card-fifth-body'>
          <div>
            <h4>What does your company do ?</h4>
            <p>
              LetzRent is an online search, compare & booking platform for
              self-drive car rental that rewards users for renting. We aggregate
              rental deals from multiple service providers and present them to
              users with prices, reviews & facts to make an informed decision.
              Currently running a pilot in Bangalore by aggregating Zoomcar,
              Avis, Mychoize & Wowcarz.
            </p>
          </div>
          <div>
            <h4>Where do you want to be in 5 years ?</h4>
            <p>Uber for Self Drive Car Rental</p>
          </div>
          <div>
            <h4>Why did you choose this idea, what's your biggest Obstacle?</h4>
            <p>
              Customers want low Prices: And to get low prices 85% of the
              consumers check at least 2 data points (Source: BCG Consumer
              Trends). In various sectors information-centred buying has been
              made more efficient by companies like MMT for Travel, Policy
              bazaar for Insurance, Myntra or Shopperstop for Lifestyle
              products. However, for rental products, there is no one & to fill
              this need and make the process efficient we launched Letzrent,
              hoping to have a first-mover advantage and dominate the market in
              t
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsScreen;
