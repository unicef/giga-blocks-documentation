# Introduction

This is a Giga Documentation Repo.

# System Requirements:

- OS: Linux/Unix, Windows with WSL
- Node Version 18.x

# Dependencies:

- We are using `yarn` as a package manager so we must install it as a global dependencies:
  ```
  npm install -g yarn
  ```
- Command to install dependencies:
  ```
  yarn install
  ```

# Development Environment:

- We can now run the project in development environment:
  ```
  yarn start
  ```
- Above command will start projects in localhost on `Port 3000`.

# Production Environment:

- To run project in production environment:
  ```
  yarn build
  ```
- Above command will generate static build into `build` folder. We can directly run it using:
  ```
  yarn serve
  ```
- We have `Dockerfile` which will copy static build files and serve them using `Nginx`.
