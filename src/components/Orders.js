import React, { useState } from 'react';
import { ordersData } from './mockData';


function Orders() {
  const [orders, setOrders] = useState(ordersData);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [statusPopups, setStatusPopups] = useState({});

  const handleOrderSelection = (orderId) => {
    const order = orders.find(order => order.id === orderId);
    setSelectedOrder(order);
  };

  const handleToggleStatusPopup = (orderId) => {
    setStatusPopups(prevState => ({
      ...prevState,
      [orderId]: !prevState[orderId] // Toggle the visibility state
    }));
  };

  const handleStatusUpdate = (orderId, newStatus) => {
    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
        if (order.status === 'Pending' && newStatus === 'Shipped') {
          return { ...order, status: 'Shipped' };
        } else if (order.status === 'Shipped' && newStatus === 'Delivered') {
          return { ...order, status: 'Delivered' };
        } else {
          return order; // If status is not changing, return the order as is
        }
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const handleOrderDeletion = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
    setSelectedOrder(null);
    setStatusPopups(prevState => {
      const newState = { ...prevState };
      delete newState[orderId]; // Remove the visibility state for the deleted order
      return newState;
    });
  };

  return (
    <div className="orders">
      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th style={{ width:'400px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} style={{textAlign:'center'}}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td>
                
                <div style={{ textAlign: 'center' }}>
                 <button onClick={() => handleOrderSelection(order.id)}>View Details</button>
                 <span style={{ margin: '0 10px' }}></span>
                 <button onClick={() => handleToggleStatusPopup(order.id)}>Update Status</button>
                 {statusPopups[order.id] && ( // Render the pop-up list only if statusPopups[order.id] is true
                   <div>
                     <input type="radio" name={`status_${order.id}`} value="Pending" onChange={() => handleStatusUpdate(order.id, 'Pending')} />
                     <label htmlFor={`status_${order.id}`}>Pending</label>
                     <input type="radio" name={`status_${order.id}`} value="Shipped" onChange={() => handleStatusUpdate(order.id, 'Shipped')} />
                     <label htmlFor={`status_${order.id}`}>Shipped</label>
                     <input type="radio" name={`status_${order.id}`} value="Delivered" onChange={() => handleStatusUpdate(order.id, 'Delivered')} />
                     <label htmlFor={`status_${order.id}`}>Delivered</label>
                     <input type="radio" name={`status_${order.id}`} value="Processing" onChange={() => handleStatusUpdate(order.id, 'Processing')} />
                     <label htmlFor={`status_${order.id}`}>Processing</label>
                   </div>
                 )}
                 <span style={{ margin: '0 10px' }}></span>
                 <button onClick={() => handleOrderDeletion(order.id)} style={{ backgroundColor: 'red', color: 'white' }}>Delete Order</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedOrder && (
        <div className="order-details">
          <h3>Order Details</h3>
          <p>Order ID: {selectedOrder.id}</p>
          <p>Customer Name: {selectedOrder.customerName}</p>
          <p>Order Date: {selectedOrder.orderDate}</p>
          <p>Status: {selectedOrder.status}</p>
        </div>
      )}
    </div>
  );
}

export default Orders;
