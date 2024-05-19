import styles from "../Css modules/header.module.css"
import img from "../assets/akar-icons_calculator.png"
function Header(props)
{
    
    return (
        <header style = {{display:"flex", flexDirection:"row", width:300, alignItems:"center", margin:"48px auto 0 auto"}}>
            <img src ={img} style ={{marginRight:20,width:38,height:38 }}/>
            <h1 style = {{fontWeight:700, fontSize:28}}>ChainCalc.com</h1>
        </header>
    )
}

export default Header;