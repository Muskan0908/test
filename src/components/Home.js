import React from 'react';
import {BiSearch} from "react-icons/bi";
import {FiGlobe} from "react-icons/fi";
import {IoMdMenu} from "react-icons/io";
import {CgProfile} from "react-icons/cg";
import './style.css';

const Home = props => {
    return (
        <div className="home">
            <div className="top">
                <h3>Get the latest on our COVID-19 response</h3>
            </div>
            <div className="navBar">
                <a href="#">Switch to Hosting</a>
                <FiGlobe/>
                <div className="profile">
                    <IoMdMenu/>
                    <CgProfile/>
                </div>
            </div>
            <h4>Places to stay</h4>
            <div className="filter">
                <div className="filter-item">
                    <h6>Location</h6>
                    <p>Where are you going?</p>
                </div>
                <div className="filter-item">
                    <h6>Check-in</h6>
                    <p>Add dates</p>
                </div>
                <div className="filter-item">
                    <h6>Check-out</h6>
                    <p>Add dates</p>
                </div>
                <div className="filter-item-l">
                    <h6>Guests</h6>
                    <p>Add guests</p>
                </div>
                <div className="search">
                <BiSearch/>
                </div>
            </div>
            <div className="title">
                <div className="title-item">
                    <h1>Go <br/>Near</h1><br/>
                    <input type="button" value="Explore nearby stays"/>
                </div>
            </div>
        </div>
    )
}



export default Home
