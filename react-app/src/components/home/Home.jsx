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
        </>

    )
}

export default Home;