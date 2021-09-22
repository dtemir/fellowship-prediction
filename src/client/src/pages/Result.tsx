import { ProfileCard } from "../components";
import CountUp from "react-countup";
import styles from "../css/result.module.css";
import mlhAvatar from "../assets/images/mlh_logo.png";

const Result = () => 
{
    /* dummy data */

    const data = 
    {
        avatar:mlhAvatar,
        followers:10,
        repos:10,
        stars:10,
        forks:10,
        commits:2000,
        pullRequests:30,
        issues:20,
        organizations:2,   
    }
    
    return(
        <>
            <div className={styles.result}>
                <div className={styles.header}>
                    <h1>congratulations! you're the next MLH fellow</h1>
                    <h2>score <CountUp start={0} end={97} duration={2} />%</h2>
                </div>
                <div className={styles.cards}>
                    <ProfileCard data={data}/>
                    <ProfileCard data={data}/>
                </div>
            </div>
        </>
    )
}

export default Result;