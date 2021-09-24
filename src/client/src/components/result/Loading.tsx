import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../css/loading.module.css';
const Loading = () => 
{
    return(
        <>
            <div className={styles.loading}>
                <div className="flex justify-center items-center ">
                    <span className="animate">Loading</span>
                    <span className="animate-spin ease duration-300">
                        <FontAwesomeIcon icon={faSpinner}/>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Loading;