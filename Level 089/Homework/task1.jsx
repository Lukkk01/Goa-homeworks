function App() {
  let boolean = true
  return (
    <>
      <div>
        {/* && არის and ოპერატორი jsx-ში და ის დაარენდერებს &&-ის მარჯვენა მხარეს თუ მარცხენა მხარე არის true და არ დაარენდერებს თუ მარცხენა მხარე არის false */}
        {boolean && <p>User is active</p>}
      </div>
    </>
  )
}

export default App