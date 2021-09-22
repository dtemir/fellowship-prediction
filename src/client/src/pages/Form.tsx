import styles from "../css/form.module.css";

const Form = () => 
{

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => 
    {
        event.preventDefault();
        console.log('submited');
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