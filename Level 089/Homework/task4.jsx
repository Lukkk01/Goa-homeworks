function App() {
  const users = [
    { id: 1, name: "Anna" },
    { id: 2, name: "Giorgi" },
    { id: 3, name: "Nino" }
  ];
  return (
    <>
      <ul>
        {users.map((user) => {
          <li key={user.id}>
            {user.name}
          </li>
        })}
      </ul>
    </>
  )
}

export default App