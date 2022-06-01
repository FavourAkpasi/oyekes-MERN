import React from "react";
import "./Navbar3.css";

function Navbar3() {
  return (
    <div className="navbar3-container">
      <div className="navbar3-item">
        <img src="images/stylist.gif" alt="stylist" />
        <div className="navbar3-text">
          <h3>FIND A STYLIST</h3>
          <p>Need a Personal Stylist, No Problem</p>
        </div>
      </div>
      <div className="navbar3-item">
        <img src="images/locate us.gif" alt="stylist" />
        <div className="navbar3-text">
          <h3>LOCATE US</h3>
          <p>Find an Outlet Near you</p>
        </div>
      </div>
      <div className="navbar3-item">
        <img src="images/tracking.gif" alt="stylist" />
        <div className="navbar3-text">
          <h3>TRACK ORDER</h3>
          <p>Check Order Status & Location</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar3;
