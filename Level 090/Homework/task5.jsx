function showTextFunction() {
  const showText = true
  return (<>
    <div>
      {showText && <p>This text is visible</p>}
    </div>
  </>)
}

export default showTextFunction