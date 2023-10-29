const router = require("express").Router();
const playlist = require("../models/playlist");
const passport = require("passport");

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currUser = req.user._id;
    const { name, thumbnail, songs } = req.body;
    if (!name || !thumbnail || !songs)
      return res.status(301).json({ error: "insufficient information" });
    const playlistData = {
      name,
      thumbnail,
      songs,
      user: currUser,
      collaborators: [],
    };

    const Playlist = await playlist.create(playlistData);
    return res.status(200).json(playlistData);
  }
);

router.get(
  "/get/:playlistId",
  passport.authenticate("jwt", { session: false }, async (req, res) => {
    const playlistId = req.params.playlistId;
    const Playlist = playlist.findOne({ _id: playlistId });
    if (Playlist) {
      return res.status(200).json(Playlist);
    }
    return res.status(301).json({ erro: "invalid Playlist" });
  })
);
