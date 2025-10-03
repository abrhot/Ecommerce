import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Address"
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="City / State / ZIP"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Place Order
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-500">
        For testing, clicking "Place Order" will redirect to Order Confirmation.
      </p>

      <Link
        to="/order-confirmation"
        className="mt-4 inline-block text-blue-500 underline"
      >
        Go to Order Confirmation (Test Link)
      </Link>
    </div>
  );
}

export default Checkout;
