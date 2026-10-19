import { route } from "rwsdk/router"

import { ShrimpHome, ShrimpTest, ShrimpSuccess, ShrimpFail } from "./shrimpPages"

export const shrimpRoutes = [
  route("/", ShrimpHome),
  route("/test", ShrimpTest),
  route("/success", ShrimpSuccess),
  route("/fail", ShrimpFail),
]