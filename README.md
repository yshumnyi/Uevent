
To use the stock database, please install MongoDB Compass.

Create a new database called 'Uivent' (or any name of your choice)

Create the following collections: 'events', 'users' and 'feedbacks'

Import the respective stock collections by clicking on Add Data -> Import File -> Select the collections downloaded from stock-collection directory -> Select import file type as JSON

- Ensure that the URL of the database correctly set up in 'index.js' file in the server directory
```
mongoose.connect('mongodb://127.0.0.1:27017/Uivent')
```
- Navigate to both the client and server directories and run the following command to install the required packages
```
npm install
```
- Navigate to the server directory in your terminal and run the following command
```
npm start
```
- Navigate to the client directory in a new terminal and run the following command
```
npm start
```
