import { useContext} from "react";
import styles from "../Css modules/buttons.module.css"
import { HandCont } from "../store/context1";
function Buttons(props){
    let arr = ['1','2','C','3','4','+','5','6','-','7','8','*','9','0','/','.','='];
    let count = 0;
    return<div id = {styles["btn_grd"]}>
    {arr.map((val)=>{
        return<button key = {++count} onClick={useContext(HandCont)}>{val}</button>
    })}
    </div>;
}

export default Buttons;