export default class User {             //export user class by export default
    constructor (name, age) {
    this.name = name;
    this.age = age;
    }
}
export function printname(user){
    console.log(`user name is ${user.name}`);
}
 export function printage(user){
    console.log(`user age is ${user.age}`);
}