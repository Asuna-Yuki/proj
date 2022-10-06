export const DealCard = () => {
  return (
    <div className='card deal-card'>
      <div className='deal-card-body'>
        <h1>₹ 2000</h1>
        <h3>Invest</h3>
        <div className='deal-card-details'>
          <ul>
            <li>LetzRent Premium Apparel (T-shirts & Coffee Mug) </li>
            <li>Early access to new features & promotions</li>
          </ul>
          <span>TNC : Limited to the first 100</span>
        </div>
        <button className='btn btn-muted'>Invest</button>
      </div>
    </div>
  );
};
