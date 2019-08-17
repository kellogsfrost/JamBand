import mongoose, {Schema} from 'mongoose'

const playlistSchema = new Schema({
    playlistId: {
        type: String,
        required: [true, 'You need to have a playlist']
    }
})

playlistSchema.set('toObject', {
    transform: function(doc, ret, options) {
        let returnJson = {
            _id: ret._id,
            playlistId: ret.id
        }
        return returnJson;
    }
})

export default mongoose.model('User', playlistSchema);