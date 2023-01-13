
function  success(res,statusCode,msg,data){

     return res.json({
        status:statusCode,
        message:msg,
        Data:data
     })

}

function  fail(res,statusCode,msg){
   

    return res.json({
       status:statusCode,
       message:msg,
       Data:data
    })

}