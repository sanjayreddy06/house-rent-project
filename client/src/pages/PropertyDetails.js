import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PropertyDetails() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);

  const fetchProperty = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/property/${id}`
      );

      setProperty(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProperty();
  }, [id]);

  if (!property) {
    return (
      <div className="container mt-5">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <img
          src={property.image}
          alt={property.title}
          className="img-fluid rounded mb-4"
          style={{
            width: "100%",
            maxHeight: "450px",
            objectFit: "cover"
          }}
        />

        <h2 className="mb-3">{property.title}</h2>

        <p>
          <strong>📍 Location:</strong> {property.location}
        </p>

        <p>
          <strong>💰 Rent:</strong> ₹{property.rent}
        </p>

        <p>
          <strong>📝 Description:</strong>
        </p>

        <p>{property.description}</p>

        <hr />

        <p>
          <strong>Property ID:</strong> {property._id}
        </p>
      </div>
    </div>
  );
}

export default PropertyDetails;