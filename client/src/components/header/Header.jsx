import React, { useEffect } from 'react'
import { useState } from 'react'
import "../header/header.css"

export default function Header({myPosts}) {
  let posts=[
    {

      id: '1',

      name: 'Bangalore',

      desc: 'Clear with periodic clouds',

      temp: '20 °C',

      humidity: '52.0%',

  },

  {

      id: '2',

      name: 'Mumbai',

      desc: 'Clear with periodic clouds',

      temp: '20 °C',

      humidity: '52.0%',

  },

  {

      id: '3',

      name: 'Pune',

      desc: 'Clear with periodic clouds',

      temp: '20 °C',

      humidity: '52.0%',

  },

  {

      id: '4',

      name: 'Patna',

      desc: 'Clear with periodic clouds',

      temp: '20 °C',

      humidity: '52.0%',

  },

  {

      id: '5',

      name: 'Delhi',

      desc: 'Clear with periodic clouds',

      temp: '20 °C',

      humidity: '52.0%',

  },

  {

      id: '6',

      name: 'Kolkata',

      desc: 'Clear with periodic clouds',

      temp: '20 °C',

      humidity: '52.0%',

  },

  {

      id: '7',

      name: 'Punjab',

      desc: 'Clear with periodic clouds',

      temp: '20 °C',

      humidity: '52.0%',

  },

  {

      id: '8',

      name: 'Rajasthan',

      desc: 'Clear with periodic clouds',

      temp: '20 °C',

      humidity: '52.0%',

  },

  {

      id: '9',

      name: 'Surat',

      desc: 'Clear with periodic clouds',

      temp: '20 °C',

      humidity: '52.0%',

  },

  {

      id: '10',

      name: 'Ranchi',

      desc: 'Clear with periodic clouds',

      temp: '20 °C',

      humidity: '52.0%',

  },

  {

      id: '11',

      name: 'Chennai',

      desc: 'Clear with periodic clouds',

      temp: '20 °C',

      humidity: '52.0%',

  },

  {

      id: '12',

      name: 'Jaipur',

      desc: 'Clear with periodic clouds',

      temp: '20 °C',

      humidity: '52.0%',

  },
  ]
  
  const [view, setView]=useState(false)
  function handleCities(){
    if(view===false){setView(true)
    }
    else{
        setView(false)
    }
  }
  function handlePosts(p){
    myPosts.push(p)
    return myPosts
  }
  return (
    <div className="wrapper">
      <div>
           {view ? (
             <div className='section'>
             {posts.map(p=>(
                <div className='citiesList'>
                <li>{p.name} 
                <button className="favBtn" onClick={()=>((handlePosts(p)))}> + </button>
                </li>
                <li>{p.desc}</li>
                <li>{p.temp}</li>
                <li>{p.humidity}</li>
                </div>
                
            ))}
            </div>
           ):(
            <div className='section'>
             {myPosts.map(p=>(
                <div className='citiesList'>
                <li>{p.name} 
                </li>
                <li>{p.desc}</li>
                <li>{p.temp}</li>
                <li>{p.humidity}</li>
                </div>
                
            ))}
            </div>
           )}
            <button className="citiesBtn" onClick={handleCities}>{view ? ("View Favourites"):("View Cities")}</button>     
        </div>
        
       <div className="sidebar">
           <ul>
              <li>
              <a href="#" class="active">
                  <span className="item">Home</span>
              </a>
              </li>
           </ul>
      </div>
   </div>
  )
}
