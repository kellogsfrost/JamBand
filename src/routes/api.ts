import express from 'express';
const router = express.Router();
import User from '../models/user';
import axios from 'axios';


router.get('/:id/playlists', (req, res) => {
    let config = {
        headers: {
            'Authorization': `Bearer ${req.user.accessToken}`
        }
    }
    console.log("HIT THE plAYlisT get ALLLLLL route!")
    // GET ALL USER PLAYLISTS
    axios.get(`https://api.spotify.com/v1/me/playlists`, config)
    .then((response) => {
        console.log("and now this is the next part of the ALLLLL route!")
        // console.log(response.data)
        res.json(response.data.items);
    }).catch((err) => {
        console.log(err);
    }) 
})



export default router;