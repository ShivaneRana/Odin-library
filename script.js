const theme = document.querySelector(".theme");
const logo = document.querySelector(".logo");
const addBook = document.querySelector(".addBook")
const showAddBook = document.querySelector(".showAddBook");
const wrapper = document.querySelector(".wrapper")
const add = document.querySelector(".add");
const cancel = document.querySelector(".cancel");
const main = document.querySelector("main");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");


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
    author.value = "";
    pages.value = "";
    title.value = "";
    showAddBook.close();
})