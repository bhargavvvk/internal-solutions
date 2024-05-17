import "./App.css";
import Card from "./components/Card";
function App() {
  const cards = [
    {
      title: "Card 1",
      link: "https://example.com",
    },
    {
      title: "Card 2",
      link: "https://example.com",
    },
    {
      title: "Card 3",
      link: "https://example.com",
    },
  ];

  return (
    <div className="App">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} link={card.link}>
          <h1>Heading</h1>
          <p>{index} is the index of this card</p>
        </Card>
      ))}
    </div>
  );
}

export default App;
