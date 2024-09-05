import { useRef } from "react";
import styles from "../../Css modules/buttons.module.css";
import backspace from "../../assets/backspace.svg";
function Buttons(props) {
  const arr = [
    "1",
    "2",
    "backspace",
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
    "C",
    "=",
  ];
  let count = 0;
  let backspaceRef = useRef(null);
  const backspaceStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div id={styles["btn_grd"]}>
      {arr.map((val) => {
        return (
          <button
            ref={val === "backspace" ? backspaceRef : null}
            key={++count}
            onClick={props.handler}
            onMouseDown={(e) => (e.target.style.opacity = 0.2)}
            onMouseUp={(e) => {
              setTimeout(() => (e.target.style.opacity = 1), 100);
            }}
            onMouseOut={(e) => (e.target.style.opacity = 1)}
            style={val === "backspace" ? backspaceStyle : null}
          >
            {val === "backspace" ? (
              <img
                src={backspace}
                width={30}
                onMouseDown={() => (backspaceRef.current.style.opacity = 0.2)}
                onMouseUp={() => {
                  setTimeout(
                    () => (backspaceRef.current.style.opacity = 1),
                    100
                  );
                }}
                onMouseOut={() => (backspaceRef.current.style.opacity = 1)}
                onClick={() => props.commonHandler(backspaceRef.current)}
              />
            ) : (
              val
            )}
          </button>
        );
      })}
    </div>
  );
}
export default Buttons;
