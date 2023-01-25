import { FunctionComponent } from "react";
import styles from '../../styles/Project.module.css';
import Project from "./project";
import { ProjectListProps } from "./project.interface";

const ProjectList: FunctionComponent<ProjectListProps> = (props: ProjectListProps) => (
    <div className={styles.projectList}>
        {props.projects.map(project => {
            return <Project key={project.id} {...project} />
        })}
    </div>
);
export default ProjectList;