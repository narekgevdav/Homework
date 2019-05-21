//Task 1

class Author{
    constructor(name,email,gender){
        this.name = name;
        this.email = email;
        this.gender = gender;
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
        return `The email of ${this.name} is ${this.email}`
    }
}

class Book {
    constructor(title,Author,price,quantity){
        this.title = title;
        this.Author = Author
        this.price = price;
        this.quantity = quantity;
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
    
    get quantity(){
        return this._quantity
    }
    set quantity(value){
        this._quantity = value    
    }
    getProfit(){
        return this.price*this.quantity
    }
    toString(){
        return `The profit of ${this.title} from ${this.Author.name} is ${getProfit()}
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
        return this.id
    }
    set id(value){
        this.id_id=value
    }
    get name(){
        return this.name
    }
    set name(value){
        this.name=value
    }get balance(){
        return this.balance
    }
    set balance(value){
        this.balance=value
    }
    credit(amount){
        return this._balance+amount
    }
    debit(amount){
        if(amount <= this._balance){
            return this._balance-amount
        } else {
            return `Amount exceeded balance`
        }
    }
    transferTo(anotherAccount, amount){
        this.debit(amount)
        anotherAccount.balance += amount
    }


}
