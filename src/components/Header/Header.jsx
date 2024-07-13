import { Link, useNavigate } from "react-router-dom";
import { easeIn, motion } from "framer-motion";
// Importing images
import Logo from "../../assets/images/eco-logo.png";
import User_Icon from "../../assets/images/user-icon.png";

// Icons
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoReorderThree } from "react-icons/io5";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hook/useAuth";

//
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

const logo_name = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { ease: "easeIn", duration: 0.5 } },
};
const logo_name2 = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { ease: "easeIn", duration: 0.9 } },
};
const logo_img = {
  hidden: { y: -100 },
  visible: { y: 0, transition: { ease: "easeIn", duration: 0.8 } },
};
const mid_Sec = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [childOptions, setChildOptions] = useState(false);

  const toggleChildVisibility = () => {
    setChildOptions(!childOptions);
  };

  // get the user image from user details
  const { currentUser } = useAuth();

  // if click the shopping bag then  navigate
  const navigate = useNavigate();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  const list_links = [
    { path: "/", display: "Home" },
    { path: "/shop", display: "Shop" },
    { path: "/cart", display: "Cart" },
  ];

  // onClick window.scroll to top
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigateToCart = () => {
    navigate("/cart");
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <header
      className={`${
        isActive ? " bg-gray-100  py-2 shadow-md" : " bg-none py-4 "
      } fixed top-0 w-full h-[60px] z-10 transition-all font-primary`}
    >
      <div className="container max-w-[90%] mx-auto flex items-center justify-between ">
        <Link to={"/"}>
          <div className="left flex items-end justify-around cursor-pointer">
            <motion.img
              variants={logo_img}
              initial="hidden"
              animate="visible"
              src={Logo}
              alt="Company-logo"
              className="h-[45px] max-sm:h-[36px]"
              onClick={scrollTop}
            />
            <div className="heading flex flex-col ">
              <motion.h1
                variants={logo_name}
                initial="hidden"
                animate="visible"
                className="font-bold text-xl max-sm:text-sm tracking-wide leading-4"
              >
                Multimart
              </motion.h1>
              <motion.span
                variants={logo_name2}
                initial="hidden"
                animate="visible"
                className="text-xs font-light max-sm:text-[10px]"
              >
                Since 1999
              </motion.span>
            </div>
          </div>
        </Link>
        <div className="mid max-sm:hidden ">
          <ul className="flex gap-6  items-center justify-between ">
            {list_links.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, translateY: -100 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1, delay: i * 0.1 }}
                whileFocus={{ scale: 1.1 }}
                className="text-xl active:font-bold focus:font-bold hover:text-blue-900"
                onClick={scrollTop}
              >
                <Link to={item.path}>{item.display}</Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="right flex items-center gap-2 md:gap-4">
          <motion.div
            className="favicon"
            variants={mid_Sec}
            initial="hidden"
            animate="visible"
          >
            <CiHeart className="text-2xl max-md:text-xl cursor-pointer" />
          </motion.div>
          <motion.div
            className="favicon relative w-8 max-md:w-7 "
            variants={mid_Sec}
            initial="hidden"
            animate="visible"
            onClick={navigateToCart}
          >
            <MdOutlineShoppingCart className="text-2xl max-md:text-xl cursor-pointer" />
            <div className="count text-[10px]  font-semibold w-4 h-4 max-md:w-[13px] max-md:h-[13px] absolute -top-1 right-1 bg-slate-800 text-white rounded-full flex items-center justify-center">
              {totalQuantity}
            </div>
          </motion.div>
          <div
            className="profilesContainer relative"
            onClick={toggleChildVisibility}
          >
            <motion.img
              whileTap={{ scale: 1.2 }}
              variants={mid_Sec}
              initial="hidden"
              animate="visible"
              src={currentUser ? currentUser.photoURL : User_Icon}
              alt="u-icon"
              className="w-[30px] cursor-pointer"
            />
            <div
              className={`${toggleChildVisibility ? "visible" : "hidden "} "" `}
              onClick={toggleChildVisibility}
            >
              {childOptions && (
                <div className="absolute w-[150px]  top-[50px] -left-16 border-2 border-black bg-white text-black flex flex-col items-center">
                  {currentUser ? (
                    <motion.span
                      onClick={logout}
                      className="cursor-pointer px-2 py-1 shadow-md w-full text-center"
                      whileTap={{ scale: 1.1 }}
                    >
                      Logout
                    </motion.span>
                  ) : (
                    <div className="login w-full flex flex-col items-center gap-2 py-2 mx-4 text-lg">
                      <motion.span
                        className="w-full shadow-md text-center "
                        whileTap={{ scale: 1.2 }}
                      >
                        <Link to={"/login"}>Login</Link>
                      </motion.span>
                      <motion.span
                        className="w-full shadow-md text-center"
                        whileTap={{ scale: 1.2 }}
                      >
                        <Link to={"/signup"}>Signup</Link>
                      </motion.span>
                      <motion.span
                        className="w-full shadow-md text-center"
                        whileTap={{ scale: 1.2 }}
                      >
                        <Link to={"/dashboard"}>Dashboard</Link>
                      </motion.span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div
            className="right-mobile max-sm:block sm:hidden  text-xl  cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <RxCross2 /> : <IoReorderThree />}
          </div>
        </div>
        {/* If Mobile menu  */}
        {showMenu && (
          <motion.div
            className="mid absolute top-[52px] right-0  w-[40%] bg-slate-300 h-[50vh] flex flex-col justify-center items-center  "
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ ease: easeIn, duration: 0.5 }}
          >
            <ul className="flex flex-col gap-6 items-center justify-between bg-gray300 text-black">
              {list_links.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  whileFocus={{ scale: 1.1 }}
                  className="text-xl active:font-bold focus:font-bold hover:text-blue-900"
                >
                  <Link to={item.path}>{item.display}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
