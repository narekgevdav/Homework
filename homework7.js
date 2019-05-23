//Task 1

class Author{
    constructor(name,email,gender){
        this._name = name;
        this._email = email;
        this._gender = gender;
    }
    get name(){
        return this._name
    }
    get email(){
        return this._email
    }
    get gender(){
        return this._gender
    }
    set name(value){
        this._name = value
    }
    set email(value){
        this._email = value
    }
    set gender(value){
        this._gender = value
    }
    toString(){
        return `The email of ${this._name} is ${this._email}`
    }
}

class Book {
    constructor(title,author,price,quantity){
        this._title = title;
        this._author = author
        this._price = price;
        this._quantity = quantity;
    }
    get title(){
        return this._title
    }
    set title(value){
        this._title = value
    }
    get price(){
        return this._price
    }
    set price(value){
        this._price = value    
    }
    get author(){
        return this._author
    }
    set author(value){
        this._author = value    
    }
    
    get quantity(){
        return this._quantity
    }
    set quantity(value){
        this._quantity = value    
    }
    getProfit(){
        return this._price*this._quantity
    }
    toString(){
        return `The profit of ${this._title} from ${this._author.name} is ${getProfit()}
    }
}


//task 2
class Account{
    constructor(id,name,balance){
        this._id = id
        this._name = name
        this._balance = balance
    }
    get id(){
        return this._id
    }
    set id(value){
        this._id=value
    }
    get name(){
        return this._name
    }
    set name(value){
        this._name=value
    }get balance(){
        return this._balance
    }
    set balance(value){
        this._balance=value
    }
    credit(amount){
        return this._balance = this._balance+amount
    }
    debit(amount){
        if(amount <= this._balance){
            return this._balance = this._balance-amount
        } else {
            return `Amount exceeded balance`
        }
    }
    transferTo(anotherAccount, amount){
        this.debit(amount)
        anotherAccount._balance += amount
    }
    static indentifyAccount(accountFirst,accountSecond){
        return (accountFirst._name === accountSecond._name && accountFirst._id === accountSecond._id && accountFirst._balance === accountSecond._balance)
    }
    toString(){
        return `the balance of ${this._name}'s account is ${this._balance}`
    }
}

//task3

class Person{
    constructor(firstName, lastName,gender,age){
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender
        this._age = age 
    }
    get firstName(){
        return this._firstName
    }
    set firstName(value){
        this._firstName = value
    }
    get lastName(){
        return this._lastName
    }
    set lastName(value){
        this._lastName = value
    }
    get gender(){
        return this._gender
    }
    set gender(value){
        this._gender = value
    }
    get age(){
        return this._age
    }
    set age(value){
        this._age = value
    }
    toString(){
        ` return ${this._firstName} ${this._lastName} is ${this._age} years old`
    }

}

class Student extends Person{
    constructor(firstName, lastName,gender,age,program,year,fee){
        super();
        this._program = program
        this._year = year
        this._fee = fee
    }
    get program(){
        return this._program
    }
    set program(value){
        this._program = value
    }
    get year(){
        return this._year
    }
    set year(value){
        this._year = value
    }
    get fee(){
        return this._fee
    }
    set fee(value){
        this._fee = value
    }
    passExam(program,grade){
        if(this._program.indexOf(program)===-1){
            return `invalid program`
        } else {
            if(grade >=50){
                this._program.splice(this._program.indexOf(program),1)
            }
        }
        if(this._program.length === 0){
            this._year++
        }
    }
    
}

class Teacher extends Person{
    constructor(firstName, lastName,gender,age,program,pay){
        super();
        this._program = program;
        this._pay = pay; 
    }
    get program(){
        return this._program
    }
    set program(value){
        this._program = value
    }
    get pay(){
        return this._pay
    }
    set pay(value){
        this._pay = value
    }
    toString(){
        return `the techer of ${this._program} earns ${pay}`
    }
}
