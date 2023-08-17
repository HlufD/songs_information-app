import { Router } from "express";
import { body, param } from "express-validator";
import {
  createSong,
  getSingleSong,
  listSongs,
  removeSong,
  updateSong,
  generateStatistics,
} from "../controllers/songs.controller.js";

const router = Router();
router
  .route("/")
  .post(
    [
      body("title", "title can't be greater than 2 chars")
        .exists()
        .isLength({ min: 2 }),
      body("album", "album can't be greater than 2 chars")
        .exists()
        .isLength({ min: 2 }),
      body("artist", "atrist can't be greater than 2 chars")
        .exists()
        .isLength({ min: 2 }),
      body("genre", "genre can't be greater than 2 chars")
        .exists()
        .isLength({ min: 2 }),
    ],
    createSong
  )
  .get(listSongs);
router
  .route("/:_id")
  .get([param("_id", "_id is not valid Id").isMongoId()], getSingleSong)
  .patch(
    [
      body("title", "title can't be greater than 2 chars")
        .optional()
        .exists()
        .isLength({ min: 2 }),
      body("album", "album can't be greater than 2 chars")
        .optional()
        .exists()
        .isLength({ min: 2 }),
      body("artist", "atrist can't be greater than 2 chars")
        .optional()
        .exists()
        .isLength({ min: 2 }),
      body("genre", "genre can't be greater than 2 chars")
        .optional()
        .exists()
        .isLength({ min: 2 }),
      param("_id", "_id is not valid Id").isMongoId(),
    ],
    updateSong
  )
  .delete([param("_id", "_id is not valid Id").isMongoId()], removeSong);
router.get("/gen/stats", generateStatistics);

export default router;
