# PaintBids
PaintBids is our auction website for the Web Technology hand-in assignment. It is about selling pieces of classical art on pretty affordable prices.
Of course, it is a fake one and nobody is going to take your money, nor are you going to receive Mona Lisa for a little over 200 euros, so do not be afraid to place a bid to test the functionality.

##Description
-Users :
The users are hardcoded in the backend with hashed passwords (the actual password is commented out for testing purposes), and they are with similar structure: test1@test.com (password: @Password1), 
all the way to 5.

In the controllers all CRUD actions can be performed, and the router restricts the editing and deletion of a user only for logged in administrators.
A new user can be created with the desired e-mail, username, password and authorization with a post request.



## Running the project

To start the backend write the following commands in the terminal:
```bash
npm install
npm run start
```

##Developers
The project has been created by the hard work of:

- Quan Trung Nguyen - 490848@student.saxion.nl

- Mira Yankova Ilieva - 497124@student.saxion.nl
