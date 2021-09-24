import { BarChart, LineChart, Modal, ProfileCard } from "../components";
import CountUp from "react-countup";
import styles from "../css/result.module.css";
import { motion } from "framer-motion";
import { pageVariant } from "../animation/variants";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import { usePrediction } from "../contexts/PredictionContextProvider";
import mlh_logo from '../assets/images/mlh_logo.svg';


const Result = () => 
{

    const history = useHistory();
    const {error} = usePrediction();

    /* dummy data */
    const userData = 
    {
        followers:4,
        repos:11,
        stars:3,
        forks:0,
        commits:267,
        issues:0,
        contributions:6,
        organizations:1,   
    }

    const fellowData = 
    {
        followers:16,
        repos:28,
        stars:4,
        forks:2,
        commits:410,
        issues:44,
        contributions:32,
        organizations:1,   
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
                                <ProfileCard 
                                    avatar={mlh_logo}
                                    data={userData} 
                                    averageData={fellowData}
                                />
                                <ProfileCard 
                                    avatar={mlh_logo}
                                    data={fellowData} 
                                    averageData={fellowData}
                                />
                            </div>
                            <div>
                                <BarChart userScore={57} averageFellowScore={80}/>
                            </div> 
                            <div>
                                <LineChart data={userData} averageData={fellowData}/>
                            </div> 
                    </motion.div>
                }
        </>
    )
}

export default Result;