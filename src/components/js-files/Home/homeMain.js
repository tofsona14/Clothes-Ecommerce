import Male from "../../images/MALEEc.png"
import Female from "../../images/FEMALE.png"
import {motion} from 'framer-motion'
function Main()  {
    return(
            <main className="Home--Main">
                <motion.div 
                    initial={{opacity:0,x:'-100vw'}}
                    animate={{opacity:1,x:0}}
                    transition={{ duration:1.4}}
                    whileHover={{scale:1, opacity:0.5, textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)"}}
                    className="Home--Female" >
                    <img src={Female} className="male"></img>
                </motion.div>
                <motion.div
                 initial={{opacity:0,x:'100vw'}}
                 animate={{opacity:1,x:0}}
                 transition={{duration:1.4}}
                    whileHover={{scale:1, opacity:0.5, textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)"}}
                className="Home--Male">
                    <img src={Male} className="female"></img>
                </motion.div>
            </main>
    )
}

export default Main