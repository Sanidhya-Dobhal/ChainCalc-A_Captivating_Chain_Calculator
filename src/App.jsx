import React, { useState } from "react";
import "./App.css";
import Inp_field from "./Components/Maincalulator/inp_field.jsx";
import Buttons from "./Components/Maincalulator/buttons.jsx";
import styles from "./Css modules/app.module.css";
import Features_comp from "./Components/features_comp.jsx";
import Header from "./Components/header.jsx";

function App() {
  const [ScreenState, setScreenState] = useState("");
  let [exp, setExp] = useState("");
  const [wasOp, setWasOp] = useState(false);
  const [retain, setRetain] = useState(false);
  const [finalRes, setFinalRes] = useState(0);
  let fi1 = 0;
  const [color, setColor] = useState("black");
  function commonHandler(buttonElement) {
    let operators_arr = ["+", "-", "*", "/"];
    setColor("Black");
    if (ScreenState === "Syntax Error" || ScreenState === "Enter number") {
      if (
        operators_arr.includes(buttonElement.innerHTML.trim()) ||
        buttonElement.innerHTML === "="
      ) {
        setScreenState("Enter number");
      } else if (buttonElement.innerHTML.substring(0, 4) === "<img") {
        setScreenState("");
      } else {
        setScreenState(buttonElement.innerHTML);
        setExp(buttonElement.innerHTML);
      }
    } else {
      if (retain) {
        if (operators_arr.includes(buttonElement.innerHTML.trim())) {
          setExp(finalRes);
          fi1 = 1;
          setWasOp(true);
        } else if (buttonElement.innerHTML === "=") {
          setExp(finalRes);
          fi1 = 1;
        } else if (buttonElement.innerHTML.substring(0, 4) === "<img") {
          console.log(
            "expression after C is ",
            String(finalRes).substring(0, String(finalRes).length - 1)
          );
          setExp(String(finalRes).substring(0, String(finalRes).length - 1));
          setScreenState(
            String(finalRes).substring(0, String(finalRes).length - 1)
          );
          console.log("The screen state is ", ScreenState);
          exp =
            String(finalRes).substring(0, String(finalRes).length - 1) + " "; //The " " is added because the control of the code will go in a piece of code where the exp's last digit will be trimmed again therefore when that happens no data is lost and " " is trimmed
        }
        if (buttonElement.innerHTML.substring(0, 4) !== "<img")
          setScreenState(buttonElement.innerHTML);
        setRetain(false);
      } else if (
        !operators_arr.includes(buttonElement.innerHTML.trim()) &&
        wasOp === false
      ) {
        setScreenState(ScreenState + buttonElement.innerHTML);
      } else {
        setScreenState(buttonElement.innerHTML);
        setWasOp(true);
        if (!operators_arr.includes(buttonElement.innerHTML.trim())) {
          setWasOp(false);
        }
      }
      if (buttonElement.innerHTML === "=") {
        console.log("finalRes value is ", finalRes);
        if (exp !== "") {
          try {
            setScreenState(eval(exp));
            setFinalRes(eval(exp));
            setColor("Green");
            setRetain(true);
          } catch (err) {
            setScreenState("Syntax Error");
          }
          setExp("");
        } else {
          setScreenState(ScreenState);
        }
      } else if (buttonElement.innerHTML.substring(0, 4) === "<img") {
        if (String(ScreenState).length > 0) {
          setScreenState(
            String(ScreenState).substring(0, String(ScreenState).length - 1)
          );
          setExp(String(exp).substring(0, String(exp).length - 1)); //We know exp would be null before setState, so let me set exp by equating it to the required exp
        } else setScreenState(""); //Expression does not need any change when the screen is blank and ScreenState is set to null as otherwise we will get C on the display
      } else {
        if (fi1 === 1) {
          setExp(finalRes + buttonElement.innerHTML);
        } else setExp(exp + buttonElement.innerHTML); //Adding the numbers to exp string
      }
      console.log("The expression right now : ", exp);
    }
    if (buttonElement.innerHTML === "C") {
      setScreenState("");
      setExp("");
      setColor("black");
      setRetain(false);
      setFinalRes(0);
    }
  }
  function handler(event) {
    if (event.target.tagName === "BUTTON") commonHandler(event.target);
  }
  return (
    <>
      <Header />
      <div id={styles["calc"]}>
        <Inp_field screenState={ScreenState} color={color} />
        <Buttons
          handler={handler}
          screenState={ScreenState}
          screenSet={setScreenState}
          commonHandler={commonHandler}
        />
      </div>
      <Features_comp />
    </>
  );
}
export default App;
