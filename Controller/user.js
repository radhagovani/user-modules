const bcrypt = require('bcrypt');
const {createUser,fetchUser, fetchAll,modifyUser} = require('../service/user');

const isUserUnique= async (email)=>{
    let user = await fetchUser({email})
    if(user) return false;
    else return true;
}

const signUp = async (user)=>{ //todo: unique email check
    if(isUserUnique){
    user.password = await bcrypt.hash(user.password,10);
    return await createUser(user);
    }
    else{
        return false;
    }
    }
const getUser = async (filter) =>{
        return await fetchUser(filter)
    }
const getAllUser = async () =>{
        return await fetchAll()
    }
const updateUser = async (filter,user) =>{
    return await modifyUser(filter,user);
}


module.exports = {
    signUp,
    getUser,
    getAllUser,
    updateUser
}

