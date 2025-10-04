import { Link } from "react-router-dom";

export default function OrderConfirmation() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>✅ Order Confirmation</h2>
      <p>Thank you! Your order has been placed successfully.</p>
      <Link to="/" style={{ display: "inline-block", marginTop: "20px", padding: "10px 20px", background: "#0077cc", color: "white", borderRadius: "5px" }}>
        Back to Home
      </Link>
    </div>
  );
}
