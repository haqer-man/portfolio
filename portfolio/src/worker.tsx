import { layout, render, route, prefix } from "rwsdk/router"
import { defineApp } from "rwsdk/worker"

import { Document } from "@/app/document"
import { setCommonHeaders } from "@/app/headers"

import { Home } from "@/app/pages/home"
import { Contact } from "@/app/pages/contact"
import { routes as photoRoutes } from "@/app/pages/photography/routes"
import { PhotoLayout } from "@/app/layouts/PhotoLayout"

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
    layout(PhotoLayout, [
      prefix("/photos", photoRoutes)
    ]),
  ]),
]);
