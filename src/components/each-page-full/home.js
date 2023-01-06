import Header from "../js-files/Home/homeHeader"
import Main from "../js-files/Home/homeMain"
import Slide from "../js-files/Home/homeSlider"
import HeaderV from '../js-files/nav-bars/NavHomeV2'
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
function Home(){
    return(
        <motion.div className="Home--main--div"
        variants={cdOO}
        initial="Unvisible"
        animate="Visible"
        >
            <div className="Home--main--div--top">
                <div className="Home--main--div--header">
                <HeaderV />
                </div>
            </div>
            <Main />
            <Slide />
        </motion.div>
    )
}

export default Home

