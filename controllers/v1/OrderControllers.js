import Order from '../../models/v1/OrderModels.js';

export const createOrder = async (req, res) => {
  try {
    console.log('Received Order:', req.body); // Log the incoming order data
    const orderData = req.body;

    const newOrder = new Order(orderData);
    await newOrder.save();

    res.status(201).json({
      message: 'Order created successfully!',
      order: newOrder,
    });
  } catch (error) {
    console.error('Error creating order:', error); // Log error details for better debugging
    res.status(500).json({ message: 'Failed to create order', error: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order updated successfully!', order: updatedOrder });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update order', error: error.message });
  }
};

// Delete order controller
export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    // Try to find and delete the order by ID
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete order', error: error.message });
  }
};