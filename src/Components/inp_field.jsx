import styles from "../Css modules/inp_field.module.css";
function Inp_field(props) {
  return (
    <>
      <input
        type="text"
        id={styles["inp_field"]}
        style={{
          color: props.color,
          fontWeight: props.color === "Green" ? 350 : 300,
        }}
        value={props.screenState}
        readOnly
      />
    </>
  );
}

export default Inp_field;
