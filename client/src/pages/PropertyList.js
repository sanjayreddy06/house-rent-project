import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await axios.get(
        "https://house-rent-project-9jwd.onrender.com/api/auth/register",
      );

      setProperties(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProperty = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `https://house-rent-project-9jwd.onrender.com/api/property/delete/{id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Property Deleted Successfully");

      fetchProperties();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Available Properties</h2>

      {properties.length === 0 ? (
        <h4>No Properties Found</h4>
      ) : (
        <div className="row">
          {properties.map((property) => (
            <div
              className="col-md-4 mb-4"
              key={property._id}
            >
              <div className="card shadow h-100">

                <img
  src={property.image}
  alt={property.title}
  className="card-img-top"
  style={{
    height: "220px",
    objectFit: "cover"
  }}
  onError={(e) => {
    e.target.src =
      "https://via.placeholder.com/400x220?text=No+Image";
  }}
/>

<p className="mt-2">
  <strong>Image URL:</strong> {property.image}
</p>

                <div className="card-body">
                  <h4>{property.title}</h4>

                  <p>
                    <strong>Location:</strong>{" "}
                    {property.location}
                  </p>

                  <p>
                    <strong>Rent:</strong> ₹
                    {property.rent}
                  </p>

                  <p>
                    <strong>Description:</strong>
                  </p>

                  <p>{property.description}</p>

                  <Link
                    to={`/property/${property._id}`}
                    className="btn btn-info me-2"
                  >
                    View Details
                  </Link>

                  <Link
                    to={`/edit-property/${property._id}`}
                    className="btn btn-warning me-2"
                  >
                    Edit
                  </Link>

                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      deleteProperty(property._id)
                    }
                  >
                    Delete
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PropertyList;