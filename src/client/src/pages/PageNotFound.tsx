import { motion } from "framer-motion";
import { pageVariant } from "../animation/variants";
import illustration from "../assets/images/page_not_found_illustration.svg";
import styles from "../css/pageNotFound.module.css";

const PageNotFound = () => 
{
    return(
        <>
            <motion.div 
                className={styles.pageNotFound}
                variants={pageVariant}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                <img src={illustration} alt="illustration"/>
            </motion.div>
        </>
    )
}

export default PageNotFound;