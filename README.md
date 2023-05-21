# Front End Capstone: Spotify Clone

The requirement of this project was to build a copy of a page from Spotify.  The UI should have as much operation as needed to function properly for that page . In addition to having the same look and feel of the original. While working in a larger grup we all needed to handle atleast one component of the site setup.  We also had to use RESTful API calls and use REACT as a basis for building the site.To get full functionality from our site you will need to have a Spotify premium account.




## Installation

- Fork and clone this repo to your local computer (https://github.com/Spooify/spooify)
- open clone in VS Code
- in the terminal cd into server and run npm install to download all dependencies for the server and database.

```bash
  cd server/
  npm install
```

- return to the root folder
- repeat the serve steps for the client folder

```bash
    cd ..
    cd client/
    npm install
```

-  to run this project you will need to get you client ID and client secret from Spotify
```
1) go to https://developer.spotify.com/ and sign in.  
2) then go to the dashboard under your profile picture.
3) click create app button
4) fill out the form
5) inside the redirect URI put http://localhost:3000/callback
6) then click save
7) from the newly created app click settings
```

- The client ID be there with the client secret
- Also click edit to add http://localhost:4000/api/login to the Redirect URIs
- From there add this to your .env   
- Run Docker container and copy the seed and migration files to the /tmp folder created by docker.
- run postgreSQL through VS Code
- create a Database to hold all the data
- initialize the migration and seed file into the database created

```bash
  docker exec -it (docker container ID) bash
  psql -U postgres
  CREATE DATABASE (database name);
  \c (database name)
  \i /tmp/migration.sql
  \i /tmp/seed.sql
```
- from here cd into the server folder
- run the database using nodemon index.js
- to run the client side just run npm run dev to get the client side up and running.

```bash 
nodemon  index.js
npm run dev
```

- from there you will be directed to the loading site at http://localhost:3000
- here you will need to sign in with your Spotify account. ( dont worry you will not be adjusting anything from your spotify account from here.)
- you will be able to play music by clicking on the play button on the songs **ONLY** 
- you can also like songs and they will be added to your liked songs playlist automatically. 


## Tech Stack

**Client:** 
![My Skills](https://skillicons.dev/icons?i=js,html,css,jquery,vscode,vite&theme=dark)

**Server:** 
![My Skills](https://skillicons.dev/icons?i=postgres,nodejs,git,docker&theme=dark)

**Connection:** 
![My Skills](https://skillicons.dev/icons?i=discord&theme=dark)


## Authors

- Nick Bradford [@cnickbradford](https://github.com/cnickbradford)
- Justin McGee [@jrm0527](https://github.com/jrm0527)
- Alex Peterec [@tpeterec](https://www.github.com/tpeterec)
- Tailon Dow [@tdow520](https://www.github.com/tdow520)


## Feedback

Overall, we enjoyed working together to build this project. By collaborating, we realized the effectiveness of team projects and how to manage projects without having to continually check on each other's progress. This experience also helped us understand the complexity and nuances required to build everyday sites.
