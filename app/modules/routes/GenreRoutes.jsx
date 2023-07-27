import React from "react";
import {RouteModel} from "modules/routes/RouteModel";
import {GenreController} from "GenreModule";
export const GenreRoutes = [
    new RouteModel('/genre/:genreType/genre/:id', <GenreController />)
]
