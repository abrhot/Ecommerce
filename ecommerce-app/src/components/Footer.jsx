export default function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "20px", marginTop: "50px", background: "#333", color: "white" }}>
      <p>© {new Date().getFullYear()} EcommerceApp. All rights reserved.</p>
    </footer>
  );
}
