const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const userRoutes=require('./routes/user');
const sequelize = require('./utils/database');

app=express();

app.use(cors());

// For parsing application/json
app.use(express.json());
// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);


sequelize.sync()
.then(res=>{
    console.log("hello");
    app.listen(3000);
})
.catch(err=>console.log(err));


