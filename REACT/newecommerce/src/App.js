import logo from './logo.svg';
import './App.css';

import ProductContainer from './components/ProductContainer';
import ProductInfo from './components/ProductInfo';

function App() {
  return (
    <div className="App">
      <ProductContainer />

      <ProductInfo>
        <h2>
          Información de productos
        </h2>
        <p>Estos son los productos destacados</p>
      </ProductInfo>
    </div>
  );
}

export default App;