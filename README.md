# DataNoob
Example of a react web application and a Node.js server to learn data science

## Requirements ##
### Fronted ###
 - [Nodejs](https://nodejs.org/en/) (tested on v6.2)
 -  npm (tested on v3.9.3)

### Backend ###
 - [Nodejs](https://nodejs.org/en/) (tested on v6.2)
 -  npm (tested on v3.9.3)
 -  [docker-image](https://www.docker.com) (tested on v1.11.2 with [docker-machine](https://www.docker.com/products/docker-toolbox))
 -  [R](https://www.r-project.org) with Rscript to interpret codes sent from the frontend
 -  [Python](https://www.python.org) with Rscript to interpret codes sent from the frontend

### Technologies ###
 - [MongoDB](https://www.mongodb.com/fr): it runs on the backend after the start command. I encapsulate into a docker image and seed each time the starting command is ran. The frontend makes request to the backend to get all of the informations about an exercise.
 - [Redux](http://redux.js.org) binded with [React](https://facebook.github.io/react/)
 - [Express](http://expressjs.com)
 
## Installation ##
It's super easy, run the command in the backend and frontend folder: 
```
npm install
```

Finally on each folder (frontend, backend), start the project:
```
npm run start
```

If you want to build the frontend application (for production):
```
npm run build
```
If you have a problem with the binding of the frontend with the backend, check the config.js file on the root of both project and configure the right port and hostname if needed.

### Explanation ###
If you go the the website, you will that you can do two exercise. The first one use the Python language, the second one use the R language. If you completed the exercise, the box on the output will be green and you will see a check on the exercise (navigation bar).

### TODO ###
 - Create a screencast if needed
