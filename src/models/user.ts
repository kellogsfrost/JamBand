// Don't forget to use the ES6 import syntax
import mongoose, {Schema} from 'mongoose'

const userSchema = new Schema({
    spotifyId: {
        type: String,
        required: [true, 'You need to have a spotify account']
    }
})

userSchema.set('toObject', {
    transform: function(doc, ret, options) {
        let returnJson = {
            _id: ret._id,
            spotifyId: ret.spotifyId
        }
        return returnJson;
    }
})

export default mongoose.model('User', userSchema);