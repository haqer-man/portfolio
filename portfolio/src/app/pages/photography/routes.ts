import { route } from "rwsdk/router";

import { Albums } from "./albums";
import { PhotoMap } from "./map";
import { PhotoHome } from "./index";
import { PhotoPlaceholder } from "./placeholder"

export const routes = [
    route("/albums", Albums),
    route("/map", PhotoMap),
    // route("/", PhotoHome)
    route("/", PhotoPlaceholder)
]