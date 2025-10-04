import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🏠 Home Page</h1>
      <p>Find the best deals on your favorite tech items!</p>
      <Link to="/products" style={{ display: "inline-block", marginTop: "20px", padding: "10px 20px", background: "#0077cc", color: "white", borderRadius: "5px" }}>
        Shop Now
      </Link>
    </div>
  );
}
