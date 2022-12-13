import { useEffect, useState } from "react";
import { Product } from "./product";


function App() {

  const [products, setProducts]=useState<Product[]>([]);

  useEffect(() => {
   
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(err => console.log(err))
    
  }, [])

  function addProduct(){
    setProducts(prevState => [...prevState, {
      id: prevState.length + 101,
      name: 'Product' + (prevState.length + 1), 
      description:'Some description' +(prevState.length + 1),
      price: (prevState.length * 100) + 100,
      pictureUrl: 'image' + (prevState.length +1),
      type: 'type',
      brand: 'some-brand' + (prevState.length + 1),
      quantityInStock:10

    
    }])
  }

  

  return (
    <div className="app">
      <h1>Bismillah</h1>
      <ul>
        {products.map(product =>(
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
