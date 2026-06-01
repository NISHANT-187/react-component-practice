import { useState } from "react";

function Form() {
  // State: formData stores the current input values
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  // State: submittedData stores last submitted values
  const [submittedData, setSubmittedData] = useState(null);

  // Event handling: update state whenever user types in input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Event handling: stop page reload and show data below form
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <section className="form-section">
      <h2>Simple Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button className="btn" type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </section>
  );
}

export default Form;
