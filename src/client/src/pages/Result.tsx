import { RadarChart, BarChart, ComparisonBarChart, LineChart, Modal, ProfileCard, Loading } from "../components";
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
    const {username,isFetching, prediction, error} = usePrediction();
    const redirectToFormPage = () => history.push('/form');

    return(
        <>
            {
                isFetching && <Loading/>
            }
            {
                !isFetching && error &&
                <Modal
                    icon={faExclamationCircle}
                    message={'invalid username please try again'}
                    buttonLabel={'try again'}
                    action={redirectToFormPage}
                />
            }
                {
                    !isFetching && !error && 
                    <motion.div 
                        className={styles.result}
                        variants={pageVariant}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >
                        <div className={styles.header}>
                                {
                                    (prediction.user.score >= 50) &&
                                    <h1>congratulations! you're the next MLH fellow</h1>
                                }
                                {
                                    (prediction.user.score < 50) &&
                                    <h1>Almost there! Here are some areas you could improve</h1>
                                }
                                <h2>score <CountUp start={0} end={prediction.user.score} duration={2} />%</h2>
                            </div>
                            <div className={styles.cards}>
                                <ProfileCard 
                                    username={username}
                                    avatar={prediction.user.avatar}
                                    data={prediction.user.features} 
                                    averageData={prediction.averageFellow.features}
                                />
                                <ProfileCard 
                                    username={'average MLH fellow'}
                                    avatar={mlh_logo}
                                    data={prediction.averageFellow.features} 
                                    averageData={prediction.averageFellow.features}
                                />
                            </div>
                            <div>
                                <BarChart 
                                    userScore={prediction.user.score} 
                                    averageScore={prediction.averageFellow.score}
                                />
                            </div> 
                            <div>
                                <LineChart 
                                    data={prediction.user.features} 
                                    averageData={prediction.averageFellow.features}
                                />
                            </div> 
                            <div>
                                <ComparisonBarChart 
                                    data={prediction.user.features} 
                                    averageData={prediction.averageFellow.features}
                                />
                            </div> 
                            <div>
                                <RadarChart 
                                    data={prediction.user.features} 
                                    averageData={prediction.averageFellow.features}
                                />
                            </div> 
                    </motion.div>
                }
        </>
    )
}


export default Result;