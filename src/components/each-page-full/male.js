import Header from "../js-files/Male/maleHeader"
import Main from "../js-files/Male/maleMain"
import {motion} from 'framer-motion'

function Male() {
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

export default Male


