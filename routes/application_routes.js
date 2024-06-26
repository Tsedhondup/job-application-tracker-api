const router = require("express").Router();
const applicationController = require("../controllers/application_controller");

router.route("/addApplication").post(applicationController.addApplication);
router
  .route("/getAllApplications/:id")
  .get(applicationController.getAllApplications);
router
  .route("/getApplicationDetails/:id")
  .get(applicationController.getApplicationDetails);

router
  .route("/updateApplication/:id")
  .patch(applicationController.updateApplication);
module.exports = router;
