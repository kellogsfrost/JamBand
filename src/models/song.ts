import mongoose, {Schema} from 'mongoose'

const songSchema = new Schema({
    song: {
        name: String,
        tempo: Number,
        artist: String
    }
})


    export interface ISong extends mongoose.Document{
            _id: string;
            name: string;
            artist: string;
            tempo: number;
    }
   

export default mongoose.model('Song', songSchema);