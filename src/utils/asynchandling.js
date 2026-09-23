const asynchandler = (requestHandle) => {
   return (req,res,next) => {
        Promise.resolve(requestHandle(req,res,next)).catch((err)=>next(err))
    }
}
export {asynchandler}