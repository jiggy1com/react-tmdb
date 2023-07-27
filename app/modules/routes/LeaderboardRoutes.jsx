import React from "react";
import {RouteModel} from "modules/routes/RouteModel";
import {IndexComponent} from "IndexComponent";
export const LeaderboardRoutes = [
    new RouteModel('/leaderboard', <IndexComponent />)
]
