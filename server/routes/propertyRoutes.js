const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  addProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty
} = require("../controllers/propertyController");

router.post("/add", protect, addProperty);
router.get("/", getAllProperties);
router.get("/:id", getPropertyById);
router.put("/update/:id", protect, updateProperty);
router.delete("/delete/:id", protect, deleteProperty);

module.exports = router;