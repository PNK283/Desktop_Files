const express = require('express');
const mongoose = require('mongoose');
const Registeruser = require('./model')
const jwt = require('jsonwebtoken')
const middleware = require('./middleware');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://mongocluster:mongocluster@cluster0.mjrqsd5.mongodb.net/?retryWrites=true&w=majority',{
        useUnifiedTopology: true,
        useNewUrlParser: true
}).then(
    () => console.log('DB connection successfully')
)
app.use(express.json())

app.use(cors({origin:"*"}))

app.post('/register', async (req, res) => {
    try{
        const{username, email, password, confirmpassword} = req.body;
        let exist = await Register.findOne({email})
        if(exist){
            return res.status(400).send('User Already Exist')
        }
        if(password!=confirmpassword){
            return res.status(400).send('Password are not matching');
        }
       let newUser = new Registeruser({
          username,
          email,
          password,
          confirmpassword
       })
       await newUser.save();
       res.status(200).send('Registeres successfully')
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Internal server Error')
    }
})

app.post('./login', async (req, res) => {
    try {
        
        const {email, password} = req.body;
        let exist = await Registeruser.findOne({email});
        if(!exist){
                return res.status(400).send('User not found')
        }
        if(!exist.password !== password){
              return res.status(400).send("Invalid credentials")
        }
        let payload= {
            user :{
                id: exist.id
            }
        }
        req.user = decode.user

        jwt.sign(payload, 'jwtSecret',{expiresIn:3600000},
            (err, token) =>{
                if(err) throw err;
                return res.json({token})
            }
            
            )
    } catch (err) {
          console.log(err);
          return res.status(500).send('Server Error')
    }
})

app.get('./myprofile', middleware, async(req, res) =>{
    try {
        let exist = await Registeruser.findById(req.user.id);
        if(!exist){
            return res.status(400).send('User not found');
        }
        res.json(exist); 
        
    } catch (err) {
        console.log(err);
        return res.status(500).send('Server Error')
    }
})

app.listen(5000, () =>{
    console.log('server running on port 5000')
})