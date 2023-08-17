import { asyncWrapper } from "../middlewares/asycnWrapper.js";
import { CustomError } from "../utils/customError.js";
import { Song } from "../models/song.modle.js";
import { StatusCodes } from "http-status-codes";

const createSong = asyncWrapper(async (req, res) => {
  const { title, artist, album, genre } = req.body;
  const song = await Song.find({ title: title, artist: artist });
  if (song.length !== 0) {
    throw new CustomError(
      "The song already exists in the database",
      StatusCodes.CONFLICT
    );
  }

  const result = await Song.create({
    title,
    artist,
    album,
    genre,
  });
  res.status(StatusCodes.OK).json({
    message: "Song inserted successfully",
    song: result,
  });
});

const listSongs = asyncWrapper(async (req, res) => {
  const result = await Song.find({});
  res.status(StatusCodes.OK).json({ data: result });
});

const getSingleSong = asyncWrapper(async (req, res) => {
  const { _id } = req.params;
  const song = await Song.findById(_id);
  if (!song) {
    throw new CustomError("Song not found!", StatusCodes.NOT_FOUND);
  }
  res.status(StatusCodes.OK).json({ data: song });
});

const updateSong = asyncWrapper(async (req, res) => {
  const { _id } = req.params;
  const song = await Song.findById(_id);
  if (!song) {
    throw new CustomError("Song not found!", StatusCodes.NOT_FOUND);
  }
  const result = await Song.findOneAndUpdate({ _id: _id }, req.body, {
    new: true,
  });
  res
    .status(StatusCodes.OK)
    .json({ message: "Song updated successfully", data: result });
});

const removeSong = asyncWrapper(async (req, res) => {
  const { _id } = req.params;
  const song = await Song.deleteOne({ _id: _id });
  if (song.deletedCount == 0) {
    throw new CustomError("Song not found!", StatusCodes.NOT_FOUND);
  }
  res.status(StatusCodes.OK).json({ message: "Song deleted successfully" });
});

const generateStatistics = asyncWrapper(async (req, res) => {
  const totalNumberOfSongs = await Song.countDocuments();
  const totalNumberOfArtists = (await Song.distinct("artist")).length;
  const totalNumberOfAlbums = (await Song.distinct("album")).length;
  const totalNumberOfGenre = (await Song.distinct("genre")).length;

  //agregations
  const numberOfSongsInGenre = await Song.aggregate([
    {
      $group: {
        _id: "$genre",
        count: { $sum: 1 },
      },
    },
  ]);

  const numberOfSongsAndAblumsPerArtist = await Song.aggregate([
    {
      $group: {
        _id: "$artist",
        totalSongs: { $sum: 1 },
        totalAlbums: { $addToSet: "$album" },
      },
    },
    {
      $project: {
        _id: 0,
        artist: "$_id",
        totalSongs: 1,
        totalAlbums: { $size: "$totalAlbums" },
      },
    },
  ]);

  const numberOfSongsInEachAlbum = await Song.aggregate([
    {
      $group: {
        _id: "$album",
        numberOfSongs: { $sum: 1 },
      },
    },
  ]);

  const NumberOfSongsPerARtistPerGenre = await Song.aggregate([
    {
      $group: {
        _id: { artist: "$artist", genre: "$genre" },
        count: { $sum: 1 },
      },
    },
  ]);

  const avarageNuberOfSongsPerAlbum = totalNumberOfSongs / totalNumberOfAlbums;

  res.json({
    totalNumberOfSongs,
    totalNumberOfArtists,
    totalNumberOfAlbums,
    totalNumberOfGenre,
    numberOfSongsInGenre,
    numberOfSongsAndAblumsPerArtist,
    numberOfSongsInEachAlbum,
    avarageNuberOfSongsPerAlbum,
    NumberOfSongsPerARtistPerGenre,
  });
});
export {
  createSong,
  listSongs,
  getSingleSong,
  updateSong,
  removeSong,
  generateStatistics,
};
