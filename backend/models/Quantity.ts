const mongoose = require('mongoose');

interface Quantity {
  projectCode: string;
  discipline: string;
  quantityData: object;
}

const QuantitySchema = new mongoose.Schema<Quantity>({
  projectCode: {
    type: String,
    required: true
  },
  discipline: {
    type: String,
    required: true
  },
  quantityData: {
    type: Object,
    required: true
  }
});

export default mongoose.model<Quantity>('Quantity', QuantitySchema);