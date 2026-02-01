function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      age: event.target.age.value,
    };

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
      />

      <br /><br />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Email"
      />

      <br /><br />

      <input
        type="number"
        name="age"
        placeholder="Age"
      />

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
