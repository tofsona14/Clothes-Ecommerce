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
function FeMain(props) {
    const list = {
        first: ""
    }
    const [val, setVal] = useState("")
    const modelClickHandler = (soo) => {
        setVal(soo)

        
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
               <section className="NdSection">
                           <div className="ModelOfSuitSection">
                               <div className="ModelOfSuitSection--Header">
                                   <p onClick={modelClickHandler}>MODEL</p>
                               </div>
                               <div className="WTF">
                                {props.femaleModel.map((e, i) => {
                                    return (
                                        <div className="ModelOfSuitSectionDivSt">
                                            <div className='model--input--checkbox'>
                                             <input type="checkbox" id="checkboxSt"></input> <label for="checkboxSt" >{e.name} </label>

                                            </div>
                                            <div className='model--input--checkbox'>
                                            <   input type="checkbox" id="checkboxSt"></input> <label for="checkboxSt" >{e.surname} </label>

                                            </div>
                                            <div className='model--input--checkbox'>
                                                <input type="checkbox" id="checkboxSt"></input> <label for="checkboxSt" >{e.lastName} </label>

                                            </div>
                                        </div>
                                    )
                                   

                                })}    
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
                           
               </section>
               <section className='s'>
                    <Slide />
               </section>
           </motion.div>
       </main>
   )
}



export default FeMain