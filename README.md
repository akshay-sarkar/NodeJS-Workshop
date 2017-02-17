NodeJS Workshop
===============

# Workshop 1
### Installation
For each lesson, make sure to run
`npm install`

Once you have your `node_modules` installed, just run
`node index.js`

# Workshop 2
Introduction to Express JS

# Workshop 3
Create users and list them all in memory

# Workshop 4
Now we're getting somewhere. This project structure is a little more 
of what you would see in the real world. The folder contains an `src` folder 
told hold all of our code. This allows us to seperate code from project 
build files like `.gitignore` and `node_modules`.

**NOTE:**
To run this run `npm install` and then `npm start`

### Setup MongoDB
- [Free remote MongoDB Hosting](https://mlab.com/)
- [Run MongoDB Locally](https://docs.mongodb.com/manual/administration/install-community/)

### WTF is module.export??
So we've used `require('...')` to import files and we're getting to the point 
where there is too much code for one file, so we need to seperate it a little bit.

Using `module.export = somedata` means that by requiring that file, I will automatically 
have complete access to that function, object, etc.

If you plan on making a utility class you can do things like

`module.exports.getAllUsers = getAllUsers` 

`module.exports.deleteUser = deleteUser`

Where `getAllUsers` and `deleteUser` are both functions referenced from 
earlier in the code.

### Express Router
Now that we have a large codebase, we should also seperate our routes.

`routes/index.js` will hold our core groups such as `users`, and each route file 
will hold the API methods for each _group_, such as create, list, get, update, delete.

We use this `Router` class so that we do not have to include our `server.js` file to 
reference the entire app. The router class lets use this _group_ of our api as a 
`middleware`. We'll dive deeper into this later, but middlewares are the real beauty of 
ExpressJS.