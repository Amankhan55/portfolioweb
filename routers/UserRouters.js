const express = require('express');
const UserRouter = express.Router();
const UserService = require('../services/UserServices');

let userService = null;
const init = () => {
    userService = new UserService()
}
init();

//routing
UserRouter.get('/GetUsers', (req,res) => {
    const allUsers = userService.findAllUsers();
    allUsers ? res.status(200).json(allUsers) : res.status(500).json({error: 'Users not found!'});
});

UserRouter.get('/GetUserByID/:id', (req,res) => {
    const id = parseInt(req.params.id);
    if(!id){
        res.status(404).json({error: 'Bad Request!'});
    }
    const user = userService.findUserById(id);
    user ? res.status(200).json(user) : res.status(404).json({error: 'user not found'});
});

UserRouter.put('/UpdateUser/:id', (req,res) => {
    const id = parseInt(req.params.id);
    if(!id){
        res.status(404).json({error: 'Bad Request!'});
    }
    const data = req.body;
    let users = userService.updateUser(id,data);
    userService.writeLoaclFile(users);
    users ? res.status(200).json(users) : res.status(500).json({error: 'Users not found!'});
});

UserRouter.post('/SaveUser', (req,res) => {
    const data = req.body;
    data.id = parseInt(data.id);
    let users = userService.addUser(data);
    userService.writeLoaclFile(users);
    users ? res.status(200).json(users) : res.status(500).json({error: 'Users not found!'});
});

UserRouter.delete('/DeleteUser/:id', (req,res) => {
    const id = parseInt(req.params.id);
    if(!id){
        res.status(404).json({error: 'Bad Request!'});
    }
    let users = userService.deleteUser(id);
    userService.writeLoaclFile(users);
    users ? res.status(200).json(users) : res.status(500).json({error: 'Users not found!'});
});

module.exports = UserRouter;