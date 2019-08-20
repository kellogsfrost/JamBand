import express from 'express';
const router = express.Router();
const Playlist = require('../models/playlist');


//GET - all playlists-working
router.get('/', (req, res) => {
    // console.log("hello?");
    Playlist.find({}, function(err, playlists) {
       if (err) res.json(err)
       res.json(playlists)
    })
 })
 //GET - get/show one playlist-working
 router.get('/:pid', (req, res) => {
    console.log("Getting job data for", req.params.sid)
    // console.log(req.user._id);
    Playlist.findById(req.params.pid).populate('Playlist').exec(function (err, playlist) {
       if (err) res.json(err)
       console.log(playlist)
       console.log(err)
       res.json(playlist)
    })
 })
 //POST - create a playlist--working
 router.post('/', (req, res) => {
    console.log("Backend post route")
    Playlist.create({
        playlistId: String
    }, function (err, playlist) {
       res.json(playlist)
    })
 })
//DELETE -delete one playlist
router.delete("/:pid", (req, res) => {
    Playlist.findByIdAndRemove(req.params.sid, function (err) {
       if (err) res.json(err)
       res.json({ message: "DELETED!!" })
    })
 });

 export default router;
 