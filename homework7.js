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

class Book extends Author{
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
    set price(value){
        this._quantity = value    
    }
    getProfit(){
        return this.price*this.quantity
    }   
}


