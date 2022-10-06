function DefaultCard() {
  return (
    <>
      <div className="default-card">
        <div className="card-image-container">
          <img alt="logo" src="image/logo.png"></img>
        </div>
        <div className="desc-container">
          <h1>Letzrent</h1>
          <span>Address : Mumbai Maharashtra</span>
          <h3>
            ● EMAIL : | Website : https://letzrent.com | PAN/TAN : AAJCR3294F
          </h3>
          <p>
            Online search, compare & booking platform for self-drive cars,
            charter flights, living space & more that rewards users
          </p>
        </div>
        <div className="button-container">
          <button className="btn btn-follow">
            <i className="fas fa-user-plus" />
            Follow
          </button>
          <button className="btn btn-share">
            <i className="fas fa-share" /> Share
          </button>
        </div>
      </div>
      <div className="default-card-footer">
        <span className="badge badge-active">GEN Z FOUNDER</span>
        <span className="badge">MOBILITY</span>
        <span className="badge">E-COMMERCE</span>
      </div>
    </>
  );
}

export default DefaultCard;
