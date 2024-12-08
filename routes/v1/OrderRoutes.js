import express from 'express';
import { 
  createOrder, 
  getAllOrders, 
  updateOrder,
  deleteOrder // Importeer de deleteOrder functie
} from '../../controllers/v1/OrderControllers.js';

const router = express.Router();

// Route to create an order
router.post('/', createOrder);

// Route to get all orders
router.get('/', getAllOrders);

// Route to update an order by ID
router.patch('/:id', updateOrder); 

// Route to delete an order by ID
router.delete('/:id', deleteOrder); // Nieuwe DELETE route

export default router;