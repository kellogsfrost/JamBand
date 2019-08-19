import express from 'express';
const router = express.Router();
const Song = require('../models/Song');


//GET - all songs-working
router.get('/', (req, res) => {
    // console.log("hello?");
    Song.find({}, function(err, songs) {
       if (err) res.json(err)
       res.json(songs)
    })
 })
 //GET - get/show one song-working
 router.get('/:sid', (req, res) => {
    console.log("Getting job data for", req.params.sid)
    // console.log(req.user._id);
    Song.findById(req.params.sid).populate('User').exec(function (err, song) {
       if (err) res.json(err)
       console.log(song)
       console.log(err)
       res.json(song)
    })
 })
 //POST - create a song--working
 router.post('/', (req, res) => {
    console.log("Backend post route")
    Song.create({
        track: String,
        artist: String,
        tempo: String,
    }, function (err, song) {
       res.json(song)
    })
 })
 //PUT /songs/:id -- update a song
 router.put('/:sid', (req, res) => {
    Song.findByIdAndUpdate(
       req.params.sid,
       {
          $set: {
            track: String,
            artist: String,
            tempo: String,
          }
       },
       { new: true },
       function (err, song) {
          if (err) res.json(err)
          res.json(song)
       })
 })

//DELETE -delete one song
router.delete("/:sid", (req, res) => {
    Song.findByIdAndRemove(req.params.sid, function (err) {
       if (err) res.json(err)
       res.json({ message: "DELETED!!" })
    })
 });

 export default router;
 