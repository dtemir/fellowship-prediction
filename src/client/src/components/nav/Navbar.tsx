import { Link } from "react-router-dom";
import styles from "../../css/nav.module.css";

const navItems = 
[
    {name:'home',path:'/'},
    {name:'about',path:'/about'}
]

const Navbar = () => 
{
    return(
        <>
            <nav className={styles.nav}>
                <Link to='/'>
                    <div className={styles.logo}>
                            <h1>Fellow Prediction</h1>
                    </div>
                </Link>

                <ul>
                    {
                        navItems.map(item=>{
                            return(
                                <li key={item.name}>
                                    <Link to={item.path}>{item.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </> 
    )
}

export default Navbar;