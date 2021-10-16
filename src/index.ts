import express from "express";
import swaggerUi from "swagger-ui-express";

import documentation from "../docs/api.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(documentation));
app.use("/users", usersRoutes);

export { app };
