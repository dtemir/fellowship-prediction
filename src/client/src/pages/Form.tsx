import { useHistory } from "react-router";
import styles from "../css/form.module.css";
import { motion } from "framer-motion";
import { pageVariant } from "../animation/variants";
import { usePrediction } from "../contexts/PredictionContextProvider";
import React, { useRef, useState } from "react";
import Alert from "../components/form/Alert";
import { alertVariant } from "../animation/variants";

const Form = () => 
{

    const history = useHistory();
    const { setUsername,getPrediction } = usePrediction();
    const [error, setError] = useState(false);
    const formRef = useRef(null);
    
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => 
    {
        if(event.target.value)
        {
            setError(false);
            return;
        }
        setError(true);
    }
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => 
    {
        event.preventDefault();
        if(!formRef.current) return;
        const username = formRef.current['username']['value'];
        if(!username)
        {
            setError(true);
            return;
        }
        setUsername(username);
        getPrediction();
        history.push('/result');
    }

    return(
        <>
            <motion.form
                ref={formRef}
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
                            autoComplete="off"
                            onChange={handleChange}
                        />
                        <input
                            id="submitButton"
                            type="submit"
                            value="continue"
                        />
                    </div>
                    {
                        error &&
                        <motion.div
                            variants={alertVariant}
                            initial='hidden'
                            animate='visible'

                        >
                            <Alert error="empty field" details="username cannot be empty"/>
                        </motion.div>
                    }
              </div>
            </motion.form>
        </>
    )
}

export default Form;