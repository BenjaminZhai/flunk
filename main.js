// CODE


// GLOBAL VARIABLES
let array = load();
let ranword;
let randef;
let ranword2;
let randef2;
let firsttestcheck = false
let secondtestcheck = false
let checkforarray = true


// FUNCTIONS

// Flash Cards Functions

// Variables for Flashcards
let btn = document.getElementById("addword").addEventListener("click", run)
let word = document.getElementById("word")
let def = document.getElementById("definition")

// Add Word to Flashcards
function run(){
    checkforarray = true
    let x = word.value
    let y = def.value
    array.push(newset(x, y))
    console.log(array)
    alert('new word added')
    word.value = ''
    def.value = ''
    save();
}

// Clear Flashcards
let clear = document.getElementById("clear").addEventListener("click", clearfunc)
function clearfunc(){
    array = []
    checkforarray = false
    save()
}

// Test 1 Functions (answer with word)
let givedefbtn = document.getElementById("defbtn").addEventListener("click", firsttest)
let questionfirst = document.getElementById("givedef")
function firsttest(){
    if(checkforarray === true){
        firsttestcheck = true
        let num = Math.floor(Math.random()*array.length)
        ranword = array[num].word
        randef = array[num].def
        console.log(randef)
        console.log(ranword)
        questionfirst.innerHTML = randef
    } else{
        alert("Please input words")
    }
}

let checkans1 = document.getElementById("checkans1").addEventListener("click", checkfirstanswer)
let wordanswer = document.getElementById("wordanswer")
function checkfirstanswer(){
    if(firsttestcheck === true){
        if(ranword === wordanswer.value){
            alert("YES!")
        } else{
            alert("NO!")
        }
    }
}

// Test 2 Functions (answer with definition)
let givewordbtn = document.getElementById("wordbtn").addEventListener("click", secondtest)
let questionsecond = document.getElementById("giveword")
function secondtest(){
    if(checkforarray === true){
        secondtestcheck = true
        let num = Math.floor(Math.random()*array.length)
        ranword2 = array[num].word
        randef2 = array[num].def
        console.log(randef2)
        console.log(ranword2)
        questionsecond.innerHTML = ranword2
    } else{
        alert("Please input words")
    }
}

let checkans2 = document.getElementById("checkans2").addEventListener("click", checksecondanswer)
let defanswer = document.getElementById("defanswer")
function checksecondanswer(){
    if(secondtestcheck === true){
        if(randef2 === defanswer.value){
            alert("YES!")
        } else{
            alert("NO!")
        }
    }
}


// Helper Function to Push into Arrays
function newset(newword, newdef){
    return {
        word : newword,
        def : newdef
    }

}

// Local Storage
function save(){
    localStorage.setItem("flashcards", JSON.stringify(array))
}

function load(){
    let str = localStorage.getItem("flashcards")
    return JSON.parse(str) ?? [];
}