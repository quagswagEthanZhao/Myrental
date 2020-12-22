const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 3001;
const router = require('./routes/index');
//A little feature unstable;
//App config
dotenv.config();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


//Database config
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err.message));

//Routes
app.use('/', router);




app.listen(PORT, () => console.log(`Listening on port ${PORT}`));





