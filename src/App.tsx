import { useState } from "react";
import "./App.css";
import AdviceCard from "./components/AdviceCard";
import Button from "./components/Button";
import PatternDividerDesktop from "./components/PatternDividerDesktop";
import PatternDividerMobile from "./components/PatternDividerMobile";

const App = () => {
  const [id, setId] = useState(117);

  const [advice, setAdvice] = useState(
    "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  );

  const GetAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        const newId = data.slip.id;
        setId(newId);
        const newAdvice = data.slip.advice;
        setAdvice(newAdvice);
        console.log(newId, newAdvice);
      })
      .catch((error) => {
        console.log("Error fetching advice:", error);
      });
  };

  return (
    <div className="App">
      <main>
        <div className="CardContainer">
          <AdviceCard adviceId={id}>{advice}</AdviceCard>
          <div className="PatternDividerDesktop">
            <PatternDividerDesktop />
          </div>
          <div className="PatternDividerMobile">
            <PatternDividerMobile />
          </div>
          <div className="ButtonContainer">
            <Button onclick={GetAdvice} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
