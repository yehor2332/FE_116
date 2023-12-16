import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from "axios";
import {useEffect, useState} from "react";

const baseURL = "https://app.ticketmaster.com";
const allEvents = "/discovery/v2/events";
const apiKey = "2T27tMWdUxVkDgVWQo7PcVHhuYZ6qYeV";
const locale = "*";
const countryCode = "DE";
function MainSlider () {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);
    console.log(events)

    useEffect(() => {
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
    }, []);
    return (
            <Swiper
                modules={[Navigation]}
                navigation={true}
            > {events.map((el) => <SwiperSlide key={el.id}>
                <>
                    <h2>{el.name}</h2>
                    <h3>{el.dates.timezone}</h3>
                    <p>{el.dates.start.localTime}</p>
                    <p>{el.dates.start.localDate}</p>
                    <img src={el.images[5].url} alt=""/>
                </>
            </SwiperSlide>)}
            </Swiper>)
}

export default MainSlider;