import React from "react";
import { FaMoneyCheck, FaRegMoneyBillAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../core/Button";

const MyProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/allproducts/${product.id}`);
  };

  return (
    <>
      <div className="overflow-hidden border p-5 transition-shadow duration-300 bg-white rounded">
        <a href="/" aria-label="Article">
          <img
            src={product?.picture}
            className="object-cover w-full h-64 rounded transform transition-all duration-500 hover:scale-110"
            alt=""
          />
        </a>
        <div className="py-5">
          <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
            13 Jul 2020
          </p>
          <a
            href="/"
            aria-label="Article"
            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            <p className="text-2xl font-bold leading-5">{product?.name}</p>
          </a>
          <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
            {product?.description}
          </p>

          <div className="flex  items-center">
            <FaMoneyCheck className="text-orange-400 mr-3" />
            <p className="text-gray-400">
              Temp_price :{" "}
              <span className="text-blue-600">${product?.temp_price}</span>
            </p>
          </div>
          <div className="flex  items-center mb-5">
            <FaRegMoneyBillAlt className="text-orange-400 mr-3" />
            <p className="text-gray-400">
              Price : <span className="text-blue-600">${product?.price}</span>
            </p>
          </div>
        </div>
        <Button handleButton={handleDetail}>See Details</Button>
      </div>
    </>
  );
};

export default MyProductCard;
