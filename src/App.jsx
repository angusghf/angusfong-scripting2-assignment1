import  React, {useEffect, useState } from 'react';
import productsData from './products.json'
import './App.css';
import Card from './components/card'; 
// import Header from './components/header';
// import IonIcons from "@reacticons/ionicons";



function App() {
  const [products, setProduct] = useState(productsData.productsData);
  // console.log(products);

  const [favs, setFavs] = useState([]);
  const handleFavClick = (productId) => {
    if (favs.includes(productId)) {
      const newFavs = favs.filter((singleFav) =>{
        return productId !== singleProduct;
      });
      // console.log(newFavs)
    } else{
    setFavs([...favs, productId]);
    }
  }

  return (
    <div className="container w-10/12 grid grid-cols-3 gap-12">
      { products.map( (singleProduct) => {

        return(
          <Card key={singleProduct.id} product={singleProduct} favourites={favs} handleFavClick={handleFavClick}/>

        );
      })}
    </div>
  )
}

export default App;
