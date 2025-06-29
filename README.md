# MERN Todo App

A simple Todo application built with the MERN stack (MongoDB, Express, React, Node.js) and Docker Compose.

## Features

- Add and view todos
- Data stored in MongoDB (Docker container)
- React frontend, Node.js/Express backend
- Easy local development with Docker Compose

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running
- (Optional) [Mongo Express](https://hub.docker.com/_/mongo-express) or [MongoDB Compass](https://www.mongodb.com/try/download/compass) for database GUI

## Project Structure

```
mern_todo/
├── client/           # React frontend (with App.js)
│   └── Dockerfile
├── server/           # Node.js/Express backend
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd mern_todo
   ```

2. **Start all services with Docker Compose:**
   ```sh
   docker-compose up --build
   ```

3. **Access the app:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000/todos](http://localhost:5000/todos)
   - MongoDB: `localhost:27017` (for GUI tools)
   - (Optional) Mongo Express: [http://localhost:8081](http://localhost:8081) *(if added to docker-compose.yml)*

## Usage

- Type a todo in the input box and click "Add Todo".
- Todos will appear in the list below.
- Data is persisted in the MongoDB container.

## Example `docker-compose.yml`

```yaml
services:
  mongo:
    image: mongo:5.0
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

  server:
    build: ./server
    ports:
      - "5000:5000"
    depends_on:
      - mongo
    environment:
      - NODE_ENV=development

  client:
    build: ./client
    ports:
      - "3000:3000"
    depends_on:
      - server
    stdin_open: true
    environment:
      - NODE_ENV=development

volumes:
  mongo-data:
```

## Notes

- Make sure Docker Desktop is running before starting the app.
- You do **not** need a MongoDB Atlas/cloud account; everything runs locally.
- For a database GUI, you can add Mongo Express to your `docker-compose.yml` or use MongoDB Compass.

## License

MIT
