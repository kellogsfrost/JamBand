import mongoose, {Schema} from 'mongoose'

const songSchema = new Schema({
    song: {
        artist: String,
        tempo: Number,
        songName: String,
    }
})

songSchema.set('toObject', {
    transform: function(doc, ret, options) {
        let returnJson = {
            _id: ret._id,
            songName: ret.song_title,
            artist: ret.artist.name,
            tempo: ret.tempo
        }
        return returnJson;
    }
})

export default mongoose.model('Song', songSchema);