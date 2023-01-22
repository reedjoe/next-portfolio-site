import { IProject } from "./project.interface";

export const projectData: IProject[] = [
    {
        id: '1',
        title: 'Example 2D animation',
        description: 'This is an example description for a 2D animation project'
    },
    {
        id: '2',
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
        title: 'Another project',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        url: 'www.google.com'
    },
    {
        id: '4',
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
        title: 'Another project',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        url: 'www.google.com'
    },
    {
        id: '6',
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
        title: 'Another project',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        url: 'www.google.com'
    },
    {
        id: '8',
        title: 'Another project',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        url: 'www.google.com'
    }
];
