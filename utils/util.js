import mongoose from 'mongoose'
import settingModel from '../core/schema/settingSchema.js'


const startTheAsyncOperation=()=>{
//    return new Promise(async(resolve,reject)=>{
    try {
        const data=settingModel.findOne({});

        if(data){
            global.config=data;
            // resolve();

        }
        else{
            throw {message:"error in get Settings"}
        }
        
    } catch (error) {
        console.log("utilError-->",error.message);
        //  return reject(error.message);

        
    }


// })
}
 
export default startTheAsyncOperation;