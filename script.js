const theme = document.querySelector(".theme"); //for toggling theme
const logo = document.querySelector(".logo"); //logo icon
const addBook = document.querySelector(".addBook"); //this is for +add Book button 
const showAddBook = document.querySelector(".showAddBook"); //this is for the dialog that pops up on clicking +add Book
const wrapper = document.querySelector(".wrapper");
const add = document.querySelector(".add"); //this is for saving the book to the main display
const cancel = document.querySelector(".cancel"); //cancel the dialog box
const main = document.querySelector("main");
const authorD = document.querySelector("#authorD"); //author input 
const titleD = document.querySelector("#titleD"); //title input
const pagesD = document.querySelector("#pagesD"); //page input
const checkD = document.querySelector("#checkD"); //check input
const itemContainer = document.querySelector(".itemContainer"); //contains all the items that will be displayed

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
    checkD.checked = false;
}

// this is for adding book dialog box
addBook.addEventListener("click",() => {
    showAddBook.showModal();
})

// to make sure that dialogbox only closes when clicked outside of it
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
emptyList();

function inputContructor(author,title,page,read){
    this.author = author;
    this.title = title;
    this.page = page;
    this.read = read;
}

inputContructor.prototype.exist = false;
inputContructor.prototype.itemNumber;

function addTOLibrary(obj){
    library.push(obj);
}

function displayLibrary(){
    emptyList();

    console.log(`displayLibrary function was called`);
    library.forEach((item,index) => {
        
        // this gives each item a unique itemNumber
        if(item.exist === false){
            item.itemNumber = index;
        }
        // this make sure that same value are not added to the itemContainer more than once
        if(item.exist === false){
            const div = document.createElement("div");
            div.classList.add("item");
            const page = document.createElement("p");
            const title = document.createElement("p");
            const author = document.createElement("p");
            const check = document.createElement("button");
            const edit = document.createElement("button");
            const remove = document.createElement("button");
            remove.textContent = "Remove";
            remove.classList.add("remove");
            check.classList.add("read");
            page.textContent = item.page;
            title.textContent = item.title;
            author.textContent = item.author;
            if(item.read === true){
                div.style.backgroundColor = "#2ABB7F";
                check.textContent = "Read";
            }else{
                check.textContent = "Unread";
                div.style.backgroundColor = "pink";
            }
            div.append(page);
            div.append(title);
            div.append(author);
            div.append(check);
            div.append(remove);
            itemContainer.append(div)
            item.exist = true;

            // remove items from the library and display  nwe library;
            remove.addEventListener("click",function(){
            
                library.splice(item.itemNumber,1);
                library.forEach((item) => {
                    item.exist = false;
                })
                itemContainer.textContent = "";
                displayLibrary();
            })

            
            // changes color of the books that have been read
            check.addEventListener("click" , () => {
                if(check.textContent === "Read"){
                    div.style.backgroundColor = "pink";
                    check.textContent = "Unread";
                    item.read = false;
                }else{
                    div.style.backgroundColor = "#2ABB7F";
                    check.textContent = "Read";
                    item.read = true
                }
            })
        }
    })
}

add.addEventListener("click",() => {
    const obj = new inputContructor(authorD.value,titleD.value,pagesD.value,checkD.checked);
    addTOLibrary(obj);
    displayLibrary();
    clearInput();
    showAddBook.close();
})


// display message if there is no entry
function emptyList(){

    if(library.length === 0){
        empty();

    }else if(itemContainer.textContent === "So empty"){
        itemContainer.textContent = "";
    }

    function empty(){
        itemContainer.textContent = "So empty";
    }
}