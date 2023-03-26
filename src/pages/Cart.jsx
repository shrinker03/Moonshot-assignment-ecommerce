import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementItem,
  incrementItem,
  removeFromCart,
} from "../redux/slices/cartSlice";

const Cart = () => {
  const cartInfo = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleCartIncrement = (id) => {
    dispatch(incrementItem(id));
  };

  const handleCartDecrement = (id) => {
    dispatch(decrementItem(id));
  };

  const handleRemoveCartItem = (id) => {
    dispatch(removeFromCart(id));
  };

  if (!cartInfo.length) {
    return (
      <div className="flex justify-center items-center mt-[5rem]">
        <h1 className="text-4xl">
          Your cart is empty <span>🛒</span>
        </h1>
      </div>
    );
  }

  return (
    <div className="p-[10rem] grid grid-cols-3 gap-5">
      <div
        role="list"
        className="-my-6 divide-y divide-gray-200 col-span-2 shadow-lg p-3"
      >
        {cartInfo.map(({ qty, productInfo: product }) => (
          <div key={product?.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={product.image}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <a href={product.href}>{product.title}</a>
                  </h3>
                  <p className="ml-4">
                    ${product.price} x {qty}
                  </p>
                </div>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">
                  Qty:{" "}
                  <button
                    onClick={() => handleCartDecrement(product?.id)}
                    className="p-3 bg-red-400 text-slate-50 rounded-md ml-1"
                  >
                    -
                  </button>{" "}
                  <span className="text-2xl font-medium mx-5">{qty}</span>{" "}
                  <button
                    onClick={() => handleCartIncrement(product?.id)}
                    className="p-3 bg-blue-600 text-slate-50 rounded-md"
                  >
                    +
                  </button>
                </p>

                <div className="flex">
                  <button
                    onClick={() => handleRemoveCartItem(product?.id)}
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="shadow-lg p-2 space-y-3 flex flex-col justify-around">
        <div>
          <h1 className="text-3xl">Checkout</h1>
        </div>
        <div>
          <div className="text-2xl">
            <span className="text-xl">Sub-total: </span>$
            {cartInfo
              .reduce((acc, item) => acc + item.productInfo.price * item.qty, 0)
              .toFixed(2)}
          </div>
          <button className="w-[100%] p-5 bg-blue-500 rounded-lg text-white mt-3">
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
