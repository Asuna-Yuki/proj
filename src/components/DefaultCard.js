import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function DefaultCard() {
  return (
    <div className='default-card'>
      <div className='image-container'>
        <img alt='logo' src='image/logo.png'></img>
      </div>
      <div className='desc-container'>
        <h1>Letzrent</h1>
        <span>Address : Mumbai Maharashtra</span>
        <h3>
          ● EMAIL : | Website : https://letzrent.com | PAN/TAN : AAJCR3294F
        </h3>
        <p>
          Online search, compare & booking platform for self-drive cars, charter
          flights, living space & more that rewards users
        </p>
      </div>
      <div className='button-container'>
        <Button>Follow</Button>
        <Button>Share</Button>
      </div>
    </div>
  );
}

export default DefaultCard;
