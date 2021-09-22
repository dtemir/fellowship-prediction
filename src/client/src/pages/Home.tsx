import illustration from "../assets/images/select_fellow_illustration.svg";
import styles from "../css/home.module.css";

const Home = () => 
{
    return(
        <>
            <div className={styles.home}>
                <div className={styles.left}>
                    <div>
                        <p>Hi buddy! </p>
                        <p>
                            Let's find out if you are the next MLH fellow                    
                        </p>
                    </div>
                    <button>
                        start
                    </button>
                </div>
                <div className={styles.right}>
                    <img src={illustration} alt="illustration"/>
                </div>
            </div>
        </>
    )
}

export default Home;