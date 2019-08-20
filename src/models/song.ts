import mongoose, {Schema} from 'mongoose'

const songSchema = new Schema({
        song_title: String,
        tempo: Number,
        artist: String
})


    export interface ISong extends mongoose.Document{
            _id: string;
            song_title: string;
            artist: string;
            tempo: number;
    }
   

export default mongoose.model('Song', songSchema);