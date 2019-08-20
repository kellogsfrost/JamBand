import mongoose, {Schema} from 'mongoose'

const playlistSchema = new Schema({
    playlistId: {
        type: String,
        required: [true, 'You need to have a playlist']
    }
})


    export interface IPlaylist extends mongoose.Document{
        _id: string;
        playlistId: string;
        name: string;
    }
        

export default mongoose.model('Playlist', playlistSchema);
