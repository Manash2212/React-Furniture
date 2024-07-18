import CommonSection from "../components/UI/CommonSection";
// import ArmChair from "../assets/images/arm-chair-01.jpg";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/slice/cartSlice";
import { Link } from "react-router-dom";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { motion } from "framer-motion";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log(cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <section className="min-w-full">
      <div className="container min-w-full ">
        <CommonSection title={"Shopping Cart"} />
        <div className="content w-[90%] min-h-[50vh] mx-auto flex mt-5 max-md:flex-col ">
          {cartItems.length === 0 ? (
            <h2 className="text-center mx-auto text-2xl font-secondary flex items-center justify-center">
              No Items in cart
            </h2>
          ) : (
            <div className="cart-items max-w-[70%]  flex items-start flex-col w-full gap-y-2 h-[400px] lg:h-[500px] overflow-y-auto overflow-x-hidden max-md:max-w-full border-x-2 border-gray-200 p-1">
              {cartItems.map((item, index) => (
                <DataContainer item={item} key={index} />
              ))}
            </div>
          )}
          <div className="amount max-w-[28%] ml-2  p-2 font-primary max-md:max-w-full max-md:ml-0 ">
            <div className="subtotal flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-800 ">Subtotal</h3>
              <h3 className="text-xl font-bold">₹ {totalAmount}</h3>
            </div>
            <p className="text-gray-500 my-4">
              Taxes and shipping will calculate in checkout
            </p>
            <div className="cout_cshoppping flex flex-col gap-5 items-center mt-7">
              <button className="bg-slate-800 px-2 py-1 w-full rounded-md text-xl  text-white">
                <Link to={"/checkout"}>Checkout</Link>
              </button>
              <button className="bg-slate-800 px-2 py-1 w-full rounded-md text-xl  text-white">
                <Link to={"/shop"}>Continue Shopping</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DataContainer = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(deleteItem(item.id));
  };
  return (
    <div
      key={item.id}
      className="items w-full  flex items-center border-b-2 border-gray-300 shadow-md my-2 "
    >
      <div className="items flex items-center justify-between px-8 w-full min-h-[100px] gap-5 max-md:px-2 max-md:flex-col max-md:gap-3 py-2 ">
        <div className="flex items-center justify-around  flex-1 max-md:w-full">
          <div className="img ">
            <img
              src={item.imgUrl}
              alt="chair"
              className="w-full h-[70px] object-contain"
            />
          </div>
          <div className="title  ">
            <h2>{item.productName}</h2>
          </div>
        </div>
        <div className="flex items-center justify-between flex-1 max-md:w-full max-md:justify-around ">
          <div className="price  ">
            <h3>₹ {item.price}</h3>
          </div>
          <div className="qty  flex items-center gap-1 ">
            <motion.button className="px-2 py-1 " whileTap={{ scale: 1.1 }}>
              {" "}
              <CiSquareMinus className="text-2xl" />{" "}
            </motion.button>
            <p>{item.quantity}</p>
            <motion.button className="px-2 py-1 " whileTap={{ scale: 1.1 }}>
              {" "}
              <CiSquarePlus className="text-2xl" />{" "}
            </motion.button>
          </div>
          <div className="dlt   cursor-pointer" onClick={deleteProduct}>
            <FaTrashAlt className="text-xl text-gray-500 hover:text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
