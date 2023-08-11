import React from "react";
import { useParams } from "react-router-dom";
import "./purchasing.css";

const Purchasing = () => {
  const { id, concert, price, date, time, location, number } = useParams();

  return (
    <div>
      <h1>Purchase {decodeURIComponent(concert)} Ticket</h1>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <div class="ticket">
          <div class="left">
            <div class="image">
              <p class="admit-one">
                <span>{decodeURIComponent(concert)}</span>
                <span>{decodeURIComponent(concert)}</span>
                <span>{decodeURIComponent(concert)}</span>
              </p>
              <div class="ticket-number"></div>
            </div>
            <div class="ticket-info">
              <p class="date">
                <span>Price:</span>
                <span></span>
                <span class="june-29">{decodeURIComponent(price)}</span>
              </p>
              <div class="show-name">
                <h2>{decodeURIComponent(concert)}</h2>
              </div>
              <div class="time">
                <p>{decodeURIComponent(time)}</p>
                <p>{decodeURIComponent(date)}</p>
              </div>
              <p class="location">
                <span>{decodeURIComponent(location)}</span>
              </p>
            </div>
          </div>
          <div class="right">
            <p class="admit-one">
              <span>{decodeURIComponent(concert)}</span>
              <span>{decodeURIComponent(concert)}</span>
              <span>{decodeURIComponent(concert)}</span>
            </p>
            <div class="right-info-container">
              <div class="show-name">
                <h1>Purchase {decodeURIComponent(concert)} tickets</h1>
              </div>
              <div class="time">
                <p>Send Money to this number</p>
                <p>{decodeURIComponent(number)}</p>
              </div>

              <div class="barcode"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchasing;
