import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group cursor-pointer">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={product.image}
          alt={product.image}
          className="h-full w-full object-fill object-center group-hover:opacity-75"
        />
      </div>
      <div className="flex justify-between mt-4 mb-1 gap-4">
        <h3 className="text-sm text-gray-700">{product.title}</h3>
        <p className="text-xl font-medium text-gray-900">
          ${product.price}
        </p>
      </div>
      <div className="flex items-center">
        <Rating rate={product?.rating.rate} />
      </div>
    </Link>
  );
};

export default Product;
