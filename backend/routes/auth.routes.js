const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const User = require('../models/User.models');
require('dotenv').config

router.post('/signup', async (req, res) => {
    
    try {
            const {name, email, password} = req.body
            console.log(name, email, password)
            const existingUser = await User.findOne({username: name})
            if(existingUser){
                res.status(400).json("user already exists")
            }
                const myEncPassword = await bcrypt.hash(password, 10)
                const user = new User({ username: name, email, password: myEncPassword})
                console.log(user)
                await user.save();
        
                const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
                    expiresIn: '30d',
                    });
                    res.status(200).json({ token });
    
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
    })

router.post('/login', async (req, res)=>{
        try {
                const {name, password} = req.body
                console.log(name, password)
                if(!(name && password))
                {
                    res.status(400).json('Enter all fields')
                }
            
                const user = await User.findOne({ username: name });
                console.log(user)
                if(!user){
                    res.status(404).json('user not found')
                }
            
                if(!(user.username == name && (await bcrypt.compare(password, user.password)))){
                    res.status(400).json('Invalid email or password')
                }
                    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
                        expiresIn: '30d',
                        });
                        res.status(200).json({ token });
                       
        } catch (error) {
            res.status(500).json({ error: 'Login failed' });   
        }
        })

        module.exports = router;