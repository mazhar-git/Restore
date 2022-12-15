import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";


function App() {

  const [products, setProducts]=useState<Product[]>([]);

  useEffect(() => {
    
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(err => console.log(err))
    
  }, [])

  function addProduct(): void{
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
      <Typography variant="h1">Bismillah</Typography>
      <Catalog products={products} addProduct={addProduct}/>
    </div>
  );
}

export default App;
