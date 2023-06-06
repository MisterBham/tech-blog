# Tech Blog

![NodeJS](https://img.shields.io/badge/-NodeJS-339933?logo=node.js&logoColor=white&style=flat)
![Express](https://img.shields.io/badge/-Express-000000?logo=Express&logoColor=white&style=flat)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=MySQL&logoColor=white&style=flat)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?logo=Sequelize&logoColor=white&style=flat)
![Insomnia](https://img.shields.io/badge/Insomnia-4000BF?logo=Insomnia&logoColor=white&style=flat)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?logo=Nodemon&logoColor=white&style=flat)
![.env](https://img.shields.io/badge/.ENV-ECD53F?logo=.ENV&logoColor=white&style=flat)

## Table of Contents 
* [Description](#Description) 

* [Installation](#Installation) 

* [Usage](#Usage) 

* [License](#License) 

* [Contributing](#Contributing) 

* [Testing](#Testing) 

* [Questions](#Questions) 

* [Screenshots](#Screenshots) 

### Description
CMS styled blogsite where developers can read programming articles and contribute some themselves.

### Installation
1. Project is setup to use an .env file to protect sensitive database usernames and passwords. Using the supplied .env.EXAMPLE file in root directory, rename file to be that of .env (removing .EXAMPLE) and fill in required variables of DB_USER and DB_PASSWORD with your own mySQL username and password.
2. Run mySQL in root folder. `source db/schema.sql` to setup working database.
3. `npm install` into root directory, to install required application dependencies.
    -   [optional] npm run seed to seed database with pre-supplied data.
4. `npm start` to start application.

### Usage
Available npm scripts:
- start
- watch
- seed

Available /api routes:
/chirp
/comment
/member

Cloud hosted full-stack application can be used via https://technologyblog.herokuapp.com/.

### License
Further information regarding this specific license can be found via: https://opensource.org/license/mit/. 

![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)

### Contributing
Open <a href="https://github.com/MisterBham/tech-blog/issues">Issues</a> on the Github repo!

### Testing
No unit testing provided at this time.

### Questions
Should you have any further questions, please reach the developer at: misterbham.dev@gmail.com. </br> 
GitHub: <a href="https://github.com/MisterBham">MisterBham</a> </br> 

### Screenshots

