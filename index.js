const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const handleErrors = require("./middlewares/error");
// Routing
const authRouter = require("./routes/auth-route");
const userRouter = require("./routes/user-route");
const app = express();

// Middlewares
app.use(cors()); // Allows cross domain
app.use(morgan('dev')); // Show log terminal
app.use(express.json()); // For read json

// Routing
app.use("/api", authRouter);
app.use("/api", userRouter);

// Handle errors
app.use(handleErrors);

// Start Server
const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
