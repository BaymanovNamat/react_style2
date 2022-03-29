import ArticleList from "./components/ArticleList/ArticleList";
import List from "./components/List/List";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ProgressRedBar from "./components/ProgressRedBar/ProgressRedBar";
import Table from "./components/Table/Table";

function App() {
  const vegies = ["Carrot", "Potato", "Strawberry"];

  const fruits = ["Apple", "Pear", "PineApple"];

  const fruitList = fruits.map((fruit) => {
    return <li>{fruit}!</li>;
  });

  const cartoons = [
    { name: "Naruto", strength: "clones" },
    { name: "Balto", strength: "Confidence" },
    { name: "Benten", strength: "his clock" },
  ];

  const cartoonListes = cartoons.map((cartoon) => (
    <li>
      {cartoon.name}: {cartoon.strength}
    </li>
  ));

  const articles = [
    {
      title: "This is an example article",
      url: "https://google.com",
      teaser:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, maxime! Labore, quasi eveniet, accusamus expedita commodi ducimus exercitationem sapiente ullam velit minus rem, magni explicabo et voluptas! Similique, ea nemo.",
    },
    {
      title: "Another an example as article",
      url: "#",
      teaser:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, maxime! Labore, quasi eveniet, accusamus expedita commodi ducimus exercitationem sapiente ullam velit minus rem, magni explicabo et voluptas! Similique, ea nemo.",
    },
    {
      title: "Last article an example",
      url: "#",
      teaser:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, maxime! Labore, quasi eveniet, accusamus expedita commodi ducimus exercitationem sapiente ullam velit minus rem, magni explicabo et voluptas! Similique, ea nemo.",
    },
  ];

  const example = [
    ["example", "example", "example"],
    ["example", "example", "example"],
    ["example", "example", "example"],
  ];

  return (
    <div className="App">
      <Table src={example} />

      <ProgressBar progress={25} />
      <ProgressBar progress={50} color="orange" />
      <ProgressBar progress={30} />
      <ProgressBar progress={60} />
      <ProgressBar progress={90} />

      <ProgressRedBar progress="25" />
      <ProgressRedBar progress="50" color="yellow" />

      <ProgressRedBar progress="20" color="blue" />

      <ProgressRedBar progress="65" color="green" />

      <h2>hello world!</h2>

      <div>{vegies}</div>

      <ol>{fruitList}</ol>

      <ol>{cartoonListes}</ol>

      <List src={vegies} />

      <ArticleList src={articles} />
    </div>
  );
}

export default App;
