const bcrypt=require('bcryptjs');
let UserDetails = {
    name : "Asru",
    email: 'asru@email.com',
    password:'123456'
}
let newPassword= bcrypt.hashSync(UserDetails.password,8);
console.log(newPassword);