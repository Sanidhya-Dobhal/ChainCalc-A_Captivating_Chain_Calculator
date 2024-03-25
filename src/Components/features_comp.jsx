import styles from "../Css modules/features_comp.module.css";
function Featured_comp() {
  return (
    <div id={styles["features_div"]}>
      <div class = {styles.div_in_feat}>
        <h3>Chain Calculation:</h3>
        <p>
          Chain Calculation enables the seamless continuation of operations
          using the result of a previous calculation into new expression. Upon
          obtaining a result, applying an operator automatically results in
          chain calculation. If a new number is entered instead, a fresh
          calculation begins. 
        </p>
        <p>
          <i>This functionality is often seen in phone calculators.</i>
        </p>
      </div>
      <div class = {styles.div_in_feat}>
      <h3>Equal's (=) Functionality:</h3>
      <ul>
        <li>
          Pressing "=" evaluates the current expression. If valid, the result is
          displayed in green.
        </li>
        <li>
          An expression can be a single number or a combination of numbers and
          operators.
        </li>
        <li>
          If the result is on display and "=" is pressed again, the display
          color turns back to black, treating the result as a regular number.
          Doing this incorporates a functionality similar to{" "}
          <b style={{ fontWeight: 600 }}>Ans</b> in many calulators, but
          treating it as a number is more beneficial as we can edit the 'Ans'
          furthur in a way we would like.
        </li>
        <li>Results are treated differently from regular numbers.</li>
      </ul>
      </div>
      <div class = {styles.div_in_feat}>
      <h3>Error handling</h3>
      <p>
        In case of an invalid expression Syntax Error is thrown and the user is
        expected to enter a number to start a new computation.
      </p>
      </div>
    </div>
  );
}

export default Featured_comp;
