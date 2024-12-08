import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  color: {
    inside: { type: String, required: true },
    laces: { type: String, required: true },
    outside_1: { type: String, required: true },
    outside_2: { type: String, required: true },
    outside_3: { type: String, required: true },
    sole_top: { type: String, required: true },
    sole_bottom: { type: String, required: true },
  },
  fabric: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  shippingAddress: { type: String, required: true },
  send: { type: String, required: true }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;