import React from 'react'
import Header from '../js-files/nav-bars/NavHomeV2'
import Ss from './ss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {motion} from 'framer-motion'

const ProfileSt = () => {
    return(
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.7}}
        className='Together--ProfileSt'>
            <div className='Header--Profile'>
                <Header />
            </div>
            <div className='profile--info--info'>
                <div className='profile-info-infos'><h2>Name</h2>
                <input></input>
                </div>
                <br></br>
                <br></br>
                <div className='profile-info-infos'><h2>Last Name</h2>
                <input ></input>
                </div>
                <br></br>
                <br></br>
                <div className='profile-info-infos'>
                <h2>Email</h2>
                <input></input>
                </div>
                <br></br>
                <br></br>
                <div className='profile-info-infos'>
                <h2>Delivery Address</h2>
                <input></input>
                </div>
            </div>
        </motion.div>
    )
}

const ProfileNd = () => {
    return(
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.7}}
        className='Together--ProfileNd'>
            <div className='Header--Profile'>
                <Header />
            </div>
            <div className='profile--change--password'>
                <div className='profile-info-infos'><h2>Old Password</h2>
                <input></input>
                </div>
                <br></br>
                <br></br>
                <div className='profile-info-infos'><h2>New Password</h2>
                <input></input>
                </div>
                <br></br>
                <br></br>
                <div className='profile-info-infos'>
                <h2>Repeat Password</h2>
                <input></input>
                </div>
                <br></br>
                <br></br>
                <div className='profile-info-infos'>
                <button type='submit'>Change</button>
               </div>
            </div>
        </motion.div>
    )
}

const ProfileTh = () => {
    return(
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.7}}
        className='Together--ProfileTh'>
            <div className='Header--Profile'>
                <Header />
            </div>
            <div className='profile--change--password'>
                <div className='profile-info-infos'><h2>Old Number</h2>
                <input placeholder='5##-##-##-##'></input>
                </div>
                <br></br>
                <br></br>
                <div className='profile-info-infos'><h2>New Number</h2>
                <input></input>
                </div>
                <br></br>
                <br></br>
                <div className='profile-info-infos'>
                <h2>Repeat Number</h2>
                <input></input>
                </div>
                <br></br>
                <br></br>
                <div className='profile-info-infos'>
                <button type='submit'>Change</button>
               </div>
            </div>
        </motion.div>
    )
}

const ProfileZero = () => {
    return(
            <div className='Header--Profile'>
                <Header />
            </div>
    )
}
export {ProfileSt, ProfileNd, ProfileTh, ProfileZero}