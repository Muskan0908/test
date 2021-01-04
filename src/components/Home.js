import React,{useState} from 'react';
import {BiSearch} from "react-icons/bi";
import {FiGlobe} from "react-icons/fi";
import {FaAlignRight} from "react-icons/fa";
import {CgProfile} from "react-icons/cg";
import './style.css';

import Carousel from 'react-elastic-carousel';
import url1 from "./images/img3.jpg";
import url2 from "./images/img4.jpg";
import url3 from "./images/img5.jpg";
import url4 from "./images/img6.jpg";
import url5 from "./images/img7.jpg";
import url6 from "./images/img8.jpg";
import url7 from "./images/img9.jpg";
import url8 from "./images/img10.jpg";
import url9 from "./images/img11.jpg";
import url10 from "./images/img12.jpg";


const items=[
    { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const Home = props => {
    const [images]=useState([
        {id: 1, title: 'London',url:url1},
      {id: 2, title: 'Venice',url:url2},
      {id: 3, title: 'Greece',url:url3},
      {id: 4, title: 'New York',url:url4},
      {id: 5, title: 'Budapest',url:url5}
    ])
    const [places]=useState([
        {id: 1, title: 'Tree House',url:url6},
      {id: 2, title: 'Cabin and Cottages',url:url7},
      {id: 3, title: 'Villa',url:url8},
      {id: 4, title: 'Cabana',url:url9},
      {id: 5, title: 'Presidential Suite',url:url10}
    ])
    return (
        <div>
        <div className="home">
            <div className="top">
                <h3>Get the latest on our COVID-19 response</h3>
            </div>
            <div className="navBar">
                <div className="hosting">
                    <h5>Switch to Hosting</h5>
                    <FiGlobe/>
                </div>
                <div className="profile">
                    <FaAlignRight/>
                    <CgProfile/>
                </div>
                 
            </div>
            <h3>Places to stay</h3><br/>
            <div className="filter">
                <div className="filter-item">
                    <label>Location</label><br/>
                    <input type="text" placeholder="Where are you going?"/>
                </div>
                <div className="filter-item">
                    <label for="checkIn">Check-in</label><br/>
                    <input type="date" id="checkIn" name="checkIn"/>
                </div>
                <div className="filter-item">
                <label for="checkOut">Check-out</label><br/>
                    <input type="date" id="checkOut" name="checkOut"/>

                </div>
                <div className="filter-item">
                    <label>Guests</label><br/>
                    <input type="number" id="guests" name="guests" step="1" min="1" placeholder="0"/>
                </div>
                <div className="filter-item">
                    <div className="search">
                    <BiSearch/>
                    </div>
                </div>
            </div>
            <div className="title">
                <div className="title-item">
                    <div className="name">
                        <h2>Go <br/>Near</h2>
                    </div>
                    <input type="button" value="Explore nearby stays"/>
                </div>
            </div>
        </div>
        <div className="type1">
            <div className="type">Popular Destinations</div>
            <Carousel breakPoints={items}>
                {images.map(item => <div className="destinations" key={item.id}>
                    <img src={item.url} alt={item.title}/>
                    <div className="desc">{item.title}</div>
                    </div>)}
                
            </Carousel>
            <div className="type">Live Anywhere</div>
            <Carousel breakPoints={items}>
                {places.map(item => <div className="destinations" key={item.id}>
                    <img src={item.url} alt={item.title}/>
                    <div className="desc">{item.title}</div>
                    </div>)}
                
            </Carousel>
        </div>
        <div className="footer">
            <div className="footer-item">
                ABOUT
            </div>
            <div className="footer-item">
                COMMUNITY
            </div>
            <div className="footer-item">
                HOST
            </div>
            <div className="footer-item">
                SUPPORT
            </div>
        </div>
        </div>
    )
}



export default Home
