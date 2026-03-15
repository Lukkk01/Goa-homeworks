import React from "react";
import useForm from "./useForm";

function MainComponent() {
  const onSubmit = (data) => {
    console.log("ფორმის მონაცემები:", data);
  };

  const { formData, handleChange, handleSubmit } = useForm(
    { bookTitle: "" },
    onSubmit
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="bookTitle"
        value={formData.bookTitle}
        onChange={handleChange}
        placeholder="შეიყვანეთ წიგნის სახელი..."
      />

      <button type="submit">ძებნა</button>
    </form>
  );
}

export default MainComponent;