import { layout, render, route, prefix } from "rwsdk/router";
import { defineApp } from "rwsdk/worker";

import { Document } from "@/app/document";
import { setCommonHeaders } from "@/app/headers";

import { Home } from "@/app/pages/home";
import { Projects } from "@/app/pages/projects/index";
import { Contact } from "@/app/pages/contact";
import { routes as photoRoutes } from "@/app/pages/photography/routes";
import { PhotoLayout } from "@/app/layouts/PhotoLayout";
import { RootLayout } from "@/app/layouts/RootLayout";
import { shrimpRoutes } from "@/app/pages/shrimp/routes";
import { projectRoutes } from "@/app/pages/projects/routes";

export type AppContext = {};

export default defineApp([
  setCommonHeaders(),
  ({ ctx }) => {
    // setup ctx here
    ctx;
  },
  render(Document, [
    layout(RootLayout, [route("/", Home)]),
    route("/contact", Contact),
    layout(RootLayout, [
      prefix("/projects", projectRoutes)
    ]),
    layout(PhotoLayout, [
      prefix("/photos", photoRoutes)
    ]),
    prefix("/shrimp", shrimpRoutes),
  ]),
]);
