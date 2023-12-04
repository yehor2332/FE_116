import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import '../../assets/scss/style.scss'
const baseURL = "https://app.ticketmaster.com";
const allEvents = "/discovery/v2/events";
const apiKey = "2T27tMWdUxVkDgVWQo7PcVHhuYZ6qYeV";
//const imgBaseURL = "https://app.ticketmaster.com/discovery/v2/events/{id}/images";
const locale = "*";
const countryCode = "DE";

function EventsList () {
  const [events, setEvents] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get(baseURL + allEvents, {
      params: {
        apikey : apiKey,
        locale : locale,
        countryCode : countryCode,
      }})
        .then(response => {
            setEvents(response.data._embedded.events);
            console.log(response.data._embedded.events);
        })
        .catch(error => {
          setError(error.response.message);
          console.log(error);
        })
  }, []);
  if (error)  {
    return <div className="error">
      <h2>{error}</h2>
    </div>;
  } else if (events) {
    const items = events.map((event, index) =>
        <div key={index} className="event">
          <Link to={"/events/" + event.id} className="link">
          <h2>{event.name}</h2>
          <h3>{event.dates.timezone}</h3>
          <p>{event.dates.start.localTime}</p>
          <p>{event.dates.start.localDate}</p>
          <img src={event.images[0].url} alt={event.images[0].url} />
          </Link>
        </div>
    );
    return <div className="events">
      {items}
    </div>;
  }
} 
export default EventsList;

