const asynchandler = (requestHandle) => {
    (req,res,next) => {
        Promise.resolve(requestHandle(req,res,next)).catch((err)=>next(err))
    }
}


export {asynchandler}