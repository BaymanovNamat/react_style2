import ArticleList from "./components/ArticleList/ArticleList";
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




  const articles = [
    {title: "This is an example article", url: "#", teaser: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, maxime! Labore, quasi eveniet, accusamus expedita commodi ducimus exercitationem sapiente ullam velit minus rem, magni explicabo et voluptas! Similique, ea nemo.",},
    {title: "Another an example as article", url: "#", teaser: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, maxime! Labore, quasi eveniet, accusamus expedita commodi ducimus exercitationem sapiente ullam velit minus rem, magni explicabo et voluptas! Similique, ea nemo.",},
    {title: "Last article an example", url: "#", teaser: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, maxime! Labore, quasi eveniet, accusamus expedita commodi ducimus exercitationem sapiente ullam velit minus rem, magni explicabo et voluptas! Similique, ea nemo.",},
  ];


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



      <ArticleList src={articles}/>

    </div>
  );
}

export default App;
