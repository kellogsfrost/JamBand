import mongoose, {Schema} from 'mongoose'

const playlistSchema = new Schema({
        playlistId: String,
        name: String
})


    export interface IPlaylist extends mongoose.Document{
        _id: string;
        playlistId: string;
        name: string;
    }
        

export default mongoose.model('Playlist', playlistSchema);
