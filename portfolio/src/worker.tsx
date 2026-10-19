import { layout, render, route, prefix } from "rwsdk/router"
import { defineApp } from "rwsdk/worker"

import { Document } from "@/app/document"
import { setCommonHeaders } from "@/app/headers"

import { Home } from "@/app/pages/home"
import { RoboticsHome } from "@/app/pages/robotics/index"
import { CSHome } from "@/app/pages/cs/index"
import { Contact } from "@/app/pages/contact"
import { routes as photoRoutes } from "@/app/pages/photography/routes"
import { PhotoLayout } from "@/app/layouts/PhotoLayout"
import { shrimpRoutes } from "@/app/pages/shrimp/routes"

export type AppContext = {};

export default defineApp([
  setCommonHeaders(),
  ({ ctx }) => {
    // setup ctx here
    ctx;
  },
  render(Document, [
    route("/", Home),
    route("/contact", Contact),
    route("/cs", CSHome),
    route("/robotics", RoboticsHome),
    layout(PhotoLayout, [
      prefix("/photos", photoRoutes)
    ]),
    prefix("/shrimp", shrimpRoutes),
  ]),
]);

export interface Env {
  DB: D1Database;
}