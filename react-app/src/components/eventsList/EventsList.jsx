import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import '../../assets/scss/style.scss'

const baseURL = "https://app.ticketmaster.com";
const allEvents = "/discovery/v2/events";
const apiKey = "2T27tMWdUxVkDgVWQo7PcVHhuYZ6qYeV";
const locale = "*";
const sort = "date,asc";
const countryCode = "DE";

function EventsList () {
  const [events, setEvents] = useState(null);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [total_pages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  function setEventsPage(e, value) {
      setPage(value)
      getEvents (search, page)
      searchEvent (e, search, page)
  }

  function searchEvent (e) {
    e.preventDefault();
    axios.get(baseURL + allEvents, {
      params: {
        apikey : apiKey,
        keyword: search,
        locale : locale,
        sort : sort,
        page : page,
        countryCode : countryCode
      }})
        .then(response => {
          if (response.data._embedded) {
            setEvents(response.data._embedded.events);
            setError('');
              let totalPages = response.data.page.totalPages;
              if (totalPages && totalPages <= 500) {
                  setTotalPages(totalPages);
              } else {
                  setTotalPages(500);
              }
            console.log(response);
          } else {
            setError('Data not found ЧІНА!');
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
        sort : sort,
        page : page,
        countryCode : countryCode,
      }})
        .then(response => {
          setEvents(response.data._embedded.events);
          let totalPages = response.data.page.totalPages;
          if (totalPages && totalPages <= 500) {
            setTotalPages(totalPages);
          } else {
            setTotalPages(500);
          }
        })
        .catch(error => {
          setError(error.message);
        })
  }

  useEffect(() => {
    document.title = 'Events';
  },[]);
  useEffect(() => {
      getEvents (search, page);
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
            <h2>Супер крутий івент {event.name}</h2>
            <h3>{event.dates.timezone}</h3>
            <p>{event.dates.start.localTime}</p>
            <p>{event.dates.start.localDate}</p>
            <img src={event.images[4].url} alt={event.images[0].url}/>
          </Link>
          <button>Купити</button>
        </div>
    );
    return (
        <>
          <form
              onSubmit={searchEvent}
              className="search" >
            <div className="form-items">
              <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">Search</button>
            </div>
          </form>
          <div className="pagination">
            <Stack spacing={2}>
              <Pagination
                  count={total_pages}
                  color="secondary"
                  onChange={setEventsPage}
              />
            </Stack>
          </div>
          <div className="events">
            {items}
          </div>;
        </>
    )
  }
}
export default EventsList;