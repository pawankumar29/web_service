

 const middleware= (req, res, next)=> {
    if (!req.headers.device_id) {
        let err = {message: "Device Id is missing"};
        err.status = 400;
        throw err;
    } else if (!req.headers.device_type) {
        let err = {message: "Device type is missing"};
        err.status = 400;
        throw err;
    } else if (!req.headers.app_version) {
        let err = {message: "app version is missing"};
        err.status = 400;
        throw err;
    }
    next();
};

export default middleware;

