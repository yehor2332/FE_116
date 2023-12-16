import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import '../../assets/scss/style.scss'

const baseURL = "https://app.ticketmaster.com";
const allEvents = "/discovery/v2/events";
const apiKey = "2T27tMWdUxVkDgVWQo7PcVHhuYZ6qYeV";
const locale = "*";
const countryCode = "DE";

function EventsList () {
  const [events, setEvents] = useState(null);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  function searchEvent (e) {
    e.preventDefault();
    axios.get(baseURL + allEvents, {
      params: {
        apikey : apiKey,
        locale : locale,
        countryCode : countryCode,
        keyword: search
      }})
        .then(response => {
          if (response.data._embedded) {
            setEvents(response.data._embedded.events);
            setError('');
          } else {
            setError('Data not found');
          }
        })
        .catch(error => {
          console.log(error)
        })

  }

  function getEvents () {
    axios.get(baseURL + allEvents, {
      params: {
        apikey : apiKey,
        locale : locale,
        countryCode : countryCode,
      }})
        .then(response => {
          setEvents(response.data._embedded.events);
        })
        .catch(error => {
          setError(error.response.message);
        })
  }

  useEffect(() => {
    document.title = 'Events';
  },[]);
  useEffect(() => {
    getEvents();
  }, []);


  if (error)  {
    return <div className="error">
      <h2>{error}</h2>
      <form
          onSubmit={searchEvent}
          className="search" >
        <div className="form-items"
        >
          <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </div>
      </form>
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
    return (
        <>
          <form
              onSubmit={searchEvent}
              className="search" >
            <div className="form-items"
            >
              <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">Search</button>
            </div>
          </form>
          <div className="events">
            {items}
          </div>;
        </>
    )
  }
}
export default EventsList;