import { useState } from "react";

interface Dog {
  message: string;
  status: string;
}

function App() {
  const [dog, setDog] = useState<Dog>();

  const handleGetDog = async () => {
    const response = await fetch(
      "https://dog.ceo/api/breed/hound/images/random"
    );
    const jsonBody: Dog = await response.json();
    setDog(jsonBody);
  };

  // const handleGetJoke = () => {
  //   fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
  //     .then((response) => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // };

  if (dog) {
    return (
      <div>
        <h1>Dog app</h1>
        <img src={dog.message} alt="" />
        <hr />
        <button onClick={handleGetDog}>Get another dog</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dog app</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          dog from an API!
        </p>
        <button onClick={handleGetDog}>Get dog</button>
      </div>
    );
  }
}

export default App;
