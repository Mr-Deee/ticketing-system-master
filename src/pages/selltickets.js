import React from "react";
import "./selltickets.css";
import { Link } from "react-router-dom";
import Nav from "./ticketnavbar/nav";

const Selltickets = () => {
  return (
    <div>
      <Nav />
      <h1>Sell Your tickets</h1>
      <div className="tickets">
        <div className="ticket-box">
          <h1>Other E-tickets</h1>
          <p>
            Upload tickets, set a price and get paid. Our transparent pricing
            means more money in your pocket.
          </p>
          <Link to="/ticket">
            <button>Add E-tickets</button>
          </Link>
          <Link to="/sellerstickets" className="viewtickets">
            View Your Tickets
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Selltickets;
