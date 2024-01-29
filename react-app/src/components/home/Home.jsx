import MainSlider from "../mainSlider/MainSlider";
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
                </div>
            </div>
        </>

    )
}

export default Home;