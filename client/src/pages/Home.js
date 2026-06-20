function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>🏠 House Rent Management System</h1>

      <p className="lead mt-3">
        Find, Add, Update and Manage Rental Properties
      </p>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h3>View Properties</h3>
            <p>Browse all available rental properties.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h3>Add Property</h3>
            <p>Add new rental properties easily.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h3>Manage Properties</h3>
            <p>Edit or delete existing properties.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;