import { IProject } from "./project.interface";

export const projectData: IProject[] = [
    {
        id: '1',
        size: 'large',
        position: 'right',
        title: 'Example 2D animation',
        description: [
            'This is an example description for a 2D animation project',
            'Please ignore all the images of hawks, I needed some copyright free images to use as placeholders and some reason \'hawks\' were the first thing I thought off',
            'Take it up with God if you must',
        ],
        image: {
            path: 'hawk_3.avif',
            alt: 'Example desciption for hawk 2',
            width: 200,
            position: 'right'
        }
    },
    {
        id: '2',
        size: 'medium',
        position: 'left',
        title: 'Example 3D animation',
        description: ['This is an example description for a 3D animation project'],
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
        position: 'left',
        title: 'Another project',
        description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'],
        url: 'www.google.com'
    },
    {
        id: '4',
        size: 'large',
        position: 'right',
        title: 'Another project',
        description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'],
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
        position: 'left',
        title: 'Another project',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Ut enim ad minim veniam',
        ],
        url: 'www.google.com'
    },
    {
        id: '6',
        size: 'full',
        position: 'left',
        title: 'Another project',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Ut enim ad minim veniam',
        ],
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
        position: 'right',
        title: 'Another project',
        description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'],
        url: 'www.google.com'
    },
    {
        id: '8',
        size: 'small',
        position: 'left',
        title: 'Another project',
        description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'],
        url: 'www.google.com'
    }
];
