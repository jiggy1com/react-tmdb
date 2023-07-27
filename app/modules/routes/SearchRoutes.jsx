import React from "react";
import {RouteModel} from "modules/routes/RouteModel";
import {IndexComponent} from "IndexComponent";
export const SearchRoutes = [
    new RouteModel('/search', <IndexComponent />),
    new RouteModel('/search/person', <IndexComponent />),
    new RouteModel('/search/movies', <IndexComponent />),
    new RouteModel('/search/tv', <IndexComponent />),
    new RouteModel('/search/collections', <IndexComponent />),
    new RouteModel('/search/companies', <IndexComponent />),
    new RouteModel('/search/keyword', <IndexComponent />),
]
