import styles from '../../styles/Project.module.css';
import { IProject } from './project.interface';

const Project = (props: IProject) => (
    <>
        <div className={styles.projectWrapper}>
            <h2 className={styles.projectTitle}>
                { props.title }
            </h2>
            {!!props.url ? <a href={props.url}>Link</a> : null}
            <p className={styles.description}>
                { props.description }
            </p>
            {!!props.image ? <img className={styles.image} src={props.image.path} alt={props.image.alt} /> : null}
        </div>
    </>
);
export default Project;
