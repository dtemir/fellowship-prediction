import { useHistory } from "react-router";
import styles from "../css/form.module.css";

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
            <form
                onSubmit={handleSubmit}
                className={styles.form}
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
            </form>
        </>
    )
}

export default Form;