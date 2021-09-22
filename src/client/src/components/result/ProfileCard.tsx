import CountUp from 'react-countup';
import styles from "../../css/result.module.css";

interface IProps
{
    data : 
    {
        avatar:string
        followers:number,
        repos:number,
        stars:number,
        forks:number,
        commits:number,
        pullRequests:number,
        issues:number,
        organizations:number,
    }
}

const ProfileCard:React.FC<IProps> = ({data}) => 
{   
    const dataEntries = Object.entries(data).slice(1,-1);

    return(
        <>
            <div className={styles.profileCard}>
                <div>
                    <div>
                        {/* profile avatar goes here */}
                    </div>
                </div>
                {
                
                    dataEntries.map((property=>{
                        return(
                            <div key={property[0]}>
                                <span>{property[0]}</span>
                                <span>
                                    <CountUp start={0} end={parseInt(property[1].toString())} duration={2.5}/>
                                </span>
                            </div>
                        )
                    }))
                }
            </div>
        </>
    )
}

export default ProfileCard;