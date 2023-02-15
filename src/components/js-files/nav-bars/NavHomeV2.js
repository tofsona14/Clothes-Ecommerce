import React from "react";
import './Header.css'
import { Link, Route, Routes } from "react-router-dom";
import Header from "../Home/homeHeader";
import { motion } from "framer-motion";
import { setTransitionDuration } from "rsuite/esm/List/helper/utils";

const parentOf = {
    unvisible: {
        opacity: 1,
        x:-150
    },
    visible: {
        opacity:1,
        x:0,
        transition: {
            type:"spring",
            stiffness: 120,
        }
    }
}
const HeaderV = () => {
    return(
        <motion.div 
        variants={parentOf}
        initial="unvisible"
        animate="visible"
>
            <ul className="ul--Header">
                <li><Link to='/' style={{color:"gray"}}>Home </Link></li>
                <li><Link to='/collection' style={{color:"gray"}}>New Collection</Link></li>
                <li>About Us</li>
                <li><Link to='/Profile' style={{color:"gray"}}>Login</Link></li>
            </ul>
            
        </motion.div>
    )
}

export default HeaderV