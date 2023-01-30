require("../../node_modules/passport");
const CheckAuthentication=function(req,res,next){
  if(req.isAuthenticated()){
    console.log("authenticated");
    next();
  }else{
    console.log("Error while authenticating");
    res.redirect("/admin/login")
  }
}
module.exports.CheckAuthentication=CheckAuthentication;
