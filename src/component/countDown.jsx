import { useEffect } from "react";
import "/src/App.css";

const Countdown = () => {
  useEffect(() => {
    const nums = document.querySelectorAll(".nums span");
    const counter = document.querySelector(".counter");
    const finalMessage = document.querySelector(".final");

    if (!nums || !counter || !finalMessage) return;

    nums.forEach((num, idx) => {
      num.addEventListener("animationend", (e) => {
        if (e.animationName === "goIn" && idx !== nums.length - 1) {
          num.classList.remove("in");
          num.classList.add("out");
        } else if (e.animationName === "goOut" && num.nextElementSibling) {
          num.nextElementSibling.classList.add("in");
        } else {
          counter.classList.add("hide");
          finalMessage.classList.add("show");
        }
      });
    });
  }, []);

  return (
    <div className="countdown-wrapper">
      <div className="counter">
        <div className="nums">
          <span className="in">3</span>
          <span>2</span>
          <span>1</span>
          <span>0</span>
        </div>
        <h4>Get Ready</h4>
      </div>
      <div className="final">
        <h1>GO</h1>
      </div>
    </div>
  );
};

export default Countdown;
