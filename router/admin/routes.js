const express=require("express");
const router=express.Router();

const AdminController=require("../../controller/admin/AdminController");
const {CheckAuthentication}=require("../../middleware/superAdmin/auth");

router.get("/login",AdminController.getLogin);

router.post("/login",AdminController.postLogin);

router.get("/adminpanel",CheckAuthentication,AdminController.adminpanel);

router.post("/signup",AdminController.signup);

router.get("/logout",CheckAuthentication,AdminController.logout);

//Create
router.get("/adminpanel/add",CheckAuthentication,AdminController.addPage);

router.post("/adminpanel/add",CheckAuthentication,AdminController.add);

router.get("/adminpanel/read",CheckAuthentication,AdminController.read);

router.get("/adminpanel/update/:userId",CheckAuthentication,AdminController.edit);

router.post("/adminpanel/update/:userId",CheckAuthentication,AdminController.editSave);

router.get("/adminpanel/delete/:userId",CheckAuthentication,AdminController.deleteUser);

router.post("/adminpanel/delete/:userId",CheckAuthentication,AdminController.yesDeleteUser);

module.exports=router;
