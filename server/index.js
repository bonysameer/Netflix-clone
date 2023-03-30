const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();



const PORT=process.env.PORT

   mongoose.connect(process.env.MONGO_URL)
   .then(()=>{
      app.listen(PORT)
         console.log(`server connected to database and on port ${PORT}`);

         // productModel.insertMany(dataProduct);
         // productStatModel.insertMany(dataProductStat);
   })
   .catch((err) => console.log(err));






