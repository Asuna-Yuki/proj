export const DealCard = (props) => {
  return (
    <div className="card deal-card">
      <div className="deal-card-body">
        <h1>₹ {props.value.price}</h1>
        <h3>Invest</h3>
        <div className="deal-card-details">
          <ul>
            {props.value.text.map((x) => {
              return <li>{x}</li>;
            })}
          </ul>
          <span>TNC : {props.value.tnc}</span>
        </div>
        <button className="btn btn-muted">Invest</button>
      </div>
    </div>
  );
};
