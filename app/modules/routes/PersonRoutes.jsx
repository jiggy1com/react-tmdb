import React from "react";
import {RouteModel} from "modules/routes/RouteModel";
import {PersonController} from "PersonModule";
export const PersonRoutes = [
    new RouteModel('/person', <PersonController />),
    new RouteModel('/person/:name/:id', <PersonController />),
]
