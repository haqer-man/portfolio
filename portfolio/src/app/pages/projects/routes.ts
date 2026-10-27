import { route } from "rwsdk/router";

import { Projects } from "./index";
import { Maze } from "./project-pages/maze";

export const projectRoutes = [
    route("/maze", Maze),
    route("/", Projects),
];