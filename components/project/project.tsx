import styles from '../../styles/Home.module.css';
import { IProject } from './project.interface';

const Project = (props: IProject) => (
    <>
        <div className={styles.projectWrapper}>
            <h2 className={styles.projectTitle}>
                { props.title }
            </h2>
            <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <p>
                    { props.description }
                </p>
            </a>
        </div>
    </>
)
export default Project;
