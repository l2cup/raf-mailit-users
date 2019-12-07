const mongoose = require('mongoose');
/**
 * @description User MongoDB schema.
 * @param UserSchema
 * @const
 */
const UserSchema = mongoose.Schema({
  username: {
    unique: true,
    type: String,
    trim: true,
    minLength: 5,
    maxLength: 20,
    required: true,
  },
  password: {
    type: String,
    trim: false,
    required: true,
  },
  email: {
    unique: true,
    type: String,
    trim: true,
    minLength: 3,
    maxLength: 40,
    required: true,
  },
  subscriptions: [String],
  subscriptionTime: {
    type: Number,
    min: 1,
    max: 24,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

/**
 * @description Virutal Method that returns user data.
 */
UserSchema.virtual('user').get(() => ({
  id: this._id,  // eslint-disable-line
  username: this.username,
  password: this.password,
  email: this.email,
  subscriptions: this.subscriptions,
  subscriptionTime: this.subscriptionTime,
}));


module.exports = mongoose.model('User', UserSchema);
