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
    deploylink: 'https://the-yellow.netlify.app',
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
    githublink:
      'https://github.com/Evgeny-Kravchenko/repair-design-project/tree/gh-pages',
    deploylink: 'https://repair-design-project-evgen.netlify.app',
  },
  {
    order: 3,
    title: 'Fancy weather',
    imageSrc: './assets/images/projects-image/weather.jpg',
    description:
      'This is a weather app. The following technologies were used to implement the application: HTML, CSS, Java script. The architecture of this application is based on the principles of MVC (Model View Controller). This application also used APIs that were provided by different services.',
    type: 'JS',
    fullDescription:
      'Technologies such as HTML5, CSS3, and pure Java Script were used to develop this application. The application consists of four functional blocks:' +
      'control block, weather for today, weather for 3 days and geolocation data. The control block contains the following features: the button to upgrade the background image,' +
      'the button to switch language (ru/be/en), the button to switch temperature unit and search form to search weather of other cities. The weather for today block shows the name of town, ' +
      'country name, current date (a day of the week in short format, day, month), time (hours, minutes, seconds), temperature in the current interval, weather description, weather icon.' +
      'The weather for next three days block shows a day of a week in full format,  an average temperature, the weather icon. The geolocation data block shows your coordinates (latitude and longitude) and a map.' +
      'The MVC (Model View Controller) was used to built the architecture of this application). The main functionality of this application is built on the APIs of other services.',
    githublink:
      'https://github.com/rolling-scopes-school/evgeny-kravchenko-RS2019Q3/tree/fancy-weather/fancy-weather',
    deploylink: 'https://evgen-fancy-weather.netlify.app',
  },
  {
    order: 4,
    title: 'Piskel clone',
    imageSrc: './assets/images/projects-image/piskel-clone.png',
    description:
      'This is an animation editor application. Here you can create an pixel animation and save it on the device. This is my first app where I tried to use Angular. This is the final work from RS 2019 Q3 course.',
    type: 'Angular',
    fullDescription:
      'This is an animation editor application.  Here you can create an pixel animation. The workplace for drawing frames is' +
      'a technology such as HTML5 Canvas. Using tools such as a pencil, paint bucket, line, color picker, and eraser allows you to create frames that will be used to create animation. ' +
      'In the upper right corner there is a small window where you can see the preview animation. Also you can set fps in this window. ' +
      'You can open an animation on the full screen with help of "Full screen" button. This application has the ability: to drag and drop frame,\n' +
      'copy the previously created frame and delete it using special buttons. You can export the result in apng format after creating the animation.\n' +
      "Here was used HTML features such as the localstorage. This means that you won't lose your session when you have done some work and then closed the application tab\n" +
      'because all work is saved in the localstorage and when you run the application again you will see your previous work. ' +
      'Using tools and other functions is available by pressing hot keys, and there is a way to redefine these keys. This project is my course work in the RSSchool 2019 Q3 (Java Script)\n' +
      'and here I have used all my skills which I got in that course.',
    githublink:
      'https://github.com/rolling-scopes-school/evgeny-kravchenko-RS2019Q3/tree/simple-piskel-clone/simple-piskel-clone',
    deploylink: 'https://piskel-clone-evgen.netlify.app/',
  },
  {
    order: 5,
    title: 'Youtube client',
    imageSrc: './assets/images/projects-image/youtube-client.png',
    description:
      'This is a YouTube client application where you can search for information about any video on YouTube. This application uses many of the Angular capabilities such as modules, components, pipes, decorators, interceptors and guards.',
    type: 'Angular',
    fullDescription:
      'This project is my first full introducing to Angular 2+. It was created during my studing at the RSSchool 2020 Q1 (Angular) courses.\n' +
      'Using this application you can find information about a video that is hosted on YouTube.\n' +
      'Here was used almost all of Angular concepts.\n' +
      "When you run the app it'll open an autorization page. If you don't log in you won't be able to use the app (you can tap all you want because this authorization is fake).\n" +
      "The Angular concept 'guard' allows us to implement this feature.\n" +
      'When the results of search will be shown you can see a border-bottom that has a collor (red, green, blue). The color depends on how old the video is.\n' +
      'This feature was made using a direcive. You can sort videos by count of views, count of likes and by match of typing text. Pipes have helped to realize this feature.\n' +
      'You can see the code of this project by clicking on the link GithHub, or you can see the production of this works by clicking on the link Netlify. ',
    githublink:
      'https://github.com/Evgeny-Kravchenko/youtube-client/tree/rxjs-observable-httpclient-task/youtube-client',
    deploylink: 'https://youtube-task.netlify.app/',
  },
  {
    order: 6,
    title: 'Culture portal',
    imageSrc: './assets/images/projects-image/culture-project.jpg',
    description:
      'This is a final work from RSSchool Angular 2020 Q1 course. You can find information about some Belarusian directors on this portal. It was a team work where the team and I used the GitHub project to organize works and split tasks between team members.',
    type: 'Angular',
    fullDescription:
      'This project is my course work in the RSSchool 2020 Q1 (Angular). The main goal of this project was working in groups. We had to develop a culture portal of Belarus.\n' +
      'In our case the theme of culture portal was belarussian directors. Our team used the GitHub project to split the project into tasks and organize our work.\n' +
      'Here was consolidated knowledge of Angular and gained knowledge of team work. Besides Angular concepts CMS "Contentful" was used here to manage content.\n' +
      'This portal has 3 languages between which you can switch (Ru, en. be). The library "i18n" was used to implement this feature.\n' +
      'My taking part in this project is the header component, description component with animation, introducing \'i18n\' into the project, introducing "Contentful" into the project,\n' +
      'add fonts and bootstrap into the project, creating lazy-loaded modules.\n' +
      'You can see the code of this project by clicking on the link GithHub, or you can see the production of this works by clicking on the link Netlify. \n',
    githublink: 'https://github.com/rss-group-6/culture-portal',
    deploylink: 'https://culture-portal-evgen.netlify.app/',
  },
  {
    order: 7,
    title: 'NodeJS',
    imageSrc: './assets/images/projects-image/nodeJS.jpg',
    description:
      'This is the result of my work at RSSchool NodeJS 2020 Q1. This is an API leisure application where I used technologies like express, mongoose and mongoDB. This application works on the principle of CRUD (Create Read Update Delete). 3-layer architecture was used in this app.',
    type: 'NodeJS',
    fullDescription:
      'This is my course work in RSSchool 2020 Q1 (Node JS). If you follow the link on GitHub, you will see the express REST service. The Mongo DB database is connected to this application. ' +
      'This application works on the principle of CRUD (Create Read Update Delete). 3-layer architecture was used in this app. Information about requests and errors saves in the special file. ' +
      'To interact with MongoDB, ODM Mongoose was used. This application is similar to the GitHub or Trello project. First of all, you must be logged in. If the user is not in the database, you will receive an error. ' +
      'When you log in, you can create, update, delete and receive users. You can also create task boards and tasks themselves. You can see the code of this project by clicking on the link GithHub.',
    githublink: 'https://github.com/Evgeny-Kravchenko/nodejs-course-template',
    deploylink: '',
  },
  {
    order: 8,
    title: 'Todo app',
    imageSrc: './assets/images/projects-image/todo-app-react.jpg',
    description:
      'This is my first React application. I have considered basic blocks such as components, props, state, shadow DOM, custom events, jsx, functional components, classes-components.',
    type: 'React',
    fullDescription:
      'This is my first React application. I have considered basic blocks such as components, props, state, shadow DOM, custom events, jsx, functional components, classes-components. ' +
      "I didn't use 'create react app' in this project, because I was interested in to create basic structure of app by myself. Also I used the library 'prop-types' to type the object 'props'.",
    githublink: 'https://github.com/Evgeny-Kravchenko/React-todo-list',
    deploylink: 'https://evgen-react-todo.netlify.app',
  },
  {
    order: 9,
    title: 'Star Wars',
    imageSrc: './assets/images/projects-image/sw.jpg',
    description:
      'This is an apllication where you can search various information about star wars. This app works with APIs from others sites. This API provides information about Star Wars.',
    type: 'React',
    fullDescription:
      'This is an apllication where you can search various information about star wars. This app works with APIs from others sites. This API provides information about Star Wars. I have considered various patterns such as High Order Component, Composition. Also in this app was considered lifecycle hooks (componentDidMount, componentDidUpdate, etc.). Router was covered in this app too. To catch different errors was created a special component ErrorBoundary and ErrorIndicator. To make a functional component with state and lifecycle hooks instead class component was used hooks useState, useEffect. etc. You can see the code of this project by clicking on the link GithHub, or you can see the production of this works by clicking on the link Netlify.',
    githublink: 'https://github.com/Evgeny-Kravchenko/star-db-react',
    deploylink: 'https://evgen-star-wars.netlify.app',
  },
];
