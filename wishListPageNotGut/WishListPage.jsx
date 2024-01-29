import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://app.ticketmaster.com";
const allEvents = "/discovery/v2/events";
const apiKey = "2T27tMWdUxVkDgVWQo7PcVHhuYZ6qYeV";
const locale = "*";
const sort = "date,asc";
const countryCode = "DE";

function WishListPage () {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);

    function fetchData(id) {
        axios.get(baseURL + allEvents, {
            params: {
                apikey : apiKey,
                id : id,
                locale : locale,
                sort : sort,
                countryCode : countryCode
            }})
            .then(response => {
                setEvents(events => [...events, response.data._embedded.events]);
                console.log(response.data);
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
            })
    }

    useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (!key.indexOf('event-')) {
                fetchData(localStorage.getItem(key));
            }
        }
    }, []);
    if (error) {
        return (<div className="error"><h2>{error}</h2></div> )
    } else if (events) {
        const items = events.map((event, index) => {
            return (
                <div key={index} className="event">
                        <h2>x{event.name}</h2>
                        <h3>{event.dates.timezone}</h3>
                        <p>{event.dates.start.localTime}</p>
                        <p>{event.dates.start.localDate}</p>
                        <img src={event.images[4].url} alt={event.images[0].url}/>
                </div>)
        });

        return (

            <div>{items}</div>
        );
    }
}
export default WishListPage;