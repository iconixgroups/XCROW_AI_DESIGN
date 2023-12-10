const mongoose = require('mongoose');

interface Discipline {
  name: string;
  description: string;
}

const DisciplineSchema = new mongoose.Schema<Discipline>({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  }
});

export default mongoose.model<Discipline>('Discipline', DisciplineSchema);