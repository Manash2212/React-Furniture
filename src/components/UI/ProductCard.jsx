// importing Icons
import { IoMdAdd } from "react-icons/io";
// importing from Framermotion
import { motion } from "framer-motion";
// importing Link
import { Link } from "react-router-dom";
// importing from redux

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slice/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success("Product added successfully");
  };
  return (
    <div>
      <div className="container mx-auto flex flex-wrap  items-center py-5  ">
        <div className="item  shadow-md rounded-md py-2 px-2 cursor-pointer   ">
          <Link to={`/shop/${item.id}`}>
            <div className="item_img  pb-2  w-[280px] h-[250px] max-sm:w-[280px] max-sm:h-[250px] sm:w-[250px] md:w-[280px] lg:w-[300px]">
              <motion.img
                src={item.imgUrl}
                alt="trending_product"
                className="w-full object-contain h-full "
                whileHover={{ scale: 0.9 }}
              />
            </div>
          </Link>
          <div className="img_details">
            <Link to={`/shop/${item.id}`}>
              <h2 className="text-xl font-semibold max-sm:text-lg">
                {item.productName}
              </h2>
            </Link>
            <p className="text-gray-400">{item.cateory}</p>
            <div className="price_add flex items-center justify-between mt-2 px-1">
              <span> ₹{item.price}</span>
              <motion.span
                className="bg-black p-1 rounded-full text-white "
                whileTap={{ scale: 1.2 }}
                onClick={addToCart}
              >
                <IoMdAdd />
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
