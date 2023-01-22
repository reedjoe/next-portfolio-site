import { IProject } from "./project.interface";

export const projectData: IProject[] = [
    {
        id: '1',
        size: 'small',
        title: 'Example 2D animation',
        description: 'This is an example description for a 2D animation project'
    },
    {
        id: '2',
        size: 'medium',
        title: 'Example 3D animation',
        description: 'This is an example description for a 3D animation project',
        image: {
            path: 'next.svg',
            alt: 'Example desciption for image',
            width: 200,
            position: 'bottom'
        }
    },
    {
        id: '3',
        size: 'small',
        title: 'Another project',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        url: 'www.google.com'
    },
    {
        id: '4',
        size: 'large',
        title: 'Another project',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        url: 'www.google.com',
        image: {
            path: 'hawk_1.avif',
            alt: 'Example desciption for hawk 1',
            width: 200,
            position: 'left'
        }
    },
    {
        id: '5',
        size: 'small',
        title: 'Another project',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        url: 'www.google.com'
    },
    {
        id: '6',
        size: 'x-large',
        title: 'Another project',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        url: 'www.google.com',
        image: {
            path: 'hawk_4.avif',
            alt: 'Example desciption for hawk 4',
            width: 400,
            position: 'right'
        }
    },
    {
        id: '7',
        size: 'medium',
        title: 'Another project',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        url: 'www.google.com'
    },
    {
        id: '8',
        size: 'small',
        title: 'Another project',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        url: 'www.google.com'
    }
];
