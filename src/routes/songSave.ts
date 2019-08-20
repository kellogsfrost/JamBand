import express from 'express';
const router = express.Router();
import Song, {ISong} from '../models/song';



//GET - all songs-working
router.get('/song', (req, res) => {
    // console.log("hello?");
    Song.find({}, function(err, songs: ISong) {
       if (err) res.json(err)
       res.json(songs)
    })
 })
 //GET - get/show one song
 router.get('/song/:id', (req, res) => {
    console.log("Getting job data for", req.params.id)
    // console.log(req.user._id);
    Song.findById(req.params.id).populate('User').exec(function (err, song: ISong) {
       if (err) res.json(err)
       console.log(song)
       console.log(err)
       res.json(song)
    })
 })
 //POST - create a song--working
 router.post('/song', (req, res) => {
    console.log("Backend post route")
    Song.create({
        name: req.body.name,
        artist: req.body.artist,
        tempo: req.body.tempo,
      }),(err, songs: ISong) => {
         songs.save(function (err, song) {
            if (err) console.log(err)
            res.json(song)
         })
      } 
   res.send("AYE")
 })

//DELETE -delete one song
router.delete("/song/:id", (req, res) => {
    Song.findByIdAndRemove(req.params.id, function (err) {
       if (err) res.json(err)
       res.json({ message: "DELETED!!" })
    })
 });

 export default router;
 