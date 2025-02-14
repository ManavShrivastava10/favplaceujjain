import React from 'react'
import './Home.css'
import Imagegrid from '../Imagegrid/Imagegrid';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const change = useNavigate();

    const tofavsec = () => {
    change('/favsec'); 
  };

  return (
    <div className='home'>

      <div className="container-fluid mt-5">
            <div className="row m-4">
            <Imagegrid url='https://tse1.mm.bing.net/th?id=OIP.FmHMoaU2damdg2izn9sxJgHaI6&pid=Api&P=0&h=180'/>
            <div className="col-lg-8 col-md-8 col-sm-12 text-center">
                <h2>My Favourite Place & My Hometown</h2>
                <h1>Sacred City Ujjain : Place Beyond the Heavens</h1>
                <button onClick={tofavsec} className='mt-3'>My Favourites in Ujjain</button>
            </div>
            <Imagegrid url='https://tse1.mm.bing.net/th?id=OIP.vycjQObY73e8oVcwh44AwwAAAA&pid=Api&P=0&h=180'/>
            </div>
            
            <div className="row m-4">
            <Imagegrid url='https://tse4.mm.bing.net/th?id=OIP.4UX2B0V4bGZ8SRU14s98zwHaD4&pid=Api&P=0&h=180'/>
            <div className='col-lg-8 col-md-8 col-sm-12 text-justify'> <p className='text-justify' >I am greateful and consider myself blessed that I was born and brought up in Ujjain, one of the seven sacred cities in India. Known for its rich historical and spiritual significance, it abode of the famous Mahakaleshwar Temple, a revered Jyotirlinga shrine dedicated to Bhagwan Shiva. Ujjain has been a center for learning, culture, and astrology for centuries. Ujjain is often referred to as the spiritual heart of Madhya Pradesh.</p></div>
            <Imagegrid url='https://tse4.mm.bing.net/th?id=OIP.yjfDZLoC-RCcCZM3YBbtCAHaE-&pid=Api&P=0&h=180'/>
            </div>

            <div className="row m-4">
            <Imagegrid url='https://tse2.mm.bing.net/th?id=OIP._akQF6VMRpdH8FdiaefGrwHaEK&pid=Api&P=0&h=180'/>
            <Imagegrid url='https://i.pinimg.com/736x/da/be/16/dabe167572fb6b7fa2935524872ad023.jpg'/>
            <Imagegrid url='https://tse1.mm.bing.net/th?id=OIP.FxsX_fcgty4_M6HlmOz3vgHaEK&pid=Api&P=0&h=180'/>
            <Imagegrid url='https://tse3.mm.bing.net/th?id=OIP.tQ67fz9yi6T8UzzzMjAgbAHaET&pid=Api&P=0&h=180'/>
            <Imagegrid url='https://tse3.mm.bing.net/th?id=OIP.hjg16KCSysGHATgnrUN0HgAAAA&pid=Api&P=0&h=180'/>
            <Imagegrid url='https://i.pinimg.com/736x/39/4b/d6/394bd6f8bad28bf5f5ffaa57da5d128d.jpg'/>
            </div>
      </div>
    </div>
  );
}

export default Home;
