import mongoose, {Schema} from 'mongoose'

const songSchema = new Schema({
    songId: {
        track: String,
        artist: String,
        tempo: Number,
    }
})

songSchema.set('toObject', {
    transform: function(doc, ret, options) {
        let returnJson = {
            _id: ret._id,
            songId: ret.song_title,
            artist: ret.artist.name,
            tempo: ret.tempo
        }
        return returnJson;
    }
})

export default mongoose.model('Song', songSchema);