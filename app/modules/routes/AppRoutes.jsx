import React from 'react';
import {AboutRoutes} from "modules/routes/AboutRoutes";
import {DiscoverRoutes} from "modules/routes/DiscoverRoutes";
import {GenreRoutes} from "modules/routes/GenreRoutes";
import {KeywordRoutes} from "modules/routes/KeywordRoutes";
import {LeaderboardRoutes} from "modules/routes/LeaderboardRoutes";
import {MovieRoutes} from "modules/routes/MovieRoutes";
import {PersonRoutes} from "modules/routes/PersonRoutes";
import {SearchRoutes} from "modules/routes/SearchRoutes";
import {TVRoutes} from "modules/routes/TVRoutes";
import {IndexComponent} from "IndexComponent";

export const AppRoutes = [
    {
        path: '/',
        element: <IndexComponent />
    },
    ...AboutRoutes,
    ...DiscoverRoutes,
    ...GenreRoutes,
    ...KeywordRoutes,
    ...LeaderboardRoutes,
    ...MovieRoutes,
    ...PersonRoutes,
    ...SearchRoutes,
    ...TVRoutes
]


