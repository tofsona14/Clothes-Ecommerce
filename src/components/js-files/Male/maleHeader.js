import './Male.css'
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
import image from "./a.png"
function Headers(){
    return(     
        <header className="Home--Header">
            <div className='Home--Header--Child'>
                <div className="Home--Header-St-Div">
                    <div className="Home--Header-St-DivOne">
                        <img src={image} width="50px" height="50px"></img>
                    </div>
                    <div className="Home--Header-St-Divtwo">
                        <img src=""></img>
                    </div>
                </div>
                <motion.div 
                initial={{opacity:1,x:-150}}
                animate={{opacity:1,x:0}}
                transition={{ type:"spring", stiffness: 120}}
    >
                <ul className="ul--Header">
                    <li><Link to='/' style={{color:"gray"}}>Home </Link></li>
                    <li><Link to='/collection' style={{color:"gray"}}>New Collection</Link></li>
                    <li>About Us</li>
                    <li><Link to='/Profile' style={{color:"gray"}}>Login</Link></li>
                </ul>
                
            </motion.div>
        </div>
    </header>
    )
}

export default Headers