function App() {
  const notificationsCount = 3
  return (
    <>
      {notificationsCount > 0 && <p>You have new notifications</p>}
      {/* && მუშაობს რადგან notificationsCount მეტია ნულზე */}
    </>
  )
}

export default App