const CampaignCard = () => {
  return (
    <div className='card campaign-card'>
      <section>
        <h1>₹0</h1>
        <h3>0 % of minimum goal raised</h3>
      </section>
      <hr />
      <section>
        <h2>0</h2>
        <h3>Total Investors</h3>
      </section>
      <hr />
      <section>
        <h2>0 Days</h2>
        <h3>Left to Invest</h3>
      </section>
      <hr />
      <section>
        <button className='btn btn-danger'>
          <i className='fa-solid fa-user' />
          {"   "}Campaign Expired
        </button>
        <p>₹ 1000 Minimum Investment</p>
      </section>
    </div>
  );
};

export default CampaignCard;
