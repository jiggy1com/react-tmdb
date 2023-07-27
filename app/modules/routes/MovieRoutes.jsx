import React from "react";
import {RouteModel} from "modules/routes/RouteModel";
import {MovieController, MovieDetailComponent, MovieIndexComponent} from "MovieModule";
import {redirect} from "react-router-dom";
import {IndexComponent} from "IndexComponent";
export const MovieRoutes = [
    new RouteModel('/movie', null, '/movie/popular'),
    new RouteModel('/movie/latest', <MovieController />),
    new RouteModel('/movie/now-playing', <MovieController />),
    new RouteModel('/movie/popular', <MovieController />),
    new RouteModel('/movie/top-rated', <MovieController />),
    new RouteModel('/movie/upcoming', <MovieController />),
    new RouteModel('/movie/detail/:title/:movieId', <MovieDetailComponent />),
]
