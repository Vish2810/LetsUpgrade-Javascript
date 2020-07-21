class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 0; 
        this.courses = [];
    }
    login(){
        console.log(`${this.name} has logged in`);
    }
    logout(){
        console.log(`${this.name} has logged out`);
    }
}

class Moderator extends User {
    addcoins(){
        this.coins++;
        console.log(`${this.name} has ${this.coins} coins`);
        return this;
    }
    deletecoins(){
        this.coins--;
        console.log(`${this.name} has ${this.coins} coins`);
        return this;
    }

}

class Admin extends Moderator {
    addcourse(User, course) {
        User.courses.push(course);
        console.log(`User has added ${course}`);
        console.log(User);
    }
    deletecourse(User, course) {
        User.courses = User.courses.filter(courses=>courses!==course);
        console.log(`user has successfully deleted ${course}`);
        console.log(User);
    }
}

let User1 = new User('abc', 25, 'abc@gmail.com')
let User2 = new User('xyz', 25, 'xyz@gmail.com')
let mod = new Moderator('kd',23,'kd@gmail.com')
let admin = new Admin('rj',22,'rj@gmail.com')
let Users = [User1, User2,mod,admin];
User1.login()
User1.logout()
mod.addcoins(User1)
mod.deletecoins(User1)
admin.addcourse(User1,'Javascript')
admin.deletecourse(User1,'Javascript')

// Users.forEach(element =>{
//     console.log(element);
// })