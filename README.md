# 🚘 Car Shop API
A car dealership management RESTful API developed as a [Trybe](https://www.betrybe.com/) Project

## 💻 About this project
This application is a RESTful CRUD API to car dealership management applying Object-Oriented Programming principles.

## 🛠️ Built with
<a href="https://www.docker.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" /></a>
<a href="https://www.mongodb.com/docs/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" /></a>
<a href="https://mongoosejs.com/docs/guide.html" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Mongoose-880000.svg?style=for-the-badge&logo=Mongoose&logoColor=white" alt="Mongoose" /></a>
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
### 📦 Creating and starting the application's containers:
In project root, run:
```
docker-compose up -d
```
You can remove the containers running:
```
docker-compose down
```
### ⬇️ Installing the dependencies
In project root, run:
```
docker exec -it car_shop bash
```
In container's bash, run:
```
npm run dev
```


