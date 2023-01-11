import React from "react";
import {RouteModel} from "modules/routes/RouteModel";
import {TVController, TVDetailController, TVSeasonController} from "TVModule";
export const TVRoutes = [
    new RouteModel('/tv', <TVController />),
    new RouteModel('/tv/latest', <TVController />),
    new RouteModel('/tv/airing-today', <TVController />),
    new RouteModel('/tv/on-the-air', <TVController />),
    new RouteModel('/tv/popular', <TVController />),
    new RouteModel('/tv/top-rated', <TVController />),
    new RouteModel('/tv/detail/:title/:id', <TVDetailController />),
    new RouteModel('/tv/season/:title/:id/:seasonNumber', <TVSeasonController />),
]
