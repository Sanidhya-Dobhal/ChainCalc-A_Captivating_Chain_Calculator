import {useContext} from 'react'
import styles from "../Css modules/inp_field.module.css"
import { Color } from "../store/context1";
import {ScreenStateCont} from "../store/context1";
function Inp_field(props)
{
    return (
    <>
        <input type = "text" id ={styles["inp_field"]} style={{color:useContext(Color)}} value = {useContext(ScreenStateCont)} readOnly/>
    </>
    )
}

export default Inp_field;