import { useHistory } from "react-router";
import styles from "../css/form.module.css";
import { motion } from "framer-motion";
import { pageVariant } from "../animation/variants";
import { usePrediction } from "../contexts/PredictionContextProvider";
import React, { useEffect, useRef, useState } from "react";
import Alert from "../components/form/Alert";
import { alertVariant } from "../animation/variants";

const Form = () => 
{

    const history = useHistory();
    const { setError } = usePrediction();
    const { setUsername,setIsFetching } = usePrediction();
    const [inputError, setInputError] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        setError(false);
    }, [setError])
    
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => 
    {
        if(event.target.value)
        {
            setInputError(false);
            return;
        }
        setInputError(true);
    }
    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => 
    {
        event.preventDefault();
        if(!formRef.current) return;
        const username = formRef.current['username']['value'];
        if(!username)
        {
            setInputError(true);
            return;
        }
        setUsername(username);
        setIsFetching(true);
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
                        inputError &&
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