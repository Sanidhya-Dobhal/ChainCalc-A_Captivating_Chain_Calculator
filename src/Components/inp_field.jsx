import styles from "../Css modules/inp_field.module.css"
function Inp_field(props)
{
    
    return (
    <>
        <input type = "text" id ={styles["inp_field"]} style={{color:props.color}} value = {props.screenState} readOnly/>
    </>
    )
}

export default Inp_field;