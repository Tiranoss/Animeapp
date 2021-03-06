const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

router.post("/register", userCtrl.register);

router.post("/activation", userCtrl.activateEmail);

router.post("/login", userCtrl.login);

router.post("/refresh_token", userCtrl.getAccessToken);

router.post("/forgot", userCtrl.forgotPassword);

router.post("/reset", auth, userCtrl.resetPassword);

router.get("/profile", auth, userCtrl.getUserInfor);

router.patch("/update", auth, userCtrl.updateUser);

router.get("/logout", userCtrl.logout);

// Route For Admin

router.get("/all_profiles", auth, authAdmin, userCtrl.getUsersAllInfor);

router.patch("/update_role/:id", auth, authAdmin, userCtrl.updateUsersRole);

router.delete("/delete/:id", auth, authAdmin, userCtrl.deleteUser);

// Social Login
router.post("/google_login", userCtrl.googleLogin);

router.post("/facebook_login", userCtrl.facebookLogin);

module.exports = router;
