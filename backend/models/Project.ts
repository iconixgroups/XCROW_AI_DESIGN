import mongoose, { Schema, Document } from 'mongoose';

interface IProject extends Document {
  projectCode: string;
  projectName: string;
  discipline: string;
  files: string[];
  quantityData: mongoose.Schema.Types.Mixed;
}

const ProjectSchema: Schema = new Schema({
  projectCode: {
    type: String,
    required: true,
    unique: true
  },
  projectName: {
    type: String,
    required: true
  },
  discipline: {
    type: String,
    required: true
  },
  files: [{
    type: String,
    required: true
  }],
  quantityData: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  }
});

export default mongoose.model<IProject>('Project', ProjectSchema);