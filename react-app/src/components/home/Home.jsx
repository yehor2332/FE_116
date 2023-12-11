import MainSlider from "../mainSlider/MainSlider";
import { useEffect } from 'react';

function Home () {
  useEffect(() => {
    document.title = 'Home';
},[]);
    return (
      <>
      <MainSlider/>
      <h1>Home</h1>
      </>
    )
}

export default Home;