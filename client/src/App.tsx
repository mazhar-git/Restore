import { useEffect, useState } from "react";


function App() {

  const [Products, setProducts]=useState(
    [{name: 'Product1', price:100.00 },
    {name: 'Product2', price:200.00}]
  );

  useEffect(() => {
   
    fetch("http://localhost:5000/api/products")
    .then(response => response.json())
    .then(data => setProducts(data))
    
  }, [])

  function addProduct(){
    setProducts(prevState => [...prevState, {name: 'Product' + (prevState.length + 1), price: (prevState.length * 100) + 100}])
  }

  

  return (
    <div className="app">
      <h1>Bismillah</h1>
      <ul>
        {Products.map((item, index) =>(
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
