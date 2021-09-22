import { motion } from "framer-motion";
import { pageVariant } from "../animation/variants";

const PageNotFound = () => 
{
    return(
        <>
            <motion.div 
                className="pageNotFound"
                variants={pageVariant}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                404 Page Not Found
            </motion.div>
        </>
    )
}

export default PageNotFound;