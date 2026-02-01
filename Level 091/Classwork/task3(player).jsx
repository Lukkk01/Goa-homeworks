// Player კომპონენტი იღებს მონაცემებს props-ით
// props არის ობიექტი, რომელიც კომპონენტს გადაეცემა გარედან

function Player(props) {
  return (
    <div>
      <h2>{props.song}</h2>
      <p>{props.artist}</p>
    </div>
  );
}

// კომპონენტის ექსპორტი,
// რათა სხვა ფაილებში გამოვიყენოთ
export default Player;
