function checkAge() {
  const age = 17
  result = ''
  if (age >= 18) {
    result.innerHTML = 'Adult'
  } else {
    result.innerHTML = 'Minor'
  }
  return (<>
    {result}
  </>)
}

export default checkAge