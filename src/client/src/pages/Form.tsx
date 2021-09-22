import { useHistory } from "react-router";
import styles from "../css/form.module.css";
import { motion } from "framer-motion";
import { pageVariant } from "../animation/variants";

const Form = () => 
{

    const history = useHistory();

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => 
    {
        event.preventDefault();
        console.log('submited');
        history.push('/result');
    }

    return(
        <>
            <motion.form
                onSubmit={handleSubmit}
                className={styles.form}
                variants={pageVariant}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
              <div className={styles.innerWrapper}>
                    <div>
                        <label htmlFor="username">GitHub Username</label>
                    </div>
                    <div>
                        <input 
                            id="username" 
                            type="text" 
                            placeholder="Enter Your GitHub Username..."
                        />
                        <input
                            id="submitButton"
                            type="submit"
                            value="continue"
                        />
                    </div>
              </div>
            </motion.form>
        </>
    )
}

export default Form;