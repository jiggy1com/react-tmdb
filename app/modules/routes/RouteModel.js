import {redirect} from "react-router-dom";

export class RouteModel {

    constructor(path = null, element = null, redirectTo = null) {
        if(!path){
            console.error('RouteModel: You need to set the path!')
        }
        if(!element && !redirectTo){
            console.error("RouteModel: You need to set the element, i.e. <IndexComponent /> , if you are not passing a redirect.");
        }
        this.path = path;
        this.element = element;
        this.redirectTo = redirectTo;
    }

}
