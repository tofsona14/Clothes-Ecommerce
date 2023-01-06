import React,{useState} from 'react';
import image from './profile-pictures/img.png';
import "./profile.css";
import styled from 'styled-components';


export default function Profile() {
    function clickMe() {
        alert("nooo")
    }
    return(
        <div className='MainContOfProfile'>
            <div className='ListOfProfile'>
                <img className='imgOfProfile' src={image}></img>
                <div className='MainDivOfListOfWordsOfProfile'>
                    <div className='ListOfWordsOfProfile'>
                        <button onClick={clickMe} id="1">Profile Info</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        <button onClick={clickMe} id="2" >Change Password</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        <button onClick={clickMe} id="3" >Change Number</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        <button onClick={clickMe} id="4" >Orders</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        <button onClick={clickMe} id="5" >Log Out</button>
                    </div>
                </div>
            </div>
            <div className='ContentOfProfile'>

            </div>
        </div>
    )
}