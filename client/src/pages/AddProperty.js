import { useState } from "react";
import axios from "axios";

function AddProperty() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    rent: "",
    image: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "https://house-rent-project-9jwd.onrender.com/api/property/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Property Added Successfully");

      setFormData({
        title: "",
        description: "",
        location: "",
        rent: "",
        image: ""
      });

    } catch (error) {
      console.log(error.response?.data);

      alert(
        error.response?.data?.message ||
        "Failed to Add Property"
      );
    }
  };

  return (
    <div className="container mt-5">
      <div
        className="card p-4 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <h2 className="text-center mb-4">
          Add Property
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="title"
              placeholder="Property Title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              name="description"
              placeholder="Description"
              className="form-control"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="form-control"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              name="rent"
              placeholder="Rent Amount"
              className="form-control"
              value={formData.rent}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="form-control"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProperty;