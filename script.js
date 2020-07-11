const qwerty = document.querySelector('#qwerty')
const phrase = document.querySelector('#phrase')
const startGame = document.querySelector('.btn__reset')
const overlay = document.querySelector('#overlay')
let missed = 0;
let heart = document.querySelectorAll('img')


const phrases =[
    ' an apple a day keeps the doctor away',
    ' all good things come to an end',
    ' a thing begun is half done',
    'barking dogs seldom bite.',
    'better late than never',
    'best things in life are free'
]

//Create a getRandomPhraseAsArray function.
const getRandomPhraseAsArray = arr =>{
    let i = Math.floor(Math.random() * arr.length);
    return arr[i]
}

getRandomPhraseAsArray(phrases);



//Set the game display.
const addPhraseToDisplay = arr =>{
        for(let i = 0; i < arr.length; i++){
            const ul = document.querySelector('#phrase ul')
            const li = document.createElement('li')
            ul.appendChild(li)
            li.textContent += arr[i]
        if(li.textContent !== " "){
            li.className = "letter"
        }else{
            li.className = "space"
        }  
    }
}
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 


//Attach a event listener to the “Start Game” button to hide the start screen overlay.
startGame.addEventListener('click', () => {
    overlay.style.display = "none";
   
})


//Create a checkLetter function

const checkLetter = button =>{
    let match = null;
    const letter = document.querySelectorAll('.letter')
         for(let i = 0; i < letter.length; i++){
          if(button === letter[i].textContent.toLowerCase()){
            // letter[i].className = "show"
            letter[i].classList.add("show");
            match = true
        }
    }
    return match;
}

 //addEventListener to the keyboard

qwerty.addEventListener('click',(e) => {
         if(e.target.tagName === 'BUTTON'){
             e.target.className = 'chosen'
    } 
    const letterFound = checkLetter(e.target.textContent)
    if(letterFound === null && e.target.tagName === 'BUTTON' ){
        for(let i = 0; i < heart.length; i++){
         heart[missed].setAttribute('src',"images/lostHeart.png")
        }
        missed++; 
     }
 checkWin(checkLetter)
})

 //Create a checkWin function
    const checkWin = () =>{
        const letter = document.querySelectorAll('.letter')
        const show = document.querySelectorAll('.show')
        const title = document.querySelector('.title')
        if(letter.length === show.length){
            // overlay.className ='win';
            overlay.classList.add("win");
            title.textContent = "You won"
            overlay.style.display = "flex" 
       
        const overlayA = overlay.querySelector('a')
         overlayA.textContent = "Success!!!"
         overlayA.style.fontSize = '30px'
         overlayA.style.color = "coral"
        overlayA.style.backgroundColor = "#76CE82"
        setTimeout(function(){
            location.reload(); 
            },1000);  
          
        }else if(missed >= 7){
            overlay.classList.add ='lose';
            title.textContent = "You lost"
            overlay.style.display = "flex"
            const overlayA = overlay.querySelector('a')
            overlayA.textContent = "No,try again"
            overlayA.style.fontSize = '30px'
            overlayA.style.color = "coral"
            overlayA.style.backgroundColor = "#76CE82"
         
         setTimeout(function(){
            location.reload(); 
            },1000);  
        
        }     
        
   }

 



