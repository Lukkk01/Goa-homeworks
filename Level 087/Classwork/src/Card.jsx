function Card() {
  const hardware = ['i5 12400F', 'Rtx 4060', '16gb ddr5', '1tb ssd']
  return (<>
    <h1>Computer Hardware</h1>
    <ul>
      {hardware.map((value, index) => 
        <li>(value)</li>
      )}
    </ul>
  </>)
}

export default Card;