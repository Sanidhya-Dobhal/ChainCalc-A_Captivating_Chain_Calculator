import styles from "../Css modules/buttons.module.css";
function Buttons(props) {
  const arr = [
    "1",
    "2",
    "C",
    "3",
    "4",
    "+",
    "5",
    "6",
    "-",
    "7",
    "8",
    "*",
    "9",
    "0",
    "/",
    ".",
    "=",
  ];
  let count = 0;
  return (
    <div id={styles["btn_grd"]}>
      {arr.map((val) => {
        return (
          <button
            key={++count}
            onClick={props.handler}
            onMouseDown={(e) => (e.target.style.opacity = 0.2)}
            onMouseUp={(e) => {
              if (e.target.style.opacity === 0.6) {
                e.target.style.opacity = 1;
              } else {
                setTimeout(() => (e.target.style.opacity = 1), 100);
              }
            }}
            onMouseOut={(e) => (e.target.style.opacity = 1)}
          >
            {val}
          </button>
        );
      })}
    </div>
  );
}
export default Buttons;
