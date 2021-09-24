import { useCallback} from 'react';
import { faCheck,faTimesCircle,faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';
import styles from "../../css/result.module.css";

interface IProps
{
    avatar:string
    data: 
    {
        followers:number,
        repos:number,
        stars:number,
        forks:number,
        commits:number,
        issues:number,
        organizations:number,
    }

    averageData:IProps['data'];
}

const ProfileCard:React.FC<IProps> = ({avatar, data,averageData}) => 
{   
    const dataEntries = Object.entries(data);
    const averageDataEntries = Object.entries(averageData);

    const iconAndColorFromFeatureScore = useCallback((userScore:number,averageFellowScore:number) => 
    {   
        const percentage = Math.floor((userScore / averageFellowScore) * 100);

        if(percentage < 50) return {color:'text-error',icon:faTimesCircle};
        if(percentage >=50 && percentage <70) return {color:'text-warning',icon:faExclamationCircle};
        return {color:'text-success',icon:faCheck};
    },[])

    return(
        <>
            <div className={styles.profileCard}>
                <div>
                    <div>
                        <img src={avatar} alt='avatar'/>
                    </div>
                </div>
                {
                
                    dataEntries.map(((property,index)=>{
                        const {color,icon} = iconAndColorFromFeatureScore(property[1],averageDataEntries[index][1]);
                        return(
                            <div key={property[0]}>
                                <span>
                                    <span className={`${styles.featureIcon} ${color}`}><FontAwesomeIcon icon={icon}/></span>
                                    <span className={styles.feature}>{property[0]}</span>
                                </span>
                                <span>
                                    <CountUp start={0} end={parseInt(property[1].toString())} duration={3.5}/>
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