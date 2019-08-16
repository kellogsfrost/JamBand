import express from 'express';
const router = express.Router();
import passport from '../config/ppConfig';

// GET /auth/spotify - displays the GH login page
router.get('/spotify', passport.authenticate('spotify'));

// GET /auth/spotify/callback - callback URL that receives the token
router.get('/spotify/callback',
    passport.authenticate('spotify', {failureRedirect: '/auth/login'}),
    (req, res) => {
        // Successful Authentication
        console.log("THIS IS THE USER from the db: ", req.user);
        res.render('success', {user: req.user})
    })

export default router;