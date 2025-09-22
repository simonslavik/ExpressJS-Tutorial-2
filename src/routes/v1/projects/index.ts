import express, { Router } from "express";
import { listProjects, getProject, listProjectTasks } from "./controller";
import authenticateUser from "../../../middleware/authenticate-user";

const projects: Router = express.Router();

projects.use(authenticateUser);
projects.get("/", listProjects);
projects.get("/:id", getProject);
projects.get("/:id/tasks", listProjectTasks);

export default projects;