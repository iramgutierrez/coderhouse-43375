import User from "../dao/classes/user.dao.js";

const userService = new User();

export const getUsers = async (req, res) => {
    let result = await userService.getUsers();
    res.send({status:"success", result})
}

export const getUserById = async (req, res) => {
    const {uid} = req.params;
    let user = await userService.getUserById(uid);
    res.send({status:"success", result:user})
}

export const saveUser = async (req, res) => {
    const user = req.body; // las validaciones de campos van por tu cuenta
    let result = await userService.saveUser(user);
    res.send({status:"success", result})
}