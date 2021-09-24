import { motion } from "framer-motion";
import { pageVariant } from "../animation/variants";
import styles from "../css/about.module.css";

const features = 
[
    'Commits',
    'Contributions',
    'Followers',
    'Forks',
    'Issues',
    'Organizations',
    'Repos',
    'Stars',
]

const techstack = 
[
    {aspect:'frontend',tech:['typescript','react.js','tailwindcss']},
    {aspect:'backend',tech:['python','flask']},
    {aspect:'data analysis & ML',tech:['python','bentoML']},
    {aspect:'CI/CD',tech:['heroku','firebase']}
]

const About = () => 
{
    return(
        <>
            <motion.div 
                className={styles.about}
                variants={pageVariant}
                initial='hidden'
                animate='visible'
                exit='exit'

            >
            <section className={styles.aboutProject}>
                <h1 className={styles.sectionTitle}>About the project</h1>
                <div>
                    <h4>
                        Analyzes your GitHub Profile and presents you with a report on how likely you're to become the next MLH Fellow!
                    </h4>
                    <p>
                        Provides you with a comprehensive analysis on the following features of your profile:
                    </p>
                    <ul>
                        {
                            features.map(feature=>{
                                return(
                                    <li>{feature}</li>
                                )
                            })
                        }
                    </ul>
                    <p>
                        And gives you a comprehensive score of how similar your GitHub Profile is to an average MLH Fellow's GitHub.

                        It also shows your statistics in a user-friendly data visualization format for you to gauge the range of your skills and become the next MLH Fellow!
                    </p>
                </div>
            </section>
            
            <section className={styles.techStack}>
                <h1 className={styles.sectionTitle}>
                    project stack
                </h1>
                <div>
                    {
                        techstack.map(stack=>{
                            return(
                               <div className={styles.stackAspect}>
                                    <h3>{stack.aspect}</h3>
                                    
                                    <ul>
                                    {
                                       stack.tech.map(tech=>{
                                           return<li>{tech}</li>
                                       })
                                    }
                                    </ul>
                               </div>
                            )
                        })
                    }
                </div>
            </section>

            </motion.div>
        </>
    )
}

export default About;