# PaintBids
PaintBids is our auction website for the Web Technology hand-in assignment. It is about selling pieces of classical art on pretty affordable prices.
Of course, it is a fake one and nobody is going to take your money, nor are you going to receive Mona Lisa for a little over 200 euros, so do not be afraid to place a bid to test the functionality.

## Description
The web application consists mainly of five pages:
 1. A log-in page, that works only with the accounts hardcoded in the backend data 
 2. A sign-up page, where an account can be made and be valid until the application is restarted
 3. A home page, where a list of all paintings being sold is show with 4 auction items per page
 4. Upon clicking on the painting of interest a custom page for the specific item is shown with a table of all the bids and the ability to place a bid yourself and delete your bid
    (deleting other's bids would not work, unless you're an admin)
    
 5. An admin page with a list of all the auction items, from where admins can delete and edit them as well as the ability to add a new painting for auction 
    (same as making an account, the changes are only going to exist until the application is restarted). If the current user is not authorized, a 401 error is thrown.

The user can easily navigate the website with its simple and straightforward user interface

What is more, a specific item can be searched for with the searchbar and filters on the price, availability and bidding end-date can be placed.

## Running the project

To visit our website you need to install the dependencies and run the project with the following commands in the terminal:
 - Start the backend
```bash
cd backend
npm install
npm run start
```
After that the server side of the application including the mock database should be running on [localhost:3000](http://localhost:3000).
 - Now repeat the same for the frontend:
```bash
cd frontend
npm install
npm run start
```

Navigate to [localhost:5000](http://localhost:5000). You should see our application running.

##Developers
The project has been created by the hard work of:

- Quan Trung Nguyen - 490848@student.saxion.nl

- Mira Yankova Ilieva - 497124@student.saxion.nl
