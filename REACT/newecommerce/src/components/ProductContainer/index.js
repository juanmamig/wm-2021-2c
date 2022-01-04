import { useEffect, useState } from 'react'; 
import ProductCard from "../ProductCard";
import './style.css';

const ProductContainer = () => {

  // Primera posición => El estado
  // Segunda posición => Una función para alterar el estado
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState(undefined);


  // Ni bien se cargue el componente, vamos a ejecutar esta función
  useEffect(() => {
    // Traigo data de una API
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(products=> {
        setProducts(products);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        setError(true);
      });
  });

  if(error) {
    return (<div>No se pueden mostrar los productos</div>)
  }

  if(loading) {
    return (<div>Loading...</div>)
  }

  return(
    <div className="ProductContainer">
       { products.map((product) => {
          return(
            <ProductCard
              title={product.title}
              description={product.description}
            />
          );
        })
      }
    </div>
  );
}

export default ProductContainer;