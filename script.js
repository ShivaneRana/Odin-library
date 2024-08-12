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

// this is for clearing input value in showAddBook;
function clearInput(){
    authorD.value = "";
    titleD.value = "";
    pagesD.value = "";
}

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
    clearInput();
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

    // now i know why prototype is so good
    // these value make sure that same item is not entered more than once
    inputValue.prototype.entered;
    inputValue.prototype.check = function(){
        if(entered === true){
            return true;
        }else{
            false;
        }
    }

    function addToLibrary(library){
        const book = new inputValue(authorD.value,titleD.value,pagesD.value);
        library.push(book);
    }

    function showLibrary(){
        // this code is not perfect and iterate through same items many times
        // item.entered make sure that it does not happens
        // i am really proud of this solution
        library.forEach((item,index) => {
            const a = document.createElement("p");
            const p = document.createElement("p");
            const t = document.createElement("p");

            // this is for removing and toggling read and unread status
            const remove = document.createElement("button");
            const toggle = document.createElement("button");
            toggle.classList.add("toggle");
            remove.classList.add("remove")
            remove.textContent = "Remove";
            toggle.textContent = "Read";

            // this is for assigning value to div in a patter so that css classes apply accordingly
            
            a.textContent = "Author: "+item.author;
            p.textContent = "Pages: "+item.pages;
            t.textContent = item.title;
            const div = document.createElement("div");
            div.classList.add("item");
            div.append(p);
            div.append(t);
            div.append(a);
            div.append(remove);
            div.append(toggle);
            
            // this checks if the item being added is unique and not a copy
            if(!item.entered === true){
                itemContainer.append(div);
                item.entered = true;
            }else{
                console.log("already in the library");
            }
        })
    }
    addToLibrary(library);
    showLibrary();
    console.log(library);
    clearInput();
    showAddBook.close();
})


// this was a previour itereation of how i would add books to library
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