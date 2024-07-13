import { motion } from "framer-motion";
// Importing images
import User_Icon from "../assets/images/user-icon.png";
// importing React Icons
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import useAuth from "../custom-hook/useAuth";
import { Link } from "react-router-dom";

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
const last_Sec = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
const mid_Sec = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const admin_nav = [
  { display: "Dashboard", path: "/dashboard" },
  { display: "All-Products", path: "/dashboard/all-products" },
  { display: "Orders", path: "/dashboard/orders" },
  { display: "User", path: "/dashboard/users" },
];

const AdminNav = () => {
  const { currentUser } = useAuth();
  return (
    <section className="w-full font-primary">
      <div className="main-container bg-slate-600 text-white">
        <div className="container max-w-[75%] mx-auto flex items-center justify-between py-4 ">
          <div className="left flex items-end justify-around cursor-pointer ">
            <div className="heading flex flex-col ">
              <motion.h1
                variants={logo_name}
                initial="hidden"
                animate="visible"
                className="font-bold text-xl max-sm:text-sm tracking-wide leading-4"
              >
                Multimart
              </motion.h1>
            </div>
          </div>
          <motion.div
            className="input w-[60%]   rounded-md"
            variants={mid_Sec}
            initial="hidden"
            animate="visible"
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-1 px-2 rounded-md border-none outline-none bg-gray-100 text-black"
            />
          </motion.div>
          <div className="prfl-nts-setng flex items-center justify-between gap-6 ">
            <motion.div
              whileTap={{ scale: 1.1 }}
              variants={last_Sec}
              initial="hidden"
              animate="visible"
            >
              <IoIosNotifications className="text-xl cursor-pointer" />
            </motion.div>
            <motion.div
              whileTap={{ rotate: 180 }}
              variants={last_Sec}
              initial="hidden"
              animate="visible"
            >
              <IoIosSettings className="text-xl cursor-pointer" />
            </motion.div>
            <div>
              <motion.img
                whileTap={{ scale: 1.2 }}
                variants={last_Sec}
                initial="hidden"
                animate="visible"
                // src={User_Icon}
                src={
                  currentUser && currentUser.photoUrl
                    ? currentUser.photoURL
                    : User_Icon
                }
                alt="u-icon"
                className="w-[30px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container2 bg-slate-400/60">
        <div className="items flex items-center justify-center h-[60px] ">
          <ul className="flex items-center gap-5">
            {admin_nav.map((item, index) => (
              <motion.li
                key={index}
                className="hover:bg-white/70 px-2 py-1 rounded-md font-medium max-sm:text-sm"
                whileTap={{ scale: 0.9 }}
              >
                <Link to={item.path}>{item.display}</Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdminNav;
