import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import PropertyDetails from "./pages/PropertyDetails";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PropertyList from "./pages/PropertyList";
import AddProperty from "./pages/AddProperty";
import EditProperty from "./pages/EditProperty";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/properties"
          element={<PropertyList />}
        />

       <Route
  path="/add-property"
  element={
    <ProtectedRoute>
      <AddProperty />
    </ProtectedRoute>
  }
/>

        <Route
  path="/edit-property/:id"
  element={
    <ProtectedRoute>
      <EditProperty />
    </ProtectedRoute>
  }
/>
<Route
  path="/property/:id"
  element={<PropertyDetails />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;