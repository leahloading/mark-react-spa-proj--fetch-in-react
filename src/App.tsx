import { useState } from "react";

interface Dog {
  message: string;
  status: string;
}

function App() {
  const [dog, setDog] = useState<Dog>();

  const handleGetJoke = async () => {
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

  if (joke) {
    return (
      <div>
        <h1>Joke app</h1>
        <details>
          <summary>{joke.setup}</summary>
          <p>{joke.punchline}</p>
        </details>
        <hr />
        <button onClick={handleGetJoke}>Get another joke</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Joke app</h1>
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
