function App() {
  const isLoggedIn = false;
  return (
    <>
      {isLoggedIn ? <p>Welcome back</p> : <p>Please log in</p>}
      {/* თუ ბულეანი არის true გამოიტანს ?-ის მერე რაც წერია იმას თუ არის false მაშინ :-ის მერე რაც წერია იმას გამოიტანს */}
    </>
  )
}

export default App