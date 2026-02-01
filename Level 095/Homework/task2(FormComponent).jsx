function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("userData", JSON.stringify(formData));

    alert("მონაცემები შენახულია localStorage-ში");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form Component</h2>

      <input
        type="text"
        name="name"
        placeholder="სახელი"
        value={formData.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="ელ. ფოსტა"
        value={formData.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="age"
        placeholder="ასაკი"
        value={formData.age}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">შენახვა</button>
    </form>
  );
}