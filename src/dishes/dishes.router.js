const router = require("express").Router();
const controller = require("./dishes.controller");
const ordersRouter = require("../orders/orders.router")
// TODO: Implement the /dishes routes needed to make the tests pass


router.route("/")
.get(controller.list)
.post(controller.create);

router.route("/:dishId")
.get(controller.read)
.put(controller.update)
.delete(controller.delete)

module.exports = router;
