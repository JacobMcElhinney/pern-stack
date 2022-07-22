# PERN-Stack
A full stack demo app, built using the PERN (Postgres Express React Node) stack, to demonstrate a basic understanding of the technologies involved.

## Project Setup
1. [Back-End Project](#1.-back-end-project)    
  1.1 [Install Dependencies](#1.1-install-dependencies)  
  1.2 [Create Environment Variables](#1.2-environment-variables)  
  1.3 [Containerise Database](#1.3-containerise-database)  
  1.4 [Start Application](#1.4-start-application) 
2. [Front-End Project](#2.-front-end-project)  
  2.1 [Install Dependencies](#2.1-install-dependencies)  
  
## Back-End Project


### 1.1 Install Dependencies
After pulling down the *repository*, navigate to the **package.json** in the **backend** folder and run `yarn install`:
```
.
├── frontend
│   └── package.json
├── backend
│   └── package.json
└── README.md
```
```pwsh
# Navigate to package.json
cd ./backend/

# Install packages using Yarn Package Manager
yarn install
```


### 1.2 Create Environment variables



```pwsh
# create .env file in the backend folder
ni .env
```

Add or replace the following *example* values in the file:
```
POSTGRES_NAME=postgres
POSTGRES_USER=admin
POSTGRES_PASSWORD=password
POSTGRES_DATABASE=postgres
POSTGRES_PORT=5432
EXPRESS_PORT=3000
NODE_ENV=development
``` 

>**Note**  
> Be sure to always include your `.env.<Environment>` files in a `.gitignore` file, if they hold *sensitive data* (**application secrets**)!


### 1.3 Containerise Database
Using *Docker-Compose* allows us to containerise our database, speed up development and future deployment. Amongst several other benefits *Docker-Compose* allows for better control over the development environment and it eliminates the need to install PostgreSQL (relational database management system) on your host machine.

>**Note**
> The **.env** file is loaded by default as long as it is at the *same level* as the **docker-compose.yaml** file and *name exactly matches*: `.env`. If you want to name it differently or store it at another location (using the `--env-file` option), please refer to the [documentation](https://docs.docker.com/compose/environment-variables/#using-the---env-file--option). If no .env file is provided, you are likely to encounter the following error:`[ERROR] 12:05:00 Error: SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string`, since sequelize will not be provided the values needed to connect to the database.

Using default .env filename and location (`./backend/.env`)
```pwsh
# Start the database in detached mode (background process)
docker-compose up -d
```

>**Note**  
>If you encounter the *Error*: `Couldn't connect to Docker daemon`, make sure you've docker daemon is running by starting [docker desktop](https://www.docker.com/products/docker-desktop/). Also note that `.yaml` files are *whitespace sensitive*, carefully review you docker-compose.yaml and .env files or and `docker-compose run db env` to make sure they are loaded. 


| Command                                 | Description                               |
|-----------------------------------------|-------------------------------------------|
| `docker ps`                             | Output list of running containers         |
| `docker inspect <CONTAINER_ID>`         | Inspect individual container              |
| `docker-compose run <SERVICE_NAME> env` | Output environment variables for service  |
| `docker-compose stop`                   | Stop all containers                       |
| `docker-compose down --volumes`         | Remove all containers and volumes         |


### 1.4 Start Application
After: 
- installing dependencies  
- creating environment variables  
- creating a containerised server and database  

...we can finally *build* and *start* the application.

```js
  "scripts": {
    "start": "node ./build/index.js",
    "build": "npx tsc",
    "dev": "tsnd --respawn ./src/index.ts"
  }
```

```pwsh
# Transpile and bundle the application
yarn build

# start the application
yarn dev
```

Expected output (shortened):
```
yarn run v1.22.15
$ tsnd --respawn ./src/index.ts
[INFO] 02:57:21 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.1, typescript ver. 4.7.4)
Executing (default): SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'Posts'
...Server listening on port 3000
```

Sequelize will now have created the database and tables for us based on our entity models. Our api and database are ready to process requests. 

---

## Front-End Project

### Install Dependencies

- navigate to the **package.json** in the **frontend** folder and run `yarn install`:
- run `yarn build` to transpile the application
- run `yarn dev` to start the application

>**Note**  
> Both the docker container (server & db) and the api (node/express) need to be running for the application to work. The react-redux application is running on port 3001, when using the `yarn dev` command, to avoid port conflicts with the api.

---
PROJECT SETUP COMPLETE :tada:
