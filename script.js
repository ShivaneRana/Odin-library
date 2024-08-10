const theme = document.querySelector(".theme");
const logo = document.querySelector(".logo");
const addBook = document.querySelector(".addBook")
const showAddBook = document.querySelector(".showAddBook");
const wrapper = document.querySelector(".wrapper")
const add = document.querySelector(".add");

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

addBook.addEventListener("click",() => {
    showAddBook.showModal();
})