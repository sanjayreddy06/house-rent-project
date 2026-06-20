import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    rent: "",
    image: ""
  });

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/property/${id}`
      );

      setFormData({
        title: res.data.title,
        description: res.data.description,
        location: res.data.location,
        rent: res.data.rent,
        image: res.data.image || ""
      });
    } catch (error) {
      console.log(error);
    }
  };

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

      await axios.put(
        `http://localhost:5000/api/property/update/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Property Updated Successfully");

      navigate("/properties");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="container mt-5">
      <div
        className="card p-4 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <h2 className="text-center mb-4">
          Edit Property
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            className="form-control mb-3"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            className="form-control mb-3"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            className="form-control mb-3"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="rent"
            className="form-control mb-3"
            value={formData.rent}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="form-control mb-3"
            value={formData.image}
            onChange={handleChange}
            required
          />

          {formData.image && (
            <img
              src={formData.image}
              alt="Property Preview"
              className="img-fluid rounded mb-3"
              style={{
                maxHeight: "250px",
                objectFit: "cover"
              }}
            />
          )}

          <button
            className="btn btn-success w-100"
          >
            Update Property
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProperty;