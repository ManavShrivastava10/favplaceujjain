import React from 'react'
import Imageholder from '../Imageholder/Imageholder';

const Home = () => {
  return (
    <div className='home'>
      <h1>Manav's Favourite Place : UJJAIN</h1>
      <h4>The holy city of Ujjain is my most favourite place and I am grateful to God that I am born and brought up here.</h4>
      <div className='banner'>
        <div className='container-fluid'>
                <div className='row'>
                    <Imageholder url='https://tse1.mm.bing.net/th?id=OIP.jvo8QVEJg8CYHjRKEQAsDwHaE8&pid=Api&P=0&h=180' title='SHRI MAHAKALESHWAR MANDIR' description='One of the holiest place in not just in Malwa but in entire Indis, Lord Shiv recides here & it is one of the twelve Jyotirlingas.' />
                    <Imageholder url='https://tse2.mm.bing.net/th?id=OIP.HaxE4Mp6kfQ828OKKZsDrwHaFj&pid=Api&P=0&h=180' title='SHRI RAM GHAT' description='The holy ghat of Kshipra river, gives me peace and serenity. It is said that the one who just stands here for some time, attains moksha.'/>
                    <Imageholder url='https://tse4.mm.bing.net/th?id=OIP.reK1yjdfJ0raA_GS3AtwKwHaFJ&pid=Api&P=0&h=180' title='SHRI HARSIDDHI MANDIR' description='The ancient temple is a Shaktipeeth, the holy abode of devi where I always feel the high power of the place that ensures me calmness and will, everytime I visit.'/>
                </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
