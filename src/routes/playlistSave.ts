import express from 'express';
const router = express.Router();
import Playlist, {IPlaylist} from '../models/playlist';



//GET - all playlists-working
router.get('/playlist', (req, res) => {
    // console.log("hello?");
    Playlist.find({}, function(err, playlists: IPlaylist) {
       if (err) res.json(err)
       res.json(playlists)
    })
 })
 //GET - get/show one playlist
 router.get('/playlist/:id', (req, res) => {
    console.log("Getting job data for", req.params.id)
    // console.log(req.user._id);
    Playlist.findById(req.params.id).populate('User').exec(function (err, playlist: IPlaylist) {
       if (err) res.json(err)
       console.log(playlist)
       console.log(err)
       res.json(playlist)
    })
 })
 //POST - create a playlist--working
 router.post('/playlist', (req, res) => {
    console.log("Backend post route")
    Playlist.create({
      playlistId: req.body.playlistId,
      name: req.body.name
      },(err, playlists: IPlaylist) => {
         playlists.save(function (err, playlist) {
            if (err) console.log(err)
            res.json(playlist)
         })
      })
 })

//DELETE -delete one playlist
router.delete("/playlist/:id", (req, res) => {
    Playlist.findByIdAndRemove(req.params.id, function (err) {
       if (err) res.json(err)
       res.json({ message: "DELETED!!" })
    })
 });

 export default router;
 