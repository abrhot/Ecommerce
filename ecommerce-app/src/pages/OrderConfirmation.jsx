import { Link } from "react-router-dom";

function OrderConfirmation() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Thank You for Your Order!</h2>
      <p className="mb-6">
        Your order has been placed successfully. We’ll send you a confirmation email shortly.
      </p>
      <Link
        to="/"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default OrderConfirmation;
