var users = []

module.exports = {
    get : (user)=>{
        return users.find(i=>i.name===user.name && i.password===user.password);
    },
    getWithToken : (token)=>{
        return users.find(i=>i.token===token);
    },
    save : (user)=>{
        users.push(user);
    }

}