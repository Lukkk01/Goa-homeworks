function App() {
  const fiftyFifty = Math.random() > 0.5;

  return (
    <div>
      {fiftyFifty ? (
        <p>i win</p>
      ) : (
        <p>i won cuz i learned react</p>
      )}
    </div>
  );
}

export default App;
