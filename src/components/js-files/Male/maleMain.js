import React, {useState}from 'react'
import {Link} from 'react-router-dom'
import Slide from './slider/slider'
import {motion} from 'framer-motion'
import { COLOR } from 'rsuite/esm/utils'
const loam = {
    hidden: {
        opacity:0,
        x:"-100vw",
        color:"#FFFFFF"
    },
    visible: {
        opacity:1,
        x:"0",
        color:"#808080",
        transition: {
            duration:1.5
        }
    }
}
function Main() {
    const list = {
        first: ""
    }
    const [val, setVal] = useState("")
    const modelClickHandler = (soo) => {
        setVal(soo)
        Main = {...Main, first: soo.target.outerText}
        console.log(Main)

        
    }
    const [check, setCheck] = useState("")


    const checkbox = (props) => {
        setCheck(props.target)
        console.log(props.target)
    }
    
    return(
       <main className="MainContainer">
           <div className="ChooseContainer">
               <motion.ul
               variants={loam}
               initial="hidden"
               animate="visible"
               className="UlOfMain">
                   <motion.lo
                   whileHover={{scale: 1.1, color: "#525252"}}
                   className="zd"><Link style={{color:"#808080"}}>Male </Link></motion.lo>
                   <motion.lo
                    whileHover={{scale: 1.1, color: "#525252"}}
                    ><Link style={{color:"#808080"}}>New collection</Link></motion.lo>
                   <motion.lo
                    whileHover={{scale: 1.1, color: "#525252"}}
                   ><Link style={{color:"#808080"}}>Female</Link></motion.lo>
               </motion.ul>
           </div>
           <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.8,duration:1.5}}
           className="NdDiv">
               <section className="StSection">
                           <div className="ModelOfSuitSection">
                               <div className="ModelOfSuitSection--Header">
                                   <p onClick={modelClickHandler}>MODEL</p>
                               </div>
                               <div className="WTF">    
                                   <div className="ModelOfSuitSectionDivSt">
                                       <input type="checkbox" id="checkboxSt"></input> <label for="checkboxSt" onCli>Model 1st </label>
                                   </div>
                                   <div className="ModelOfSuitSectionDivSt">
                                       <input type="checkbox" id="checkboxNd"></input> <label for="checkboxNd">Model 1st </label>
                                   </div>
                                   <div className="ModelOfSuitSectionDivSt">
                                       <input type="checkbox" id="checkboxRd"></input> <label for="checkboxRd">Model 1st </label>
                                   </div>
                               </div>
                           </div>
                           <div className="SuitSection--price">
                               <div className="SuitSection--Price-Text">
                                   <p>PRICE</p>
                               </div>
                               <div className="SuitSection--Price-slider">
                                <p className="p">Slider</p>
                               </div>
                           </div>
                           <div className="SuitSection--Details">
                               <div className="ModelOfSuitSection--Header">
                                   <p onClick={modelClickHandler}>MODEL</p>
                               </div>
                               <div className="WTF">    
                                   <div className="ModelOfSuitSectionDivSt">
                                       <input onClick={checkbox} type="checkbox" id="checkboxSt"></input> <label onClick={checkbox}for="checkboxSt" ><p onClick={checkbox}>Model 1st</p> </label>
                                   </div>
                                   <div className="ModelOfSuitSectionDivSt">
                                       <input type="checkbox" id="checkboxNd"></input> <label for="checkboxNd"><p onClick={modelClickHandler}>Model 1st</p></label>
                                   </div>
                                   <div className="ModelOfSuitSectionDivSt">
                                       <input type="checkbox" id="checkboxRd"></input> <label for="checkboxRd">Model 1st </label>
                                   </div>
                               </div>
                           </div>
               </section>
               <section className='s'>
                    <Slide />
               </section>
           </motion.div>
       </main>
   )
}



export default Main