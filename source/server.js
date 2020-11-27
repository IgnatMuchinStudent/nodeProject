// Core
import express from "express";

//Routers
import * as routers from "./routers";

const app = express();

app.use("/users", routers.users);
app.use("/classes", routers.classes);
app.use("/lessons", routers.lessons);
app.use("/auth", routers.auth);
export { app };
