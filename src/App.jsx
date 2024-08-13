import React, { useState } from "react";
import "./App.css";
import Inp_field from "./Components/inp_field.jsx";
import Buttons from "./Components/buttons.jsx";
import styles from "./Css modules/app.module.css";
import Features_comp from "./Components/features_comp.jsx";
import Header from "./Components/header.jsx";

function App() {
  const [ScreenState, setScreenState] = useState("");
  let [exp, setExp] = useState("");
  const [was_op, setWas_op] = useState(0);
  const [retain, setRetain] = useState(0);
  const [finalRes, setFinalRes] = useState(0);
  let fi1 = 0;
  const [color, setColor] = useState("black");
  function handler(event) {
    let operators_arr = ["+", "-", "*", "/"];
    setColor("Black");
    if (ScreenState === "Syntax Error" || ScreenState === "Enter number") {
      if (
        operators_arr.includes(event.target.innerHTML.trim()) ||
        event.target.innerHTML === "="
      ) {
        setScreenState("Enter number");
      } else if (event.target.innerHTML === "C") {
        setScreenState("");
      } else {
        setScreenState(event.target.innerHTML);
        setExp(event.target.innerHTML);
      }
    } else {
      if (retain === 1) {
        if (operators_arr.includes(event.target.innerHTML.trim())) {
          setExp(finalRes);
          fi1 = 1;
          setWas_op(1);
        } else if (event.target.innerHTML === "=") {
          setExp(finalRes);
          fi1 = 1;
        } else if (event.target.innerHTML.trim() === "C") {
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
        if (event.target.innerHTML !== "C")
          setScreenState(event.target.innerHTML);
        setRetain(0);
      } else if (
        !operators_arr.includes(event.target.innerHTML.trim()) &&
        was_op === 0
      ) {
        setScreenState(ScreenState + event.target.innerHTML);
      } else {
        setScreenState(event.target.innerHTML);
        setWas_op(1);
        if (!operators_arr.includes(event.target.innerHTML.trim())) {
          setWas_op(0);
        }
      }
      if (event.target.innerHTML === "=") {
        console.log("finalRes value is ", finalRes);
        if (exp !== "") {
          try {
            setScreenState(eval(exp));
            setFinalRes(eval(exp));
            setColor("Green");
            setRetain(1);
          } catch (err) {
            setScreenState("Syntax Error");
          }
          setExp("");
        } else {
          setScreenState(ScreenState);
        }
      } else if (event.target.innerHTML === "C") {
        if (String(ScreenState).length > 0) {
          setScreenState(
            String(ScreenState).substring(0, String(ScreenState).length - 1)
          );
          setExp(String(exp).substring(0, String(exp).length - 1)); //We know exp would be null before setState, so let me set exp by equating it to the required exp
        } else setScreenState(""); //Expression does not need any change when the screen is blank and ScreenState is set to null as otherwise we will get C on the display
      } else {
        if (fi1 === 1) {
          setExp(finalRes + event.target.innerHTML);
        } else setExp(exp + event.target.innerHTML); //Adding the numbers to exp string
      }
      console.log("The expression right now : ", exp);
    }
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
        />
      </div>
      <Features_comp />
    </>
  );
}
export default App;
