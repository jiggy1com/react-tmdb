import React from "react";
import {RouteModel} from "modules/routes/RouteModel";
import {KeywordController} from "KeywordModule";
export const KeywordRoutes = [
    new RouteModel('/keyword/:keywordType/:keyword/:id', <KeywordController />)
]
