function adminPanel() {
  const isAdmin = true
  return (<>
    <div>
      {isAdmin ? (<p>Admin Panel</p>) : (<p>User Panel</p>)}
    </div>
    {/* თავში ვუწერთ ცვლადის სახელს, ?-ის შემდეგ თუ ის true არის რა გამოიტანოს და :-ის შემდეგ რა გამოიტანოს თუ ცვლადი false არის */}
  </>)
}

export default adminPanel