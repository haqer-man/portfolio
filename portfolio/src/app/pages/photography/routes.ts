import { route } from "rwsdk/router";

import { Albums } from "./albums";
import { PhotoMap } from "./map";
import { PhotoHome } from "./index";

export const routes = [
    route("/albums", Albums),
    route("/map", PhotoMap),
    route("/", PhotoHome)
]