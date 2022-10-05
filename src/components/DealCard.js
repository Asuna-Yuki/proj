import Button from "react-bootstrap/Button";

export const DealCard = () => {
  return (
    <div className="deal-card">
      <div className="deal-card-body">
        <h1>₹ 2000</h1>
        <h3>Invest</h3>
        <div className="deal-card-details">
          <ul>
            <li>element 1</li>
            <li>element 2</li>
          </ul>
        </div>
        <Button variant="primary">Invest</Button>
      </div>
    </div>
  );
};
