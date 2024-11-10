const express = require("express");
const app = express();
require("dotenv").config();
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
