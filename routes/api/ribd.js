const router = require("express").Router();
const ribdController = require("../../controllers/ribdController");

router.route("/")
.get(ribdController.findAll)
.post(ribdController.create);

router.route("/:id")
.get(ribdController.findById)
.put(ribdController.update)
.delete(ribdController.remove);

module.exports = router;