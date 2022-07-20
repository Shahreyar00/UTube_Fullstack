import express from "express";
const router = express.Router();
import { addComent, deleteComment, getComments } from "../controllers/comment.js";
import { verifyToken } from "../utils/verifyToken.js";

//Add comment
router.post("/", verifyToken, addComent);

//Delete comment
router.delete("/:id", verifyToken, deleteComment);

//Get comments
router.get("/:videoId", getComments);


export default router;