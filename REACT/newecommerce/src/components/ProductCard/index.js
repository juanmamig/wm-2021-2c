import './style.css';

const ProductCard = ({ title, description }) => {
  return(
    <div className="ProductCard">
      <div className="ProductCard-content">
        <div className="ProductCard-title">{title}</div>
        <div className="ProductCard-description">{description}</div>
      </div>
    </div>
  );
}

export default ProductCard;