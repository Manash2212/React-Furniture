import { Link } from "react-router-dom";
import counterImage from "../../assets/images/counter-timer-img.png";
import { easeIn, motion } from "framer-motion";
import Clock from "./Clock";

const ClockOffer = () => {
  return (
    <div className=" mt-10 w-full bg-slate-900">
      <div className="container3 max-w-[80%]    mx-auto font-primary flex items-center justify-between max-sm:flex-col max-sm:py-5 max-sm:gap-10">
        <div className="left flex items-start justify-start  h-full ">
          <motion.div
            className="item flex flex-col items-start text-white"
            viewport={{
              once: true,
            }}
          >
            <motion.h3
              className="text-2xl font-secondary"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: easeIn, duration: 0.8 }}
              viewport={{
                once: true,
              }}
            >
              Limited Offers
            </motion.h3>
            <motion.h3
              className="text-md"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: easeIn, duration: 1 }}
              viewport={{
                once: true,
              }}
            >
              Quality Armchair
            </motion.h3>
            {/* Clock Timer Section */}
            <motion.div
              className="my-4  "
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: easeIn, duration: 1.1 }}
              viewport={{
                once: true,
              }}
            >
              <Clock />
            </motion.div>
            <motion.button
              className="px-2 py-1 mt-5 bg-white text-black text-[18px] font-semibold rounded-md"
              whileTap={{ scale: 1.1 }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: easeIn, duration: 1.2 }}
              viewport={{
                once: true,
              }}
            >
              <Link to={"/shop"}>Visit Store</Link>
            </motion.button>
          </motion.div>
        </div>
        <motion.div
          className="right w-[300px] h-[250px]"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: easeIn, duration: 1.3 }}
          viewport={{
            once: true,
          }}
        >
          <img src={counterImage} alt="offer_img" className="w-full h-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default ClockOffer;
