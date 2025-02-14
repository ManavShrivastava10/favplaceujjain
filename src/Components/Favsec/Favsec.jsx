import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Favsec.css'
import Imageholder from '../Imageholder/Imageholder';

const Favsec = () => {

   const changeback = useNavigate();
   const tohome = () => {
   changeback('/'); 
   };

  return (
      <div>
        <div className='container-fluid favsec mt-4 text-center position-relative'>
                <div>
                <button onClick={tohome} style={{position:'absolute', left:'20px'}}>Back to Home</button>
                <h1>My Favourite Places In Ujjain</h1>
                </div>
                <div className='row favsecrow mt-4'>
                    <Imageholder url='https://tse1.mm.bing.net/th?id=OIP.jvo8QVEJg8CYHjRKEQAsDwHaE8&pid=Api&P=0&h=180' title='SHRI MAHAKALESHWAR MANDIR' description='One of the holiest place in not just in Malwa but in entire world, Lord Shiv recides here & it is one of the twelve Jyotirlingas. This is a really powerful place.' />
                    <Imageholder url='https://tse2.mm.bing.net/th?id=OIP.HaxE4Mp6kfQ828OKKZsDrwHaFj&pid=Api&P=0&h=180' title='SHRI RAM GHAT'             description='The holy ghat of Kshipra river, gives me peace and serenity. Looks beautiful in evening. It is said that the one who just stands here for some time, attains moksha.'/>
                    <Imageholder url='https://tse4.mm.bing.net/th?id=OIP.reK1yjdfJ0raA_GS3AtwKwHaFJ&pid=Api&P=0&h=180' title='SHRI HARSIDDHI MANDIR'     description='The ancient temple is a Shaktipeeth, the holy abode of devi where I always feel the high power of the place that ensures me calmness and will, everytime I visit.'/>
                </div>
        </div>
      </div>
  )
}

export default Favsec
