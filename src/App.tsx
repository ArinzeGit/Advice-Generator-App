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

  const getAdvice = () => {
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
    <div className="app">
      <main>
        <div className="card-container">
          <AdviceCard adviceId={id}>{advice}</AdviceCard>
          <div className="pattern-divider-desktop">
            <PatternDividerDesktop />
          </div>
          <div className="pattern-divider-mobile">
            <PatternDividerMobile />
          </div>
          <div className="button-container">
            <Button onclick={getAdvice} />
          </div>
        </div>
      </main>
      <footer className="attribution-container">
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/ArinzeGit" target="_blank">
            Arinze Owoh
          </a>
          .
        </div>
      </footer>
    </div>
  );
};

export default App;
