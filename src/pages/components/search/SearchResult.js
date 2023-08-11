import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ results }) => {
  return (
    <div>
      <ul>
        {results.map((ticket, index) => (
          <div>
            <h1>Searched Results</h1>
            <div>
              <Link
                to={`/purchase/${index}/${encodeURIComponent(
                  ticket.concert
                )}/${encodeURIComponent(ticket.price)}/${encodeURIComponent(
                  ticket.date
                )}/${encodeURIComponent(ticket.time)}/${encodeURIComponent(
                  ticket.location
                )}/${encodeURIComponent(ticket.number)}`}
                className="link1"
              >
                <div className="card" key={index}>
                  <div className="cardcontent">
                    <strong>{ticket.concert}</strong>
                    <br />
                    <strong>{ticket.price}</strong>
                    <br />
                    <strong>{ticket.date}</strong>
                    <br />
                    <strong className="undefined">{ticket.time}</strong>
                    <br />
                    <strong className="undefined">{ticket.location}</strong>
                    <br />
                    <strong className="undefined">{ticket.number}</strong>
                    <br />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
