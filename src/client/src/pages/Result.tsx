import { BarChart, Modal, ProfileCard } from "../components";
import CountUp from "react-countup";
import styles from "../css/result.module.css";
import { motion } from "framer-motion";
import { pageVariant } from "../animation/variants";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import { usePrediction } from "../contexts/PredictionContextProvider";

const Result = () => 
{

    const history = useHistory();
    const {error} = usePrediction();

    /* dummy data */

    const data = 
    {
        avatar:'',
        followers:10,
        repos:10,
        stars:10,
        forks:10,
        commits:2000,
        pullRequests:30,
        issues:20,
        organizations:2,   
    }
    
    const redirectToFormPage = () => history.push('/form')
    
    return(
        <>
            {
                error &&
                <Modal
                    icon={faExclamationCircle}
                    message={'invalid username please try again'}
                    buttonLabel={'try again'}
                    action={redirectToFormPage}
                />
            }
                {
                    !error && 
                    <motion.div 
                        className={styles.result}
                        variants={pageVariant}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >
                        <div className={styles.header}>
                                <h1>congratulations! you're the next MLH fellow</h1>
                                <h2>score <CountUp start={0} end={97} duration={2} />%</h2>
                            </div>
                            <div className={styles.cards}>
                                <ProfileCard data={data}/>
                                <ProfileCard data={data}/>
                            </div>
                            <div>
                                <BarChart userScore={57} averageFellowScore={80}/>
                        </div> 
                    </motion.div>
                }
        </>
    )
}

export default Result;