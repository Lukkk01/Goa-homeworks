import { useState, useEffect } from "react";

function RandomDog() {
  const [dogImage, setDogImage] = useState("");
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
      });
  }, []);

  return (
    <div>
      <h2>Random Dog Image</h2>
      {dogImage ? (
        <img src={dogImage} alt="Random Dog" style={{ maxWidth: "300px" }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RandomDog;
