import { IWorkItem } from '../app/core/models/item-work';

export const works: Array<IWorkItem> = [
  {
    order: 1,
    title: 'The yellow',
    imageSrc: './assets/images/projects-image/the-yellow.jpg',
    description:
      'This project was made for 2 displays width: 1300px and 640px. The main attention is paid to the development of the ability to work with the terms of reference. Here I used HTML5 and CSS technology. The basic principles of page making were raised in this project.',
    type: 'HTML&CSS',
    fullDescription:
      'This is my first project on the RSSchool 2019 Q3. Here you can see my skills in html5 and css3. Here were considered the basic principles of building pages.\n' +
      'The reference point here is a successful comparison via Pixel Perfect extension and the development of ability to work with the terms of reference.\n' +
      '"Perfect" means markup items are identcal to image layout pixel to pixel.\n' +
      'Browser Support: Google Chrome, Mozilla Firefox, Microsoft Edge. It uses technologies such as flex and grid to align blocks. This template has an adaptive design.\n' +
      'One point for displays width of 1300px, a second point for a width of 640px.\n' +
      'You can see the code of this project by clicking on the link GithHub, or you can see the production of this works by clicking on the link Netlify. ',
    githublink: 'https://github.com/Evgeny-Kravchenko/theyalow/tree/gh-pages',
    deploylink: 'https://the-yellow.netlify.app'
  },
  {
    order: 2,
    title: 'Repair design project',
    imageSrc: './assets/images/projects-image/repair-design-project.jpg',
    description:
      'This project supports responsive web design. Resizing the screen does not spoil the page design. This page supports 3 browsers: Google Chrome, Mozilla Firefox, Microsoft Edge. Here was used the toolkit for automating painful or time-consuming tasks "Gulp" and preprocessor "Sass".',
    type: 'HTML&CSS',
    fullDescription:
      'This project supports responsive web design and it will look good on different screens starting at 375px.\n' +
      'Here, experience was gained in building complex layouts. Creating the structure of this project was done using HTML5.\n' +
      'Work with styles was carried out using CSS3, preprocessor Sass. Here you can see some animations which were created with @keyframes.\n' +
      'Here was used the toolkit for automating painful or time-consuming tasks "Gulp". This page works good in Google Chrome, Mozilla Firefox, Microsoft Edge.\n' +
      'The BEM naming convention was applied in this project.\n' +
      'You can see the code of this project by clicking on the link GithHub, or you can see the production of this works by clicking on the link Netlify. ',
    githublink: 'https://github.com/Evgeny-Kravchenko/repair-design-project/tree/gh-pages',
    deploylink: 'https://repair-design-project-evgen.netlify.app'
  },
  {
    order: 3,
    title: 'Fancy weather',
    imageSrc: './assets/images/projects-image/weather.jpg',
    description:
      'This is a weather app. The following technologies were used to implement the application: HTML, CSS, Java script. The architecture of this application is based on the principles of MVC (Model View Controller). This application also used APIs that were provided by different services.',
    type: 'JS',
    fullDescription: '',
    githublink: 'https://github.com/rolling-scopes-school/evgeny-kravchenko-RS2019Q3/tree/fancy-weather/fancy-weather',
    deploylink: 'https://evgen-fancy-weather.netlify.app'
  },
  {
    order: 4,
    title: 'Piskel clone',
    imageSrc: './assets/images/projects-image/piskel-clone.png',
    description:
      'This is an animation editor application. Here you can create an pixel animation and save it on the device. This is my first app where I tried to use Angular. This is the final work from RS 2019 Q3 course.',
    type: 'Angular',
    fullDescription: '',
    githublink: 'https://github.com/rolling-scopes-school/evgeny-kravchenko-RS2019Q3/tree/simple-piskel-clone/simple-piskel-clone',
    deploylink: 'https://piskel-clone-evgen.netlify.app/'
  },
  {
    order: 5,
    title: 'Youtube client',
    imageSrc: './assets/images/projects-image/youtube-client.png',
    description:
      'This is a YouTube client application where you can search for information about any video on YouTube. This application uses many of the Angular capabilities such as modules, components, pipes, decorators, interceptors and guards.',
    type: 'Angular',
    fullDescription: '',
    githublink: 'https://github.com/Evgeny-Kravchenko/youtube-client/tree/rxjs-observable-httpclient-task/youtube-client',
    deploylink: 'https://youtube-task.netlify.app/'
  },
  {
    order: 6,
    title: 'Culture portal',
    imageSrc: './assets/images/projects-image/culture-project.jpg',
    description:
      'This is a final work from RSSchool Angular 2020 Q1 course. You can find information about some Belarusian directors on this portal. It was a team work where the team and I used the GitHub project to organize works and split tasks between team members.',
    type: 'Angular',
    fullDescription: '',
    githublink: 'https://github.com/rss-group-6/culture-portal',
    deploylink: 'https://theater-directors.netlify.app/'
  },
  {
    order: 7,
    title: 'NodeJS',
    imageSrc: './assets/images/projects-image/nodeJS.jpg',
    description:
      'This is the result of my work at RSSchool NodeJS 2020 Q1. This is an API leisure application where I used technologies like express, mongoose and mongoDB. This application works on the principle of CRUD (Create Read Update Delete). 3-layer architecture was used in this app.',
    type: 'NodeJS',
    fullDescription: '',
    githublink: 'https://github.com/Evgeny-Kravchenko/nodejs-course-template',
    deploylink: ''
  },
];
