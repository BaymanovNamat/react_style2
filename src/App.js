import List from "./components/List/List";


function App() {

  const vegies = ["Carrot", "Potato", "Strawberry",];


  const fruits = ["Apple", "Pear", "PineApple",];

  const fruitList = fruits.map((fruit) => {
    return (
      <li>{fruit}!</li>
    );
  });


  const cartoons = [
    {name: "Naruto", strength: "clones",},
    {name: "Balto", strength: "Confidence",},
    {name: "Benten", strength: "his clock",},
  ];


  const cartoonListes = cartoons.map((cartoon) => (
    <li>
      {cartoon.name}: {cartoon.strength}
    </li>
  ));

  return (
    <div className="App">
      <h2>
        hello world!
      </h2>

      <div>
        {vegies}
      </div>


      <ol>
        {fruitList}
      </ol>

      <ol>
        {cartoonListes}
      </ol>


      <List src={vegies}/>

    </div>
  );
}

export default App;
