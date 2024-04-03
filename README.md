<h1>ChainCalc:A captivating chain calculator</h1>

<h2>Introduction:</h2>
<p>A React-based captivating chain calculator which aims at making calculations easier and more intuitive.This project makes use of concepts like React hooks and props</p>
<h2>Features:</h2>
<h3>Chain Calculation:</h3>  
<li>It enables the seamless continuation of operations using the <b>result of a previous calculation into new expression</b>.</li> 
<li>Upon obtaining a result, applying an operator automatically results in chain calculation.</li> 
<li>If a new number is entered instead, a fresh calculation begins.</li>
<li>This functionality is often seen in phone calculators.</li>
<hr>
<h3>Equal's (=) Functionality:</h3>
<li>
  Pressing "=" evaluates the current expression. If valid, the result is displayed in green.
</li>
<li>
  An expression can be a single number or a combination of numbers and operators.
</li>
<li>
  If the result is on display and "=" is pressed again, the display color turns back to black, treating the result as a regular number. Doing this incorporates a functionality similar to <b>Ans</b> in many calculators, but treating it as a number is more beneficial as we can edit the 'Ans' furthur in a way we would like.
</li>
<li>
  Results are treated differently from regular numbers.
</li>
<h3>Error handling</h3>
<li>In case of an invalid expression Syntax Error is thrown and the user is expected to enter a number to start a new computation.</li>
<hr>
