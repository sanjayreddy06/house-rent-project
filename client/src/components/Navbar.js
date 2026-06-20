import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged Out Successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          House Rent
        </Link>

        <div>
          <Link
            className="btn btn-light me-2"
            to="/properties"
          >
            Properties
          </Link>

          <Link
            className="btn btn-success me-2"
            to="/add-property"
          >
            Add Property
          </Link>

          <Link
            className="btn btn-primary me-2"
            to="/login"
          >
            Login
          </Link>

          <Link
            className="btn btn-warning me-2"
            to="/register"
          >
            Register
          </Link>

          <button
            className="btn btn-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;