function App() {
  const isLoggedIn = true;

  let message;

  if (isLoggedIn) {
    message = <p>User is logged in</p>;
  } else {
    message = <p>User is not logged in</p>;
  }
  
  return (
    <>
      <div>
        {/* if არ მუშაობს რადგან if არის statement და მისი გამოყენება არ შეიძლება jsx-ში */}
        {/*

          {
          if (isLoggedIn) {
            <p>User is logged in</p>
          }
        }

        */}
      </div>

      {/* სწორი გზა - ლოგიკა არის jsx-ის გარეთ */}
      <div>
        {message}
      </div>
    </>
  )
}

export default App