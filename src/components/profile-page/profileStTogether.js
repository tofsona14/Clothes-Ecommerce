import React from 'react'
import Ss from '../profile-page/ss'
import {ProfileNd, ProfileSt, ProfileTh, ProfileZero} from '../profile-page/profile-together'
import {motion} from 'framer-motion'
const cdOO= {
    Unvisible: {
        opacity:0
    },
    Visible: {
        opacity:1,
        transition : {
            duration:1
        }
    }
}
const FirstOfProfile = () => {
    return(
        <motion.div className='together--profile--st'
        variants={cdOO}
        initial="Unvisible"
        animate="Visible"
        >
            
            <Ss/>
            <ProfileSt/>
        </motion.div>            
    )
}
const SecondOfProfile = () => {
    return(
        <motion.div className='together--profile--st'
        variants={cdOO}
        initial="Unvisible"
        animate="Visible"
        >

            <Ss/>
            <ProfileNd/>
        </motion.div>            
    )
}
const ThirdOfProfile = () => {
    return(
        <motion.div className='together--profile--st'
        variants={cdOO}
        initial="Unvisible"
        animate="Visible"
        >

            <Ss/>
            <ProfileTh/>
        </motion.div>            
    )
}
const ZeroOfProfile = () => {
    return(
        <motion.div className='together--profile--st'
        variants={cdOO}
        initial="Unvisible"
        animate="Visible"
        >
            <Ss/>
            <ProfileZero/>
        </motion.div>            
    )
}


export {FirstOfProfile, SecondOfProfile, ThirdOfProfile, ZeroOfProfile}