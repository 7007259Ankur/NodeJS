const express = require('express')
const app = express();
const db=require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json());




const Person=require('./models/Person')
const MenuItem=require('./models/MenuItem') 

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/person',async(req,res)=>{
    try{
        const data=req.body

        const newPerson=new Person(data);
        
        const response=await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal server error'});


    }

})

//get method
app.get('/person',async(req,res)=>
{
    try{
        const data=await Person.find();
        console.log('data fetched');
        res.status(200).json(data);

    }
    catch(err){


    }
})


//post method to add a menu Item
app.post('/menu',async(req,res)=>{
    try{
        const data=req.body
        const newMenu=new MenuItem(data);
        const response=await newMenu.save();
        console.log('data Saved');
        res.status(200).json(response); 
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal server error'});


    }
})

//Get Method to get the Menu Item
app.get('/menu',async(req,res)=>
{
    try{
        const data=await MenuItem.find();
        console.log('Data is Fatched');
        res.status(200).json(data);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})












app.get('/chicken',(req,res)=>{
    res.send('sure sir , i would love to serve chicken')
})

app.listen(3000,()=>{console.log("Server is live now")})


const personRoutes=require('./routes/personRoutes')
const menuItemroutes=require('./routes/menuRoutes');


app.use('/person',personRoutes);
app.use('/menu',menuItemroutes);





// const objectToconvert={
//     name:"Alice",
//     age:25
// };
// const json=JSON.stringify(objectToconvert);
// console.log(json);

// console.log(typeof json)




















// const notes=require('./notes')





// console.log('server file is available');

// var age=notes.age;

// var result=notes.addnumber(age,27)
// console.log(age)
// console.log('result is '+result);


// var data=["person","person",1,2,1,2,'name','age','2'];














// var fs=require('fs');
// var os=require('os');


// var user=os.userInfo();
// console.log(user.username);


// fs.appendFile('greeting.txt','Hi'+user.username+'!\n',()=>{console.log('file is created');});




























// function callback()
// {
//     console.log('new adding success');
// }

// const add=function(a,b,callback){
//     var result=a+b;
//     console.log('result :'+result);
//     callback();
// }

// add(3,4,function()
// {
//     console.log('add completed');
// });


// add(3,4,()=>console.log('add completd'));




























// function add(a,b)
// {
//     return a+b;
// }
// var add=function(a,b)
// {
//     return a+b;
// }


// var add=(a,b)=>{return a+b};

// var add=(a,b)=>a+b;

// var result=add(2,98);
// console.log(result);

// (function()
// {
//     console.log('Prince is added');
// })();





