console.log("Hello World");

let newBtn = document.getElementById("btn")
let inputArea = document.getElementById("inputTxt");
console.log(inputArea)
inputArea.addEventListener("input", function input() {});


let person = prompt("Please enter your name");
if (person == null) {
    person = prompt("Please enter your name");
    // alert("You are not Enter your Name!")

} else if (person != null) {
    document.getElementById("h3").innerHTML =
        "Hello  " + person + " ! How are you today?";
    let para = document.getElementById("paraTxt").innerHTML =
        "Thank You so much " + person + " for visiting my Website"

}

console.log("wellcome...")
let slides = document.querySelectorAll(".slider");
let prevSlide = document.querySelector(".btnPrev");
let nextSlide = document.querySelector(".btnNext");
let slidesImg = document.getElementsByClassName("item")
let flag = 0;
slidesItem(flag);
//this function is use in html page for onclick event
function btnChang(x) {
    // console.log("you r click on next or Prev Btn")
    flag = flag + x;
    //call a function
    slidesItem(flag);

}

function slidesItem(num) {
    //
    if (num == slidesImg.length) {
        flag = 0;
        num = 0;
    }
    if (num < 0) {
        flag = slidesImg.length - 1;
        num = slidesImg.length - 1
    }
    for (let y of slidesImg) {
        y.style.display = "none"

    }
    slidesImg[num].style.display = "block"
}
console.log("Welcome to notes app. This is app.js");
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("cmntBtn");
addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById("cmntInput");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    //   console.log(notesObj);
    showNotes();
});

// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Comment ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Comment</button>
                    </div>
                </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Comment" section above to add Commentss.`;
    }
}

// Function to delete a note
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


// let search = document.getElementById("inputTxt");
// search.addEventListener("input", function() {

//     let inputVal = search.value.toLowerCase();

//     let noteCards = document.getElementsByClassName('all');
//     Array.from(noteCards).forEach(function(element) {
//         let cardTxt = element.getElementsByTagName("p")[0].innerText;
//         if (cardTxt.includes(inputVal)) {
//             element.style.display = "block";
//         } else {
//             element.style.display = "none";
//         }

//     })
// })