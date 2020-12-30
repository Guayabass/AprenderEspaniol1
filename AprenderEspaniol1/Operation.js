import React, { useState, useEffect } from "react";
import { CheckCircle, XCircle } from "react-bootstrap-icons";

import Brick from "./Brick";
import {
  Button,
  Pagination,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

import "./Operation.css";

export const blockColors = {
  0: "#ff8500",
  1: "#00861c",
  2: "#0055bf",
  3: "#51a5db",
  4: "#ffed00",
  5: "#e3000b",
};

function Operation() {
  const words = [
    "ma|pa",
    "pa|la",
    "ca|sa",
    "ta|sa",
    "ca|ma",
    "ca|ra",
    "me|sa",
    "pa|sa",
    "la|na",
    "ju|go",
    "pe|lo",
  ];

  const [finalWord, setFinalWord] = useState([]);
  const [cont, setCont] = useState(0);
  const [score, setScore] = useState(0);
  const [opScore, setOpScore] = useState([]);
  const [opState, setOpState] = useState(false);
  const [opCont, setOpCont] = useState(0);
  const [badResults, setBadResults] = useState([]);

  const arrayWords = [6, 8, 7, 0, 9, 1, 2, 4, 3, 5];
  var arrayDisplay = [];
  var contValue = 0;
  var resultCont = 0;
  var usedWords = [];
  var notaFinal = 0;
  var ids = [];

  function fillerWords(num) {
    //console.log("filler")
    let syllables = ["co", "po", "be", "ce", "pi", "ja"];
    let arrayWords = [5, 1, 3, 2, 4, 0];
    let wordsRandom = arrayWords.sort(function () {
      return Math.random() - 0.5;
    });
    for (let i = 0; i < num - 2; i++) {
      arrayDisplay.push(syllables[wordsRandom[i]]);
    }
  }

  function splitWord() {
    //console.log("split")
    let wordsRandom = arrayWords.sort(function () {
      return Math.random() - 0.5;
    });
    let chosenWord = words[wordsRandom[3]];
    let splitWord = chosenWord.split("|");
    let reverseWord = splitWord.reverse();
    finalWord.push(reverseWord[1].concat(reverseWord[0]));
    //console.log(finalWord);
    arrayDisplay.push(reverseWord[1]);
    arrayDisplay.push(reverseWord[0]);

    return finalWord[cont];
  }

  /**  function returnWord(word) {
    return word;
  }**/

  function changeColor(id) {
    ids.push(id);
    document.getElementById(id).style.color = "#C0C0C0";
    contValue = contValue + 1;
  }

  /**function enterSyllable(syllable) {
    let syllables = [];
    syllables.push(syllable);
    if (syllables.length > 2) {
      opScore.push(0);
      console.log("toy aqui");
      resultCont = resultCont + 2;
    } else {
      syllables.forEach((element) => {
        getResult(element);
      });
    }
  }**/

  function getResult(syllable) {
    if (contValue > 2) {
      badResults.push(1);
      console.log(badResults);
    }
    if (finalWord[cont].includes(syllable)) {
      notaFinal = notaFinal + 50;
      resultCont = resultCont + 1;
      if (notaFinal === 100 && contValue === 2) {
        opScore.push(100);
        //console.log("estoy en el if principal");
        console.log(opScore);
      } else if (notaFinal === 50 && contValue === 2) {
        opScore.push(50);
        //console.log("estoy en el primer elif de if principal");
        console.log(opScore);
      } else if (notaFinal === 0 && contValue === 2) {
        opScore.push(0);
        //console.log("estoy en el segundo elif de if principal");
        console.log(opScore);
      }
    } else {
      resultCont = resultCont + 1;
      if (notaFinal === 50 && contValue === 2) {
        opScore.push(50);
        //console.log("estoy en el if del else");
        console.log(opScore);
      } else if (notaFinal === 0 && contValue === 2) {
        opScore.push(0);
        //console.log("estoy en el elif del else");
        console.log(opScore);
      }
    }
  }

  function revertColor() {
    ids.forEach((element) => {
      document.getElementById(element).style.color =
        blockColors[Math.floor(Math.random() * (6 - 1 + 1))];
    });
  }

  function nextOP() {
    if (resultCont >= 2) {
      if (resultCont > 2) {
        resultCont = 0;
        contValue = 0;
        setCont(cont + 1);
        setScore(score + 0);
        setOpCont(opCont + 1);
        revertColor();
        if (opCont === 4) {
          setOpState(true);
        }
        notaFinal = 0;
      } else {
        resultCont = 0;
        badResults.push(0);
        contValue = 0;
        setCont(cont + 1);
        setScore(score + notaFinal);
        setOpCont(opCont + 1);
        revertColor();
        if (opCont === 4) {
          setOpState(true);
        }
        notaFinal = 0;
      }
      //console.log("Subio nota, ahora tiene: " + score);
    }
  }

  function renderResults() {
    let results = [];
    for (let i = 0; i < opScore.length; i++) {
      results.push(
        <ListGroupItem
          style={{
            color: opScore[i] === 100 && badResults[i] === 0 ? "green" : "red",
          }}
        >
          {opScore[i] === 100 && badResults[i] === 0 ? (
            <CheckCircle />
          ) : (
            <XCircle />
          )}{" "}
          &nbsp;
          {badResults[i] === 1 ? 0 : opScore[i]} =
        </ListGroupItem>
      );
    }
    /**opScore.forEach((element) => {
      results.push(
        <ListGroupItem style={{ color: element === 100 ? "green" : "red" }}>
          {element === 100 ? <CheckCircle /> : <XCircle />} &nbsp;
          {element} =
        </ListGroupItem>
      );
    });**/
    return results;
  }

  function renderGeneralResult() {
    //350 es 70%
    let result = 0;
    if (score === 500) {
      result = 100;
    } else if (score === 450) {
      result = 90;
    } else if (score === 400) {
      result = 80;
    } else if (score === 350) {
      result = 70;
    } else if (score === 300) {
      result = 60;
    } else if (score === 250) {
      result = 50;
    } else if (score === 200) {
      result = 40;
    } else if (score === 150) {
      result = 30;
    } else if (score === 100) {
      result = 20;
    } else if (score === 50) {
      result = 10;
    } else if (score === 0) {
      result = 0;
    }
    return (
      <div style={{ color: result >= 70 ? "green" : "red" }}>{result}%</div>
    );
  }

  /**useEffect(() => {
    console.log(opScore);
  }, [opScore]);**/
  // function renderResults() {}

  /**function checkEmpty(){
    if (finalWord.length !== 0 ){
      return finalWord[cont]
    }
  }**/

  let displayContent = (
    <div>
      <div className={opState ? "hidden" : "shown"}>
        <h1>Aprender Español #1</h1>
        <hr />

        <h3 style={{ width: "100%" }}>
          {"Seleccionar los legos para formar esta palabra: " + splitWord()}
        </h3>
        <br></br>
        <br></br>

        <div style={{ fontSize: "20px", color: "red" }} id="error"></div>

        {createBricksOperations()}
        <br></br>
        <br></br>
        <div className="button">
          <Button
            className="button"
            variant="outline-primary"
            onClick={() => nextOP()}
          >
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  );

  let displayResults = (
    <div className="activity-container align-middle">
      <div className={opState ? "shown" : "hidden"}>
        <div className="cuadro">
          <Card className="text-center" style={{ fontSize: "24px" }}>
            <Card.Header>
              <Card.Title style={{ fontSize: "28px" }}>Resultado</Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup className="list-group-flush">
                {renderResults()}
              </ListGroup>
            </Card.Body>
            <Card.Footer className="text-muted">
              {renderGeneralResult()}
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );

  function createBricksOperations() {
    let numberRandom = Math.floor(Math.random() * (8 - 5 + 1)) + 5;

    fillerWords(numberRandom);

    let bricks = [];
    let randomDisplay = arrayDisplay.sort(function () {
      return Math.random() - 0.5;
    });

    for (let index = 0; index < numberRandom; index++) {
      bricks.push(
        <Brick
          color={blockColors[Math.floor(Math.random() * (6 - 1 + 1))]}
          text={randomDisplay[index]}
          id={index}
          onClick={() => {
            changeColor(document.getElementById(index).id);
            getResult(randomDisplay[index]);
          }}
        />
      );
    }

    return <div className="inner-container"> {bricks} </div>;
  }
  return (
    <div>
      {displayContent} {displayResults}
    </div>
  );
}
export default Operation;
