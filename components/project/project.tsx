import styles from '../../styles/Project.module.css';
import { IProject } from './project.interface';

const getImagePosition = (pos?: string): string => {
    switch(pos) {
        case 'left':
            return styles.imageLeft;
        case 'right':
            return styles.imageRight;
        case 'bottom':
        default:
            return '';
    }
}

const getProjectSize = (size: string): string => {
    switch(size) {
        case 'small':
            return styles.projectSmall;
        case 'medium':
            return styles.projectMedium;
        case 'large':
            return styles.projectLarge;
        case 'x-large':
            return styles.projectXLarge;
        default:
            return '';
    }
}

const Project = (props: IProject) => (
    <>
        <div className={`${styles.projectWrapper}
            ${getImagePosition(props.image?.position)}
            ${getProjectSize(props.size)}`}>
            <div>
                <h2 className={styles.projectTitle}>
                    {props.title}
                </h2>
                {!!props.url ? <a href={props.url}>Link</a> : null}
                <p className={styles.description}>
                    {props.description}
                </p>
            </div>
            {!!props.image
                ? <img className={styles.image}
                    style={{ ["--image-width" as any]: `${props.image.width}px` }}
                    src={props.image.path}
                    alt={props.image.alt} />
                : null}
        </div>
    </>
);
export default Project;
