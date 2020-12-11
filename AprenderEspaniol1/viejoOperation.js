import React, {useState, useEffect} from 'react';

import Brick from './Brick';
import Modal from "./Modal";

import './Operation.css';

export const blockColors = {
    0: "#ff8500",
    1: "#00861c",
    2: "#0055bf",
    3: "#51a5db",
    4: "#ffed00",
    5: "#e3000b", 
}

function viejoOperation(){


//const minAmount = 5
//const maxAmount = 8
var arrayWord = []
var answerWord = []
var usedWord = ""

//const numbers = [5,6,7,8];



const words = [
    "mapa",
    "pala",
    "casa",
    "tasa",
    "cama",
    "cara",
    "mesa",
    "pasa",
    "lana", 
    "jugo",
    "pelo",
]

/**function chooseRandomWordDisplay(){
    let wordIndex = Math.floor(Math.random() * (10 - 1 + 1));
    let wordChosen = words[wordIndex]


    splitWords(wordChosen)


    return <h1>{words[wordIndex]}</h1>

}**/

function chooseRandomWord(){
    let cont = 0
    let randomNumber = Math.floor(Math.random() * (3 - 1 + 1))
    let Index = Math.floor(Math.random() * (10 - 1 + 1));
    usedWord = words[Index]
    //console.log(typeof(answerWord))
    answerWord.push(splitWords(usedWord)) 
    //console.log("ANSWERWORD: "+answerWord[0])
    //console.log(typeof(answerWord))
    for (let i = 0; i < 5; i++){
        if (cont === randomNumber){
            
            arrayWord.push(splitWords(usedWord))
        
        }
        let wordIndex = Math.floor(Math.random() * (10 - 1 + 1));
        let wordChosen = words[wordIndex]
        cont = cont + 1

        arrayWord.push(splitWords(wordChosen))
    }
    return <h1>{usedWord}</h1>
}

function selectReverseWord(array){
    let temp = array[0][0];
    let temp2 = array[0][1];
    let temp3 = array[1][0];
    let temp4 = array[1][1];
    let concat = temp.concat(temp2)
    let concat2 = temp3.concat(temp4)
    let tempR = [concat2, concat]
    //console.log(array)

    return tempR

}

function splitWords(chosenWord){
    let splitWords = []
    let cWord = chosenWord.split("")
    let cont= 0
    let tempLetter1 = ""
    let tempLetter2 = ""

    cWord.forEach((element) => {
            if (cont === 0){
                tempLetter1 = element
                cont = cont + 1
            }
            else if (cont === 1){
                tempLetter2 = element
                splitWords.push(tempLetter1.concat(tempLetter2))
                cont = 0
                tempLetter1 = ""
                tempLetter2 = ""
            }
    });
    //console.log(splitWords)
    return splitWords;
    //arrayWord = splitWords
    //selectReverseWord(splitWords)
}

/**function checkDuplicates(array, array2){
    let test
    for (let i = 0; i < array.length; i++){
        for(let j = 0; j < array2.length; j++){
            if(array[i] === array2[j]) {
                test = array.splice(i, 1)
                console.log("entre")
                console.log(test)
            }
        }
    }
}**/

function createBricksOperations() {
   
    let bricks = [];
    let numberRandom;

    numberRandom = (Math.floor(Math.random() * (10 - 6 + 1)) + 6)/2;


    //let returnString = "<div style={{ display: 'flex', justifyContent: 'space-between', }}>";
    
    for (let index = 0; index < numberRandom; index++) {
        for (let j = 0; j < 2; j++){
            bricks.push(<Brick color={blockColors[Math.floor(Math.random() * (6 - 1 + 1))]} text={selectReverseWord(arrayWord[index])[j]}  />);
        }
    }

    return <div className="inner-container"> {bricks} </div>
}


    /**function changeColor() {        
        if (color){
            return '#C0C0C0'
        } else {
            return blockColors[Math.floor(Math.random() * (10 - 1 + 1))] 
        }
        
    }**/

    return(
        <div>
         {chooseRandomWord()}
            <div>
            {createBricksOperations()}
            </div>
        </div>
        
    )
 
}

export default viejoOperation