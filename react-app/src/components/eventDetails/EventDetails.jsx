import {Link, useParams} from "react-router-dom";
import React, { useEffect, useState } from "react";
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
    const [liked, setLiked] = useState(() => {
        let items = [];
        for (let i= 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (!key.indexOf('event-')) {
                items.push(Number(localStorage.getItem(key)));
            }
        }
        return items;
    });
    
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

    const setWishList = (event) => {
        event.preventDefault();
        console.log(event.target.attributes.getNamedItem('data-id').value )
        let id = String(event.target.attributes.getNamedItem('data-id').value);
        let isFavourited = liked.includes(id);
        if(!isFavourited) {
            let newItem = [...liked, id];
            setLiked(newItem);
            window.localStorage.setItem('event-'+id, id);
        } else {
            let newItem = liked.filter((saveId) => saveId !== id);
            setLiked(newItem);
            window.localStorage.removeItem('event-'+id, id);
        }
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
                    <button className="like"
                            onClick={setWishList}
                            data-id={event.id}
                    >{liked.includes(event.id) ? 'dislike' : 'like'}</button>
                </div>
            </div>
        )
    }
}

export default EventDetails;