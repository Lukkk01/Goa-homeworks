import Player from "./Player";

// props არის მნიშვნელობები,
// რომლებსაც parent კომპონენტი (App)
// გადასცემს child კომპონენტს (Player)

function App() {
  return (
    <div>
      <Player
        song="Bohemian Rhapsody"
        artist="Queen"
      />
    </div>
  );
}

export default App;
