import { IWorkItem } from '../app/core/models/item-work';

export const works: Array<IWorkItem> = [
  {
    title: 'The yellow',
    imageSrc: './assets/images/projects-image/the-yellow.jpg',
    description:
      'This project was made for 2 displays width: 1300px and 640px. The main attention is paid to the development of the ability to work with the terms of reference. Here I used HTML5 and CSS technology. The basic principles of page making were raised in this project.',
    type: 'HTML&CSS',
  },
  {
    title: 'Repair design project',
    imageSrc: './assets/images/projects-image/repair-design-project.jpg',
    description:
      'This project supports responsive web design. Resizing the screen does not spoil the page design. This page supports 3 browsers: Google Chrome, Mozilla Firefox, Microsoft Edge. Here was used the toolkit for automating painful or time-consuming tasks "Gulp" and preprocessor "Sass".',
    type: 'HTML&CSS',
  },
  {
    title: 'Fancy weather',
    imageSrc: './assets/images/projects-image/weather.jpg',
    description: 'This is a weather app. The following technologies were used to implement the application: HTML, CSS, Java script. The architecture of this application is based on the principles of MVC (Model View Controller). This application also used APIs that were provided by different services.',
    type: 'JS',
  },
  {
    title: 'Piskel clone',
    imageSrc: './assets/images/projects-image/piskel-clone.png',
    description:
      'This is an animation editor application. Here you can create an pixel animation and save it on the device. This is my first app where I tried to use Angular. This is the final work from RS 2019 Q3 course.',
    type: 'Angular',
  },
  {
    title: 'Youtube client',
    imageSrc: './assets/images/projects-image/youtube-client.png',
    description:
      'This is a YouTube client application where you can search for information about any video on YouTube. This application uses many of the Angular capabilities such as modules, components, pipes, decorators, interceptors and guards.',
    type: 'Angular',
  },
  {
    title: 'Culture portal',
    imageSrc: './assets/images/projects-image/culture-project.jpg',
    description:
      'This is a final work from RSSchool Angular 2020 Q1 course. You can find information about some Belarusian directors on this portal. It was a team work where the team and I used the GitHub project to organize works and split tasks between team members.',
    type: 'Angular',
  },
  {
    title: 'NodeJS',
    imageSrc: './assets/images/projects-image/nodeJS.jpg',
    description: 'This is the result of my work at RSSchool NodeJS 2020 Q1. This is an API leisure application where I used technologies like express, mongoose and mongoDB. This application works on the principle of CRUD (Create Read Update Delete). 3-layer architecture was used in this app.',
    type: 'NodeJS',
  },
];
