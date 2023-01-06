import React,{useState} from 'react';
import image from './profile-pictures/img.png';
import "./profile.css";
import styled from 'styled-components';

const Button = styled.button`
    border-bottom: solid blue;
`
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
                        <div className='first-List--Profile'>
                            <button onClick={clickMe} id="1">Profile Info</button>
                            <button onClick={clickMe} id="2" >Change Password</button>
                            <button onClick={clickMe} id="3" >Change Number</button>
                            <button onClick={clickMe} id="4" >Orders</button>
                        </div>
                        <div className='second-List--profile'>
                            <button onClick={clickMe} id="5" >Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ContentOfProfile'>
                
            </div>
        </div>
    )
}