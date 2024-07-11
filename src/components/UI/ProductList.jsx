import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

const card_var = {
  // hidden: { opacity: 0, translateY: -100 },
  animate: { opacity: 1, translateY: 0 },
};

const ProductList = ({ data }) => {
  return (
    <div className=" w-full mt-10 ">
      <div className="max-w-[90%] flex flex-wrap items-center xl:justify-center  max-sm:justify-center gap-5 mx-auto ">
        {data?.map((item, i) => (
          <motion.div
            key={item.id}
            variants={card_var}
            initial={{ opacity: 0, translateY: -100 }}
            // initial="hidden"
            whileInView="animate"
            transition={{ duration: 1, delay: i * 0.2 }}
            viewport={{
              once: true,
            }}
            className="mx-auto"
          >
            <ProductCard item={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
