import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p style={{ textAlign: "center", marginTop: "50px" }}>Product not found!</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button style={{ padding: "10px 20px", background: "#0077cc", color: "white", borderRadius: "5px", marginTop: "10px" }}>
        Add to Cart
      </button>
      <div style={{ marginTop: "20px" }}>
        <Link to="/cart" style={{ color: "#0077cc" }}>Go to Cart</Link>
      </div>
    </div>
  );
}
