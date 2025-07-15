import React from 'react';
import './joincommunity.css';
import img from "../../Assests/Joinpic.png"
export default function JoinCommunity () {
  return (
    <div id="contactus" className="community-wrapper">
      <h2 className="community-title">Join our community</h2>

      <div className="community-box">
        <div className="community-image">
          <img
            src={img}
            alt="Join Community"
          />
        </div>

        <div className="community-content">
          <p>
            Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus facilisi ultrices sed faucibus proin cum ut.
            Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus facilisi ultrices sed faucibus proin cum ut.
          </p>

          <div className="community-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="community-input"
            />
            <button className="community-button">Send Email</button>
          </div>
        </div>
      </div>
    </div>
  );
};


