let btn = document.getElementById("addword").addEventListener("click", run)
let word = document.getElementById("word")
let def = document.getElementById("definition")
let array = load();
let ranword;
let randef;
let firsttestcheck = false
let secondtestcheck = false

function run(){
    let x = word.value
    let y = def.value
    array.push(newset(x, y))
    console.log(array)
    alert('new word added')
    word.value = ''
    def.value = ''
    save();
}

let givedefbtn = document.getElementById("defbtn").addEventListener("click", firsttest)
let questionfirst = document.getElementById("givedef")
function firsttest(){
    firsttestcheck = true
    let num = Math.floor(Math.random()*array.length)
    ranword = array[num].word
    randef = array[num].def
    console.log(randef)
    console.log(ranword)
    questionfirst.innerHTML = randef
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

let givewordbtn = document.getElementById("wordbtn").addEventListener("click", secondtest)
let questionsecond = document.getElementById("giveword")
function secondtest(){
    secondtestcheck = true
    let num = Math.floor(Math.random()*array.length)
    ranword = array[num].word
    randef = array[num].def
    console.log(randef)
    console.log(ranword)
    questionsecond.innerHTML = ranword
}

let checkans2 = document.getElementById("checkans2").addEventListener("click", checksecondanswer)
let defanswer = document.getElementById("defanswer")
function checksecondanswer(){
    if(secondtestcheck === true){
        if(randef === defanswer.value){
            alert("YES!")
        } else{
            alert("NO!")
        }
    }
}

// DO CHECK ANSWER FOR SECOND ONE

function newset(newword, newdef){
    return {
        word : newword,
        def : newdef
    }

}

function save(){
    localStorage.setItem("flashcards", JSON.stringify(array))
}

function load(){
    let str = localStorage.getItem("flashcards")
    return JSON.parse(str) ?? [];
}