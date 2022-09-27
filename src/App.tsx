import { useState } from "react";

interface Dog {
  message: string;
  status: string;
}

// the issue wasn't with the dog history array being empty, 
//it was becuase I was using the same handler to fetch the initial dog as i was to keep the history
// and when the page loads, the dog state WILL be initially empty. using an if statement to handle this 'dog' state solved the issue

function App() {
  const [dog, setDog] = useState<Dog>();
  const [dogHistory, setDogHistory] = useState<Dog[]>([]);

  console.log(dogHistory);

  const handleGetDog = async () => {

    if (dog) {
      setDogHistory([...dogHistory, dog])
    }

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


  const dogHistoryList = dogHistory.map((dog, index) => <img src={dog.message} alt="random hound"/>)

  if (dog) {
    return (
      <div>
        <h1>Dog app</h1>
        <img src={dog.message} alt="" />
        <hr />
        <button onClick={handleGetDog}>Get another dog</button>
        <hr />
        <section>
        {dogHistoryList}
        </section>
        
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
