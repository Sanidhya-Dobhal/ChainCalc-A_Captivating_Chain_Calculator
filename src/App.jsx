import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inp_field from "./Components/inp_field.jsx"
import Buttons from "./Components/buttons.jsx"

function App() {
  let [ScreenState,setScreenState] = useState("");
  let [exp,setExp] = useState("");
  let [was_op,setWas_op] = useState(0)
  let [clr,setClr] = useState(0);
  let [finalRes ,setFinalRes] = useState(0)
  let fi1=0;
  function hand(event)
  {
    let special_arr =['+','-','*','/'];
    // if(ScreenState==="Syntax Error"){
    //   if(special_arr.includes(event.target.innerHTML.trim()))
    //   {
    //     set
    // }
    if(clr === 1)
    {
      if(special_arr.includes(event.target.innerHTML.trim()))
      {
        setExp(finalRes)
        fi1=1;
        setWas_op(1);
      }
      if(event.target.innerHTML ==='=')
      {
        setExp(finalRes);

      }
      else if(event.target.innerHTML.trim()==='C')
      {
          console.log(String(finalRes).substring(0,String(finalRes).length-1));
          setExp(String(finalRes).substring(0,String(finalRes).length-1));
          setScreenState(String(finalRes).substring(0,String(finalRes).length-1));

      }
      
      if(event.target.innerHTML!=='C'){
        setScreenState(event.target.innerHTML);
      }
      setClr(0);
    }
    else if((!special_arr.includes(event.target.innerHTML.trim()) && was_op===0)){
      setScreenState(ScreenState + event.target.innerHTML);
    }
    else{
      setScreenState(event.target.innerHTML);
      setWas_op(1);
      if(!special_arr.includes(event.target.innerHTML.trim())){
        setWas_op(0);
      }
    }
    if(event.target.innerHTML === "="){
      if(exp!==""){
        try{
        setScreenState(eval(exp))
        setFinalRes(eval(exp));
        }
        catch(err){
          setScreenState("Syntax Error");
        }
        setExp("");
        setClr(1);
      }
      else{
        setScreenState(ScreenState);
      }
    }
    else if(event.target.innerHTML==='C')
    {
      if(ScreenState.length>0){
        setScreenState(ScreenState.substring(0,ScreenState.length-1));
        setExp(exp.substring(0,exp.length-1));
      }
    }
    else{
      if(fi1===1){
        setExp(finalRes+event.target.innerHTML)
      }
      else
      setExp(exp + event.target.innerHTML);//Adding the numbers to exp string
    }
    console.log(exp)
  }
  return (
    <div style = {{border: "2px solid black", width:"10vw",margin:"auto",padding:"4px",backgroundColor:"rgb(245, 245, 220)",height:"205px"}}>
      <Inp_field screenState = {ScreenState}/>
      <Buttons handler = {hand} screenState = {ScreenState} screenSet = {setScreenState}/>
    </div>
  )
}
export default App
