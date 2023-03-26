import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import { addToCart } from "../redux/slices/cartSlice";

const ProductInfo = () => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProductInfo(json);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart({ qty: 1, productInfo }));
    navigate('/cart')
  };

  if (loading) return <>Loading...</>;

  return (
    <div className="grid gap-20 grid-cols-3 p-[3rem]">
      <img alt="product" width={400} height={400} src={productInfo?.image} />
      <div className="col-span-2 space-y-10">
        <h1 className="text-4xl mb-5">{productInfo?.title}</h1>
        <span className="text-sm p-2 rounded-2xl bg-slate-400 text-slate-100">
          {productInfo?.category}
        </span>
        <div>
          <div className="text-2xl font-medium">${productInfo?.price}</div>
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                <Rating rate={productInfo?.rating.rate} />
              </div>
              <p className="sr-only">
                {productInfo?.rating.rate} out of 5 stars
              </p>
              <span className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                {productInfo?.rating.count} reviews
              </span>
            </div>
          </div>
        </div>
        <p className="text-lg">{productInfo?.description}</p>
        <button
          onClick={handleAddToCart}
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-3 text-center mr-2 mb-2"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
