import React from 'react';
import './Subscription.css';

const Subscription = () => {
  return (
    <div className="subscription">
      <div className="subscription-container">
        <h1>Choose Your Ride Pass</h1>
        <p className="subtitle">
          Save more with our flexible rental subscriptions.
        </p>

        <div className="plans">

          <div className="plan-card">
            <h2>Weekly Pass</h2>
            <h3>₹999</h3>
            <ul>
              <li>✔ Unlimited Bookings</li>
              <li>✔ Up to 150 km/day</li>
              <li>✔ 24/7 Customer Support</li>
              <li>✔ Free Helmet</li>
            </ul>
            <button>Choose Plan</button>
          </div>

          <div className="plan-card popular">
            <span className="badge">Most Popular</span>
            <h2>Monthly Pass</h2>
            <h3>₹2999</h3>
            <ul>
              <li>✔ Unlimited Bookings</li>
              <li>✔ Up to 200 km/day</li>
              <li>✔ Free Maintenance</li>
              <li>✔ Priority Support</li>
            </ul>
            <button>Choose Plan</button>
          </div>

          <div className="plan-card">
            <h2>Yearly Pass</h2>
            <h3>₹24999</h3>
            <ul>
              <li>✔ Unlimited Bookings</li>
              <li>✔ Unlimited KM</li>
              <li>✔ Free Roadside Assistance</li>
              <li>✔ Premium Customer Support</li>
            </ul>
            <button>Choose Plan</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Subscription; 