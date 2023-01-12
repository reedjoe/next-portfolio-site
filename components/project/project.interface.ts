export interface IProject {
    id: string;
    title: string;
    description: string;
    imagePath?: string;
    url?: string;
};

export type ProjectListProps = {
    projects: IProject[]
};
