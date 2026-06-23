
import './App.css'
import ProductCard from "./components/ProductCard";

function App() {
  const products = [
    { id: 1, name: "무선 키보드",
      price: 39000, brand: "EZTECH" },
      { id: 2, name: "무선 마우스",
        price: 29000, brand: "EZTECH" },
        { id: 3, name: "모니터", price: 199000, brand: "EZTECH" }
  ];
  return (
    <>
    {products.map((item) => (
      <ProductCard
      key={item.id}
      name={item.name}
      price={item.price}
      brand={item.brand}
      />
    ))}
    </>
  );
}
export default App;
