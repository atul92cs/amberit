const express=require('express');
const bodyParser=require('body-parser');
const PORT=process.env.PORT||8080;
const userFunctions=require('./routes/UserFunctions');
const categoryFunctions=require('./routes/categoryFunctions');
const subcategoryFunctions=require('./routes/subcategoryFunctions');
const skillFuctions=require('./routes/skillFunctions');
const adFunctions=require('./routes/adFunctions');
const messageFunctions=require('./routes/messageFunctions');
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
app.use('/ad',adFunctions);
app.use('/user',userFunctions);
app.use('/category',categoryFunctions);
app.use('/subcategory',subcategoryFunctions);
app.use('/skill',skillFuctions);
app.use('/message',messageFunctions);
app.listen(PORT,()=>{
  console.log('Server started on '+PORT);
});
