import { FunctionComponent } from "react";
import Project from "./project";
import { ProjectListProps } from "./project.interface";

const ProjectList: FunctionComponent<ProjectListProps> = (props: ProjectListProps) => (
    <>
        {props.projects.map(project => {
            return <Project key={project.id} {...project} />
        })}
    </>
)
export default ProjectList;