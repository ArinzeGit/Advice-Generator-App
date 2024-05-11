# Frontend Mentor - 'Advice generator app' solution

This is my solution to the ['Advice generator app' challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Advice Generator App Screenshot1](public/Advice%20Generator%20App%20Screenshot1.PNG)
![Advice Generator App Screenshot2](public/Advice%20Generator%20App%20Screenshot2.PNG)

### Links

- Solution URL: View the GitHub repository [here](https://github.com/ArinzeGit/Advice-Generator-App)
- Live Site URL: I have hosted the project on GitHub Pages [here](https://arinzegit.github.io/Advice-Generator-App/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [Flexbox](https://www.w3.org/TR/css-flexbox-1/) - CSS web layout model
- [TypeScript](https://www.typescriptlang.org/) - Programming language that extends JavaScript
- [React](https://react.dev/) - JavaScript library
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [Vite](https://vitejs.dev/) - React build tool with local development server
- [Advice Slip JSON API](https://api.adviceslip.com/) - API that generates random advice

### What I learned

- I learned how to consume `APIs`. After reading the documentation, I used the `fetch()` function to make `HTTP requests` to the [Advice Slip JSON API](https://api.adviceslip.com/) endpoints. On receiving response, data is processed to extract the advice and ID used to update the `state` of the app. I also wrote code to `handle errors`.
  - I also learned that I could pass the `function` that makes the `API call` and updates the state to the `button` as `props` so that the button can be used to trigger the state change. In my case, the `getAdvice` function.

```js
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
    </div>
  );
};

export default App;
```

- I learned that `letter-spacing` in CSS can be used to set the space between letters in a text. Before now, I thought it was fixed and dependent on the `font-family`.

### Continued development

- Consuming APIs
- CSS Flexbox
- Media queries
- Typescript
- React

I found these techniques very useful. I will continue focusing on them in future projects to refine and perfect them.

### Useful resources

- [useContext In 2 Minutes - the React Hooks series](https://youtu.be/_HdrLsyAdJg?si=X0p7hI0FCWqUAs9c) - This YouTube video helped me understand `useContext` and when to use it. I'd recommend it to anyone still learning this concept.

## Author

- GitHub - [@ArinzeGit](https://github.com/ArinzeGit)
- Frontend Mentor - [@ArinzeGit](https://www.frontendmentor.io/profile/ArinzeGit)
- LinkedIn - [@Dennings-Owoh](https://www.linkedin.com/in/dennings-owoh-4839971b1/)
- Instagram - [@\_.arinze.\_](https://www.instagram.com/_.arinze._/)
- Twitter - [@Arinze98433402](https://twitter.com/Arinze98433402)
