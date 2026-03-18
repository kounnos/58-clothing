import React, { useState } from 'react';

const Checkout = () => {
  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleShippingChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment and shipping here
    alert('Order has been placed!');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <h2>Shipping Address</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={shippingAddress.name}
          onChange={handleShippingChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={shippingAddress.address}
          onChange={handleShippingChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={shippingAddress.city}
          onChange={handleShippingChange}
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={shippingAddress.state}
          onChange={handleShippingChange}
          required
        />
        <input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          value={shippingAddress.zip}
          onChange={handleShippingChange}
          required
        />

        <h2>Payment Information</h2>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentInfo.cardNumber}
          onChange={handlePaymentChange}
          required
        />
        <input
          type="text"
          name="expirationDate"
          placeholder="Expiration Date (MM/YY)"
          value={paymentInfo.expirationDate}
          onChange={handlePaymentChange}
          required
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={paymentInfo.cvv}
          onChange={handlePaymentChange}
          required
        />

        <button type="submit">Place Order</button>
      </form>

      <h2>Order Summary</h2>
      {/* Display order details here, e.g., items, prices */}
      <p>Total: $XXX.XX</p>
      <h2>Order Confirmation</h2>
      {/* Display confirmation message and order details */}
    </div>
  );
};

export default Checkout;