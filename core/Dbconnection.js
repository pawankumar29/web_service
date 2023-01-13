
import mongoose  from "mongoose";
import {local} from '../core/constant.js'

var options = {
    useMongoClient: true,
};

const connection=()=>{
mongoose.connect('mongodb://127.0.0.1:27017/' + local.database.name, options, function(err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connected to ' + local.database.name);
    }
})
};

export default connection;