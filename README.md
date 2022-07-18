# PERN-Stack
A full stack demo app, built using the PERN (Postgres Express React Node) stack, to demonstrate a basic understanding of the technologies involved.

## Project Setup
1. [Back-End Project](#back-end-project)  
  1.1 [Install Dependencies](#install-dependencies)
3. [Third Example](#third-example)
4. [Fourth Example](#fourth-examplehttpwwwfourthexamplecom)

### Example2
### Third Example
### [Fourth Example](http://www.fourthexample.com) 


## Back-End Project

### Install Dependencies
After pulling down the *repository*, navigate to the **package.json** in the **back-end** folder and run `yarn install`:
```
.
├── front-end
│       └── package.json
├── back-end
│       └── package.json
└── README.md
```
```pwsh
# Navigate to package.json
cd ./back-end/

# Install packages using Yarn Package Manager
yarn install
```
### Environment variables

As the secrets kept within the `.env` file are harmless *example values* - for demonstration purposes - the file has not ben added to `.gitignore`, to speed up the setup process.
>**Note**  
> Be sure to always include your `.env.<Environment>` files if they hold *sensitive data* (**application secrets**)!

This demo application uses the following *example environment variables*:
```
POSTGRES_NAME=postgres
POSTGRES_USER=admin
POSTGRES_PASSWORD=password
POSTGRES_DATABASE=postgres
POSTGRES_PORT=5432
EXPRESS_PORT=3000
NODE_ENV=development
``` 


### Install PostgreSQL Using Docker-Compose 
Using *Docker-Compose* allows us to containerise our database, speed up development and deployment. Amongst several other benefits *Docker-Compose* allows for better control over the development environment as it eliminates the need to install the database on you host machine.





>**Note**  
>If you encounter the *Error*: `Couldn't connect to Docker daemon`, download *Docker Desktop* [here](https://www.docker.com/products/docker-desktop/). 




