import { motion } from "framer-motion";
import hero_img from "../../assets/images/hero-img.png";
import { Link } from "react-router-dom";

const hero_slider = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
};

const Hero = ({ year }) => {
  return (
    <section className="w-full bg-blue-100 font-primary pt-[80px]">
      <div className="container w-[90%] mx-auto flex py-10 items-center justify-between max-sm:flex-col max-sm:gap-10">
        <div className="left flex flex-col flex-1 items-start  gap-2">
          <motion.p
            className="text-gray-600 max-sm:text-xs"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeIn" }}
          >
            Trending Product in {year}
          </motion.p>
          <motion.h2
            className="text-2xl tracking-wider font-bold font-secondary max-sm:text-lg"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
          >
            Meke Your Interior More <br />
            Minimalistic & Elegent. Just like wow..!
          </motion.h2>
          <motion.p
            className="text-gray-600 max-sm:text-xs"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeIn" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut maxime
            nulla quaerat aspernatur dolore hic, mollitia optio repellat placeat
            eligendi distinctio.
          </motion.p>
          <motion.button
            className="py-1 px-2 bg-black text-white uppercase rounded-md"
            whileTap={{ scale: 1.1 }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <Link to={"shop"}>Shop now</Link>
          </motion.button>
        </div>
        <div className="right flex flex-col flex-1 ">
          <motion.div
            className="banner"
            variants={hero_slider}
            initial="hidden"
            animate="visible"
          >
            <img src={hero_img} alt="product" className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
