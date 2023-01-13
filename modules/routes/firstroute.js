import express from 'express'
import first from '../../utils/util.js'
const Router=express.Router();

Router.get('/' ,async(req,res)=>{
    console.log("here")
    try{
        const data=await first();

        console.log(data);
   
        res.send(data);

    }catch(err){
        console.log(err);
        res.send(err);
    }
    
});


export default Router;
