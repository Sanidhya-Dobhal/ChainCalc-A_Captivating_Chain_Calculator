import styles from "../Css modules/buttons.module.css"
function Buttons(props){
    let arr = ['1','2','C','3','4','+','5','6','-','7','8','*','9','0','/','.','='];
    let count = 0;
    return<div id = {styles["btn_grd"]}>
    {arr.map((val)=>{
        return<button key = {++count} onClick={props.handler}>{val}</button>
    })}
    </div>;
}

export default Buttons;