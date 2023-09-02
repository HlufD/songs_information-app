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
      body("title", "Title can't be less than than 2 characters")
        .exists()
        .isLength({ min: 2 }),
      body("album", "Album can't be less than 2 characters")
        .exists()
        .isLength({ min: 2 }),
      body("artist", "Atrist can't be less than 2 characters")
        .exists()
        .isLength({ min: 2 }),
      body("genre", "Genre can't be less than 2 characters")
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
      body("title", "Title can't be  less than 2 characters")
        .optional()
        .exists()
        .isLength({ min: 2 }),
      body("album", "Album can't be  less than 2 characters")
        .optional()
        .exists()
        .isLength({ min: 2 }),
      body("artist", "Atrist can't be less than 2 characters")
        .optional()
        .exists()
        .isLength({ min: 2 }),
      body("genre", "Genre can't be less than 2 characters")
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
