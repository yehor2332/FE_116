import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Autoplay,  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const baseURL = "https://app.ticketmaster.com";
const allEvents = "/discovery/v2/events";
const apiKey = "2T27tMWdUxVkDgVWQo7PcVHhuYZ6qYeV";
const locale = "*";
const sort = "date,asc";
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
                sort : sort,
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
                modules={[Navigation, Keyboard, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                keyboard={true}
                //autoplay={true}
            > {events.map((el) => <SwiperSlide key={el.id}>
                <>
                    <img src={el.images[1].url} alt=""/>
                    <div className="swiperSlideInfo">
                        <h2>{el.name}</h2>
                        <h3>{el.dates.timezone}</h3>
                        <p>{el.dates.start.localTime}</p>
                        <p>{el.dates.start.localDate}</p>
                        <Link to="/"><button className="btnBuy">Buy Ticket</button></Link>
                    </div>
                </>
            </SwiperSlide>)}
            </Swiper>)
}

export default MainSlider;