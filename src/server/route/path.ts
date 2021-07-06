import {Ipath, IPathRoute} from "../domain/IPath";

function path(url: string): IPathRoute {
    const allRoutes: Ipath = {
        "/user": {
            methods: ["POST"]
        },
        "/history": {
            methods: ["POST", "GET", "PUT", "DELETE"]
        }
    }
    return allRoutes[url];
}

export default path;
