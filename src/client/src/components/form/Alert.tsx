import styles from "../../css/form.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

interface IProps 
{
    error:string;
    details:string;
}
const Alert:React.FC<IProps> = ({error,details}) => 
{
    return(
        <>
            <div className={styles.alert}>
                <h6>
                    <span>
                        <FontAwesomeIcon icon={faExclamationCircle}/>
                    </span>
                    {error} : 
                </h6>
                <span>{details}</span>
            </div>
        </>
    )
}

export default Alert;