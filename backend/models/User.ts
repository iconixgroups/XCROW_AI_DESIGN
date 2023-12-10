const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

interface IUser extends mongoose.Document {
  username: string;
  password: string;
  projects: mongoose.Types.ObjectId[];
  comparePassword(candidatePassword: string, cb: (err: any, isMatch: boolean) => void): void;
}

const UserSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
});

UserSchema.pre<IUser>('save', function(next) {
  const user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

export default mongoose.model<IUser>('User', UserSchema);