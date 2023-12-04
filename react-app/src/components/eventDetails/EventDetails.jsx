import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const baseURL = "https://app.ticketmaster.com";
const Event = "/discovery/v2/events/";
const apiKey = "2T27tMWdUxVkDgVWQo7PcVHhuYZ6qYeV";
const locale = "*";


function EventDetails () {
    const eventId = useParams().id;
    const [event, setEvent] = useState(null);
    const [error, setError] = useState(null);
    
    async function fetchData(id) {
        axios.get(baseURL + Event + id, {
            params: {
              apikey : apiKey,
              locale : locale,
            }})
              .then(response => {
                  setEvent(response.data);
                  console.log(response.data);
              })
              .catch(error => {
                setError(error.response.message);
                console.log(error);
              })
        }
        useEffect( () => {
            fetchData(eventId)
        }, [event]);
    
    if (error) {
        return (
        <div className="error">
        <h2>{ error }</h2>
        </div>)
    } else if (event) {
        return (
            <div className="event">
                <h2>{event.name}</h2>
                <h3>{event.dates.timezone}</h3>
                <p>{event.dates.start.localTime}</p>
                <p>{event.dates.start.localDate}</p>
                <img src={event.images[0].url} alt={event.images[0].url} />
                </div>
        )
    }
}
export default EventDetails;