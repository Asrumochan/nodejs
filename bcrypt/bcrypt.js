const bcrypt=require('bcryptjs');
let UserDetails = {
    name : "Asru",
    email: 'asru@email.com',
    password:'123456'
}
let newPassword= bcrypt.hashSync(UserDetails.password,8);
console.log(newPassword);

//compare the hashed password with the plain text password
UserDetails={...UserDetails,password: newPassword}
console.log(UserDetails);

//check the password with the normal one 
if (bcrypt.compareSync("1245",UserDetails.password)) {
    console.log("Password Matched")
}
else{
    console.log("Password did not match");
}