import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { alertVariant } from '../../animation/variants';
import styles from '../../css/modal.module.css';


interface IProps
{
    icon:IconDefinition;
    message:string;
    buttonLabel:string;
    action:()=>void;
}

const Modal:React.FC<IProps> = ({icon,message,buttonLabel,action}) =>
{
    return (
        <>
            <div className={styles.modal}>
                <motion.div 
                    className={styles.modalContent}
                    variants={alertVariant}
                    initial='hidden'
                    animate='visible'

                >
                    <div>
                        <FontAwesomeIcon icon={icon}/>
                    </div>
                    <p>{message}</p>
                    <button onClick={action}>
                        {buttonLabel}
                    </button>
                </motion.div>
            </div>
        </>
    )
}

export default Modal;