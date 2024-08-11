const theme = document.querySelector(".theme");
const logo = document.querySelector(".logo");
const addBook = document.querySelector(".addBook"); //this is for +add Book button 
const showAddBook = document.querySelector(".showAddBook"); //this is for the dialog that pops up on clicking +add Book
const wrapper = document.querySelector(".wrapper");
const add = document.querySelector(".add"); //this is for saving the book to the main display
const cancel = document.querySelector(".cancel");
const main = document.querySelector("main");
const authorD = document.querySelector("#authorD");
const titleD = document.querySelector("#titleD");
const pagesD = document.querySelector("#pagesD");
const itemContainer = document.querySelector(".itemContainer");

// this changes theme
theme.addEventListener("click",function(){
    document.documentElement.classList.toggle("dark");
    if(document.documentElement.className === "dark"){
        theme.src = "./Images/light.png";
        logo.src = "./Images/logoD.png";
    }else{
       theme.src = "./Images/dark.png";
       logo.src = "./Images/logo.png"; 
    }
})

// this is for adding book dialog box
addBook.addEventListener("click",() => {
    showAddBook.showModal();
})

showAddBook.addEventListener("click",function(e){
    if(!wrapper.contains(e.target)){
        showAddBook.close();
    }
})


// this closes the dialog box
cancel.addEventListener("click",function(){
    authorD.value = "";
    pagesD.value = "";
    titleD.value = "";
    showAddBook.close();
})

// stores all the books
const library = [];


// this is logic for adding items to itemContainer
add.addEventListener("click",() => {
    function inputValue(author,title,pages){
        this.author = author;
        this.title = title;
        this.pages = pages;
    }
})


/* const library = [
	{
		user:"name",
		age:20,
	}
]

createEntry.prototype.info = function(){
	return `${this.user} is of age ${this.age}`;
}

function createEntry(user,age){
	this.user = user;
	this.age = age;
}

library.push(new createEntry("nanadkljfa",1443));
library.push(new createEntry("nanadkljfa",1443));
library.push(new createEntry("nanadkljfa",1443));
library.push(new createEntry("nanadkljfa",1443));
library.push(new createEntry("nanadkljfa",1443));



console.log(library[3].info()) */