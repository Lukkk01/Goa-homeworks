function Programming() {
  const things = ["HTML", "CSS", "JavaScript", "React"]
  return (<>
    <div>
      <ul>
        {things.map((thing, index) => (
          <li key={index}>{thing}</li>
        ))}
      </ul>
    </div>
  </>);
}

export default Programming