import { ProfileCard } from "../components";
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
                <div>
                    <ProfileCard data={data}/>
                    <ProfileCard data={data}/>
                </div>
            </div>
        </>
    )
}

export default Result;