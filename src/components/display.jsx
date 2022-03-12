import '../App.css';
import { useState } from 'react';
import { Button } from './button';

export const Display = (props) => {
{/*applying useState to enable counting up & down, & adding a reset option:*/}
  const [count, setCount] = useState(0);

    let decrementCount = () => {
    setCount(count - 1);
    };
    let incrementCount = () => {
      setCount(count + 1);
    };
    let resetCount = () => {
      setCount(0);
    };
{/*converting count number data into a string and extracting from it for conversion to graphical output:*/}
    let countString = String(count / 1000);
    let thousandsDisplay = countString.slice(0, 1);
    let hundredsDisplay = countString.slice(2, 3);
    let tensDisplay = countString.slice(3, 4);
    let unitsDisplay = countString.slice(4, 5);
{/*setting upper & lower counting limits, preventing looping back to the start & entering number territory, respectively:*/}
    if (count < 0) {setCount(0)};
    if (count > 9999) {setCount(9999)};
    if (thousandsDisplay == "") {thousandsDisplay = "0"};
    if (hundredsDisplay == "") {hundredsDisplay = "0"};
    if (tensDisplay == "") {tensDisplay = "0"};
    if (unitsDisplay == "") {unitsDisplay = "0"};
{/*using the 'ternary operator' to set variable styles for creating seven-segment display output of counted units, tens, hundreds & thousands:*/}
  return (
    <div className="counter-housing">
      <div className="display-panel">
        <div className="digit-container">
          <div className={`digit-segments ${
          thousandsDisplay == "0" ? "upper-segments-zero" :
          thousandsDisplay == "1" ? "upper-segments-one" :
          thousandsDisplay == "2" ? "upper-segments-two" :
          thousandsDisplay == "3" ? "upper-segments-three" :
          thousandsDisplay == "4" ? "upper-segments-four" :
          thousandsDisplay == "5" ? "upper-segments-five" :
          thousandsDisplay == "6" ? "upper-segments-six" :
          thousandsDisplay == "7" ? "upper-segments-seven" :
          thousandsDisplay == "8" ? "upper-segments-eight" :
          "upper-segments-nine"}`}>
          </div>
          <div className={`digit-segments ${
          thousandsDisplay == "0" ? "lower-segments-zero" :
          thousandsDisplay == "1" ? "lower-segments-one" :
          thousandsDisplay == "2" ? "lower-segments-two" :
          thousandsDisplay == "3" ? "lower-segments-three" :
          thousandsDisplay == "4" ? "lower-segments-four" :
          thousandsDisplay == "5" ? "lower-segments-five" :
          thousandsDisplay == "6" ? "lower-segments-six" :
          thousandsDisplay == "7" ? "lower-segments-seven" :
          thousandsDisplay == "8" ? "lower-segments-eight" :
          "lower-segments-nine"}`}>
          </div>
        </div>
        <div className="digit-container">
          <div className={`digit-segments ${
          hundredsDisplay == "0" ? "upper-segments-zero" :
          hundredsDisplay == "1" ? "upper-segments-one" :
          hundredsDisplay == "2" ? "upper-segments-two" :
          hundredsDisplay == "3" ? "upper-segments-three" :
          hundredsDisplay == "4" ? "upper-segments-four" :
          hundredsDisplay == "5" ? "upper-segments-five" :
          hundredsDisplay == "6" ? "upper-segments-six" :
          hundredsDisplay == "7" ? "upper-segments-seven" :
          hundredsDisplay == "8" ? "upper-segments-eight" :
          "upper-segments-nine"}`}>
          </div>
          <div className={`digit-segments ${
          hundredsDisplay == "0" ? "lower-segments-zero" :
          hundredsDisplay == "1" ? "lower-segments-one" :
          hundredsDisplay == "2" ? "lower-segments-two" :
          hundredsDisplay == "3" ? "lower-segments-three" :
          hundredsDisplay == "4" ? "lower-segments-four" :
          hundredsDisplay == "5" ? "lower-segments-five" :
          hundredsDisplay == "6" ? "lower-segments-six" :
          hundredsDisplay == "7" ? "lower-segments-seven" :
          hundredsDisplay == "8" ? "lower-segments-eight" :
          "lower-segments-nine"}`}>
          </div>
        </div>
        <div className="digit-container">
          <div className={`digit-segments ${
          tensDisplay == "0" ? "upper-segments-zero" :
          tensDisplay == "1" ? "upper-segments-one" :
          tensDisplay == "2" ? "upper-segments-two" :
          tensDisplay == "3" ? "upper-segments-three" :
          tensDisplay == "4" ? "upper-segments-four" :
          tensDisplay == "5" ? "upper-segments-five" :
          tensDisplay == "6" ? "upper-segments-six" :
          tensDisplay == "7" ? "upper-segments-seven" :
          tensDisplay == "8" ? "upper-segments-eight" :
          "upper-segments-nine"}`}>
          </div>
          <div className={`digit-segments ${
          tensDisplay == "0" ? "lower-segments-zero" :
          tensDisplay == "1" ? "lower-segments-one" :
          tensDisplay == "2" ? "lower-segments-two" :
          tensDisplay == "3" ? "lower-segments-three" :
          tensDisplay == "4" ? "lower-segments-four" :
          tensDisplay == "5" ? "lower-segments-five" :
          tensDisplay == "6" ? "lower-segments-six" :
          tensDisplay == "7" ? "lower-segments-seven" :
          tensDisplay == "8" ? "lower-segments-eight" :
          "lower-segments-nine"}`}>
          </div>
        </div>
        <div className="digit-container">
          <div className={`digit-segments ${
          unitsDisplay == "0" ? "upper-segments-zero" :
          unitsDisplay == "1" ? "upper-segments-one" :
          unitsDisplay == "2" ? "upper-segments-two" :
          unitsDisplay == "3" ? "upper-segments-three" :
          unitsDisplay == "4" ? "upper-segments-four" :
          unitsDisplay == "5" ? "upper-segments-five" :
          unitsDisplay == "6" ? "upper-segments-six" :
          unitsDisplay == "7" ? "upper-segments-seven" :
          unitsDisplay == "8" ? "upper-segments-eight" :
          "upper-segments-nine"}`}>
          </div>
          <div className={`digit-segments ${
          unitsDisplay == "0" ? "lower-segments-zero" :
          unitsDisplay == "1" ? "lower-segments-one" :
          unitsDisplay == "2" ? "lower-segments-two" :
          unitsDisplay == "3" ? "lower-segments-three" :
          unitsDisplay == "4" ? "lower-segments-four" :
          unitsDisplay == "5" ? "lower-segments-five" :
          unitsDisplay == "6" ? "lower-segments-six" :
          unitsDisplay == "7" ? "lower-segments-seven" :
          unitsDisplay == "8" ? "lower-segments-eight" :
          "lower-segments-nine"}`}>
          </div>
        </div>
      </div>
{/*sending to Button component the styles, label & action for each button:*/}
      <div className="buttons-panel">
        <Button styles={"decrement"} label={"-"} action={decrementCount} />
        <Button styles={"reset"} label={"RESET"} action={resetCount} />
        <Button styles={"increment"} label={"+"} action={incrementCount} />
      </div>
    </div>
  );
}
