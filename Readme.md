User - Modules

A backend project with user modules of signin, signup, show user details and edit user details created using nodejs, express, mongodb and passport.

Requirements
Following needs to be installed before running the project.
Node
MongoDB

Common setup
Clone the repo  and install the dependencies.

git clone 
npm install

Set the MONGO_URI in env variable

To start the express server, run the following
npm run start

API information

1) Signin - POST -  http://localhost:3000/auth/login
Required Body - email, password

2) SignUp - POST - http://localhost:3000/users/signup
Required Body - first_name, last_name, email, password, profile_img(Path)

3) Show user details (visible only after successful login) - GET http://localhost:3000/users

4) Edit User Details (only after successful login) - PUT http://localhost:3000/users/<user id>
Body - Fields to be updated

5) Logout - GET http://localhost:3000/logout