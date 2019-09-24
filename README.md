# Better professor app Back-end

An app for professors and teachers to better track their students. 

NPM Scripts

npm i : Inststalls project dependencies

npm start : Starts the server at port 5000

npm run server : Starts the development server in watch mode at port 5000

API Documentation

Better Professor is hosted on Heroku and can be found at
https://better-professor-backend.herokuapp.com

/users/register   POST endpoint for registering required inputs are username, password, first_name and last_name, this will return the new user object and will look something like this:

{
  "id": 3,
  "username": "flake",
  "password": "this will be a hashed password",
  "first_name": "flake",
  "last_name": "jake"
}

/users/login  POST endpoint for logging in with a registered user. Required inputs are username and password. This will return the id of the professor/user and the token

students/user/:id GET endpoint for displaying the list of students that belong to the logged in userId. So the :id in the endpoint is the user id.

/students POST endpoint for adding a student. required fields are student_name, major, and user_id













