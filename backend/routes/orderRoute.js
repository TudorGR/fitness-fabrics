import express from "express";
import { placeOrder, placeOrderGoogle, placeOrderPaypal, allOrders, userOrders, updateStatus } from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

//admin
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);
//payment
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/google", authUser, placeOrderGoogle);
orderRouter.post("/paypal", authUser, placeOrderPaypal);
//user
orderRouter.post("/user-orders", authUser, userOrders);

export default orderRouter;
