console.log("start");

function Autheticate(userName, password,callback){
    setTimeout(() => {
        callback({userEmail:userName}) 
    }, 3000);
}

function getUserDetails(email,callback){
    setTimeout(() => {
        callback({name:"Jithin Jayan", department:"ADM", designation:"Solution Architect"}) 
    }, 3000);
}
Autheticate("jithin@rs.com","pass@123",(user)=>{
    console.log(user.userEmail);
    getUserDetails(user.userEmail,(userDetails)=>{
        console.log(userDetails);
    })
});
//console.log(userEmail);

console.log("End");