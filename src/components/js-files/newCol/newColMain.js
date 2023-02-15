import React, {useState}from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import photo from '../../images/example.jpg'
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
               <section className="thSection">
                    <div className='section--div--rd'>
                        <img src={photo}></img>
                        <p>მოდელი</p>
                        <p>ფასი</p>


                    </div>
                    <div className='section--div--rd'>
                        <img src={photo}></img>
                        <p>მოდელი</p>
                        <p>ფასი</p>
                    </div>
                    <div className='section--div--rd'>
                        <img src={photo}></img>
                        <p>მოდელი</p>
                        <p>ფასი</p>
                    </div>
               </section>
               
           </motion.div>
       </main>
   )
}



export default Main