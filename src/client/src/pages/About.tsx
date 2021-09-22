import { motion } from "framer-motion";
import { pageVariant } from "../animation/variants";

const About = () => 
{
    return(
        <>
            <motion.div 
                className="about"
                variants={pageVariant}
                initial='hidden'
                animate='visible'
                exit='exit'

            >
                About
            </motion.div>
        </>
    )
}

export default About;