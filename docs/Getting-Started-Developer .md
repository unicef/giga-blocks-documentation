---
id: getting-started-developer
---

# Getting Started Developer
This guide serves as an introductory overview to set up and run the project. Below are the system requirements, dependencies, and installation guidelines necessary to get started with the project setup.

## System Requirements:
* OS: Linux/Unix, Windows with WSL

* Node Version 18.x

## Dependencies:
* We are using `pnpm` as a package manager so we must install it	 as a global dependencies:
	npm install -g pnpm
* Since this is monorepo, there is only one package.json in the root directory of the Repository. So we can directly manage all the dependencies in a single `node_modules` folder.
* Command to install dependencies:
	pnpm install

## Installation Guides:
* We are using `NX` to configure monorepo.
* We are using `pnpm` as a package manager.
* For adding package:

    ```
  pnpm add <package name> -w
     ```

* For running specific apps:
  
    ```
  npx nx <command(serve)> <app name>
    ```

* For running build or lint or test for all apps at once:

    ```
  pnpm run build/test/lint/serve
    ```

* If you want to add new libraries in libs, then simply add library and initialize it inside the library directory with:

    ```
  pnpm init
    ```


* Add above new library to a pnpm package using:
  
    ```
  pnpm add ./libs/<library name> -w
    ```

* For running nx for specific apps or library you can write following syntax:

  ```
  npx nx <command(build,lint,test,serve)> <apps/libs name>
  ```


## Running the project :
* Copy .env.example into .env and add necessary value for all the Keys.
* Make sure Postgres DB and Redis are configured properly.
* We need two Postgres DB. One for App and other for Newsletter.
* Generate Prisma Client at first:

    ```
  pnpm run api:app:generate
    ```

    ```
  pnpm run api:news:generate
    ```

* Run Prisma Migration to setup DBs:

    ```
  pnpm run api:app:migrate
    ```

    ```
  pnpm run api:news:migrate
    ```


* Now, we can start apps in development environment:
  
    ```
  pnpm serve
    ```


* With the above command all 3 apps will start running.
* Remember, we can always serve specific app using:
  
    ```
  pnpm serve:<app_name>
    ```

## Production Build:
* To build all apps:
  
    ```
  pnpm build
    ```

* Remember, we can always build specific app using:
  
    ```
  pnpm build:<app_name>
    ```

There is a Dockerfile for each app. So ultimately all apps will be dockerize to run in production environments.

## Project Cleanup:
* We can clean up all the build folder and node_modules if we want using:

    ```
  pnpm clean
    ```


