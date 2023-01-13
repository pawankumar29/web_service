 import DB from './core/Dbconnection.js'
import express from 'express'
 import path from 'path'
 import logger from 'morgan'
import cookieParser  from 'cookie-parser';
import  bodyParser  from 'body-parser';
import validator from 'express-validator';
import swig  from 'swig';
import  file from 'express-fileupload';
import setting from './utils/util.js'
import startTheAsyncOperation from './utils/util.js';
import {messages} from './core/constant.js'
// import Router from './modules/routes/firstroute.js'



//database Connection Established
DB();


const app=express();




         startTheAsyncOperation();

        //  if(startAppSetting){
            // app.set('views', path.join(__dirname, 'views'));
            app.set('view engine', 'html');
            app.engine('html', swig.renderFile);
        
            app.use(logger('dev'));
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({extended: true}));
            app.use(file());
        
            app.use(validator());
            app.use(cookieParser());

            global.messages=messages;

    
export default app;




// two file done
// 1.bind
// 2.core
