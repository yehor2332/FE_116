import MainSlider from "../mainSlider/MainSlider";
import EventsList from "../eventsList/EventsList";
import SortUpcomingsEvents from "../sortUpcomingsEvents/SortUpcomingsEvents";
import { useEffect } from 'react';
import '../../assets/scss/style.scss';

function Home () {
  useEffect(() => {
    document.title = 'Home';
},[]);
    return (
        <>
            <div className="slider">
                <MainSlider/>
            </div>
            <div className="upcomings-Events">
                <div className="sort-upcomings-Events">
                    <SortUpcomingsEvents/>
                </div>
            </div>
        </>

    )
}

export default Home;