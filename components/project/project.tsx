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
                <div className={styles.projectHeader}>
                    <h2 className={styles.projectTitle}>
                        {props.title}
                    </h2>
                    {!!props.url
                        ? <a href={props.url}>
                            <svg width="32px" height="32px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M26,26H6V6H16V4H6A2.002,2.002,0,0,0,4,6V26a2.002,2.002,0,0,0,2,2H26a2.002,2.002,0,0,0,2-2V16H26Z"/>
                                    <path d="M26,26H6V6H16V4H6A2.002,2.002,0,0,0,4,6V26a2.002,2.002,0,0,0,2,2H26a2.002,2.002,0,0,0,2-2V16H26Z"/>
                                </g>
                                <polygon points="26 6 26 2 24 2 24 6 20 6 20 8 24 8 24 12 26 12 26 8 30 8 30 6 26 6"/>
                                <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" style={{ ["fill" as any]: `none` }} width="32" height="32"/>
                            </svg>
                        </a>
                        : null}
                </div>
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
