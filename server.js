//DEPENDENCIES
const path = require('path');
const express = require('express'); 

//SET UP EXPRESS
const app = express(); 
const PORT = process.env.PORT || 3000; 
app.use(express.urlencoded({ extended: true }));

// MIDDLEWARE - ******* help explain these to me again.... 
app.use(express.json());
app.use(express.static('public'));

// ROUTES
require("./app/routing/htmlRoutes.js")(app); // ******* is app coming from express? 
require("./app/routing/apiRoutes.js")(app);

// APP BEGINS LISTENING
app.listen(PORT, () => {
    console.log(`I am listening at PORT: ${PORT}`);
});