let user = {
    "id":101,
    "name":"Rahul"
}

let prop = "id"
let val  = 23 

user = {...user, [prop]:val}

console.log(user)