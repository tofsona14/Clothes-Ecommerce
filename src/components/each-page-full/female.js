import Header from "../js-files/Female/femaleHeader"
import Femain from "../js-files/Female/femaleMain"
import {motion} from 'framer-motion'

function Female() {
    const femaleprops = () => [
        {
            name: "model1",
            surname: "modle2",
            lastName: 'model3'
        }
        
    ]
    return(
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
        className="Male--Together">
            <Header />
            <Femain femaleModel={femaleprops()}/>
        </motion.div>
    )
}

export default Female


