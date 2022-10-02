/*Random fruit
const fruits=["banana","orange","apple","ananas"]

const pickFruit=(fruits)=>{

const randomFruit = Math.floor(Math.random() * fruits.length)
return fruits[randomFruit]

}
console.log(pickFruit(fruits))
*/

const squares=document.querySelectorAll('.click')
const reset=document.getElementById('resetBtn')
const score=document.getElementById('score')
const hands=document.getElementById('hands')
const result=document.getElementById('result')
const Total=document.getElementById('totalScore')
//function that clears score inner text when we click on reset 
 const clearData=()=>{
score.innerText=""
result.innerText=""
hands.innerText=""
Total.innerText="Total score:0"
 }
 //get computer choice 
let values=[]
   for( let i=0 ;i<squares.length;i++){
values[i]=squares[i].value
   }
 const getComputerValue=()=>{
const randomValue=Math.floor(Math.random()*values.length)
return values[randomValue]
 }
 ///let computerVal=getComputerValue()

//get user choice 
//let playerChoice


//hadshi lfo9 khlih mnbe3d

function getResult  (playerChoice,computerVal){
   let lastScore

  if (playerChoice==computerVal){
        lastScore=0}
    else if (playerChoice=="rock" && computerVal=="cissor"){ lastScore=1 }
    else if ( playerChoice=="cissor" && computerVal=="paper" ){ lastScore=1}
    else if (playerChoice=="paper" && computerVal=="rock"){ lastScore=1}

    else {
       lastScore=-1
     }
    
return lastScore
}
let TotalScore=0
//this function will show result on screen of who loses or who wins
function showResult(lastScore,playerChoice,computerVal){
if(lastScore==1){
    hands.innerText=`👱${playerChoice} vs 🤖${computerVal}`
score.innerText="score:1"
result.innerText="you win!"

}
else if(lastScore==-1){
    hands.innerText=`👱${playerChoice} vs 🤖${computerVal}`
    score.innerText="score:-1"
    result.innerText="you lose!"
}
else {
    hands.innerText=`👱${playerChoice} vs 🤖${computerVal}`
    score.innerText="score:0"
    result.innerText="repeat!"
}
TotalScore+=lastScore
Total.innerText=`Total score:${TotalScore} `


}



function onclickRps(playerChoice){
   const computerVal=getComputerValue(values)
   const lastScore=getResult(playerChoice,computerVal)
showResult(lastScore,playerChoice,computerVal)
}
function playGame(playerChoice){
    
    onclickRps(playerChoice)

}
