import express from "express";
import { addVideo, addView, deleteVideo, getByTag, getVideo, random, search, sub, trend, updateVideo } from "../controllers/video.js";
import { verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

//Create video
router.post("/", verifyToken, addVideo);

//Update video
router.put("/:id", verifyToken, updateVideo);

//Delete video
router.delete("/:id", verifyToken, deleteVideo);

//Get a video
router.get("/find/:id", getVideo);

//Add view
router.put("/view/:id", addView);

//Trending videos
router.get("/trend", trend);

//Random videos
router.get("/random", random);

//Subscribed channels
router.get("/sub", verifyToken, sub);

//Get by tag
router.get("/tags", getByTag);

//Search
router.get("/search", search);

export default router;