# 🚘 Car Shop API
A car dealership management RESTful API developed as a [Trybe](https://www.betrybe.com/) Project

## 💻 About this project
This application is a RESTful CRUD API to car dealership management applying Object-Oriented Programming principles, built in Model-Service-Controller architecture. The services are create, list all, list specific, update specific and delete specific car or motorcycle. The API also has some unit tests implemented.

## 🛠️ Built with
<a href="https://www.chaijs.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/chai.js-323330?style=for-the-badge&logo=chai&logoColor=red" alt="Chai.js" /></a>
<a href="https://www.docker.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" /></a>
<a href="https://expressjs.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" /></a>
<a href="https://jestjs.io" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest" /></a>
<a href="https://mochajs.org" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/mocha.js-323330?style=for-the-badge&logo=mocha&logoColor=Brown" alt="Mocha.js" /></a>
<a href="https://www.mongodb.com/docs/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" /></a>
<a href="https://mongoosejs.com/docs/guide.html" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Mongoose-880000.svg?style=for-the-badge&logo=Mongoose&logoColor=white" alt="Mongoose" /></a>
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" /></a>
<a href="https://sinonjs.org" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/sinon.js-323330?style=for-the-badge&logo=sinon" alt="Sinon.js" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>



## 🎯 Used skills
- OOP concepts: Inheritance, Encapsulation, Abstraction, Polymorphism and Composition
- Implementation of TypeScript Classes, Instances, Attributes, Methods and Objects

## 🏁 Getting started
To start up the application, follow the next steps:

### 🐋 Installing Docker and Docker Compose
As the project is containerized, to run the application you will need to install both softwares. The Docker Compose version supported by the project is 1.29 or higher. You can see [here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) or in the [docs](https://docs.docker.com/compose/install/) how to install it.

### 🌱 Defining enviroment variables:
In project root, create a `.env` file with the following content:
```
MONGO_DB_URL=mongodb://localhost:27017/CarShop
```
### 📦 Creating and starting the application's containers
Two Docker containers must be created in the process. The container with MongoDB service must be named as `car_shop_db` and the container with back-end service must be named as `car_shop`.
In project root, run:
```
docker-compose up -d
```
You can remove the containers running:
```
docker-compose down
```
### ⬇️ Installing the dependencies
You will need to execute `car_shop` container bash inside it.
For it, in project root, run:
```
docker exec -it car_shop bash
```
In container's bash, run:
```
npm run dev
```
## 🛣️ Available endpoints
To use the API services you will can use a web browser or a client for testing APIs, like [Thunder Client](https://www.thunderclient.com) or [Insomnia](https://insomnia.rest/download).
The API endpoints are listed in the table below, as well as some examples of request body before the table.
The default database is empty, so you will need first to seed some data with the first endpoint below.
> You will need database IDs to use some endpoints. MongoDB generate random IDs, thus after registering some data, you will need to consult it in database, which can be done in terminal or using some extension as [MongoDB for VS Code](https://www.mongodb.com/products/vs-code)

Request body example to register or update a car:
```
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```
Request body example to register or update a motorcycle:
```
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.000,
  "category": "Street",
  "engineCapacity": 600
}
```
Services and endpoints:
| Service | Method | Endpoint |
|  :---:  | :----: | :------: |
| Register a car | POST | http://localhost:3001/cars |
| List all cars | GET | http://localhost:3001/cars |
| List specific car | GET | http://localhost:3001/cars/:id |
| Update specific car | PUT | http://localhost:3001/cars/:id |
| Delete specific car | DELETE | http://localhost:3001/cars/:id |
| Register a motorcycle | POST | http://localhost:3001/motorcycles |
| List all motorcycles | GET | http://localhost:3001/motorcycles |
| List specific motorcycle | GET | http://localhost:3001/motorcycles/:id |
| Update specific motorcycle | PUT | http://localhost:3001/motorcycles/:id |
| Delete specific motorcycle | DELETE | http://localhost:3001/motorcycles/:id |


## 🧪 Testing
For testing, optionally, you can stop `car_shop_db` container, by running in a terminal:
```
docker stop car_shop_db
```
To execute the tests, in `car_shop` container's bash, run:
```
npm run test:mocha
```
To execute the tests and see a coverage summary table, run:
```
npm run test:coverage
```
