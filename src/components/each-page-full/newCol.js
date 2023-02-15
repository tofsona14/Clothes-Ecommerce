import Header from "../js-files/newCol/newColHeader"
import {motion} from 'framer-motion'
import Main from '../js-files/newCol/newColMain'
import { useEffect } from "react"

function NewCol() {
    
    return(
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
        className="Male--Together">
            <Header />
            <Main />
        </motion.div>
    )
}

export default NewCol


