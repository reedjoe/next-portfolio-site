export interface IProject {
    id: string;
    size: 'small' | 'medium' | 'large' | 'x-large';
    title: string;
    description: string;
    image?: IProjectImage;
    url?: string;
};

export interface IProjectImage {
    path: string;
    alt: string;
    width: number;
    position: 'left' | 'right' | 'bottom';
};

export type ProjectListProps = {
    projects: IProject[]
};
