import {Link, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import '../../assets/scss/style.scss';


const baseURL = "https://app.ticketmaster.com";
const Event = "/discovery/v2/events/";
const apiKey = "2T27tMWdUxVkDgVWQo7PcVHhuYZ6qYeV";
const locale = "*";


function EventDetails () {
    const eventId = useParams().id;
    console.log(eventId);
    const [event, setEvent] = useState(null);
    const [error, setError] = useState(null);
    
    function fetchData(eventId) {
        axios.get(baseURL + Event + eventId, {
            params: {
              apikey : apiKey,
              locale : locale,
            }})
              .then(response => {
                  setEvent(response.data);
                  console.log(response.data);
              })
              .catch(error => {
                setError(error.message);
                console.log(error);
              })
        }
        useEffect( () => {
            fetchData(eventId)
        }, []);
    
    if (error) {
        return (
        <div className="error">
        <h2>{ error }</h2>
        </div>)
    } else if (event) {
        return (
            <div className="event">
                <img src={event.images[2].url} alt={event.images[0].url} />
                <div className="eventInfo">
                    <h2>{event.name}</h2>
                    <h3>
                        <span>Category: </span>{event.classifications[0].segment.name}
                    </h3>
                    <h3><span>Date:</span> {event.dates.timezone}</h3>
                    <p><span>Start:</span> {event.dates.start.localTime} {event.dates.start.localDate}</p>
                    <button className="btnBuy"><Link to="/">Buy Ticket</Link></button>
                </div>
            </div>
        )
    }
}

export default EventDetails;