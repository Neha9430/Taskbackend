import express from "express";
import { getStores, addStore , updateStore,deleteStore} from "../controller/storeController.js";
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();

router.get("/",  verifyToken,getStores);
router.post("/", verifyToken, addStore);
router.put("/:id",  verifyToken,updateStore);
router.delete("/:id",verifyToken, deleteStore);
export default router;
