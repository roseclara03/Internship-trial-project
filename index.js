const express=require('express');
const app=express();
const cors=require('cors');
const { MongoClient } = require('mongodb'); 

let user=[];
let db = ''

app.use(cors());
app.use(express.json());


async function mongoConnect() {
    let client = new MongoClient('mongodb+srv://anshif:nesRoWgW5SqAD0yF@cluster0.8dtglzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    await client.connect();
    db = client.db('test');
   ;
 }


app.get("/user", async function(req,res){
    let output=await db.collection('user').find({}).toArray();
    res.json(output);
});

     
   
let product_details=[{"name":"pen","category":"stationary"},{"name":"wheat","category":"food"}];
app.get("/product_details",function(req,res){
   res.json(product_details)
})
app.post('/register',async  function(req,res)
{   let output = await db.collection('user').insertOne(req.body);
    console.log(req.body);
    
    console.log(output);
    res.json({message:'user registered successfullyyyy'});
}
);
app.post('/login', async function(req,res)
{
    console.log(req.body);
    for(let i=0;i<URLSearchParams.length;i++){
        if(user[i].username===reqbody.username && user[i].password===req.body.password){
            return res.status(200).json(user[i]);
        }
    }
    res.status(404).json({message:'user not found'});
}
    );
app.post('/forgot', async function(req, res) {
        console.log(req.body);
        for (let i = 0; i < users.length; i++) {
            if (user[i].username === req.body.username) { // Fixed typo: changed `uses` to `users`
                user[i].password = req.body.crpassword; // Fixed typo: changed `user` to `users`
                return res.status(200).json({ message: 'Password updated successfully' });
            }
        }
    })
 app.listen(5000,function(){
console.log("server is ready listening on port 5000");
mongoConnect();
 });