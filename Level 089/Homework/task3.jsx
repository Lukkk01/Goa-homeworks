function App() {
  numbers = [1, 2, 3, 4, 5]
  return (
    <>
      <ul>
        {numbers.map((number, index) => {
          <li key='num'>
            {/* map მეთოდი გადაუვლის ყველა ელემენტს სიაში და დააბრუნებტს ახალ სიას */}
            {num % 2 === 0 ? num * 2 : num}
          </li>
        })}
      </ul>
    </>
  )
}

export default App