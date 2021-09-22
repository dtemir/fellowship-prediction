import { Link } from "react-router-dom";
import illustration from "../assets/images/select_fellow_illustration.svg";
import styles from "../css/home.module.css";
import { motion } from 'framer-motion';
import { pageVariant } from "../animation/variants";

const Home = () => 
{
    return(
        <>
            <motion.div 
                className={styles.home}
                variants={pageVariant}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                <div className={styles.left}>
                    <div>
                        <p>Hi buddy! </p>
                        <p>
                            Let's find out if you are the next MLH fellow                    
                        </p>
                    </div>
                    <div>
                        <Link to='/form'>
                            <button>start</button>
                        </Link>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src={illustration} alt="illustration"/>
                </div>
            </motion.div>
        </>
    )
}

export default Home;