import { createServer } from "http";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { Server } from "socket.io";
import db from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import { errorHandler, pageNotFound } from "./middlewares/error.middleware.js";

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});
const baseURL = "/api/v1";

db();
app.use(cors());
app.use(express.json());
app.use(helmet());

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("message", (message) => {
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

app.use(`${baseURL}/users`, userRoutes);
app.use(`${baseURL}/blogs`, blogRoutes);
app.use(`${baseURL}/comments`, commentRoutes);
// app.use("/", (req, res) => res.send({ app: "blog_app" }));

app.use(pageNotFound);
app.use(errorHandler);

server.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);

export default app;
