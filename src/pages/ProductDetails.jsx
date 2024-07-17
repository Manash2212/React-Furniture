import { useParams } from "react-router-dom";
import CommonSection from "../components/UI/CommonSection";
// import products from "../assets/data/products";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import ProductList from "../components/UI/ProductList";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slice/cartSlice";
import { toast } from "react-toastify";
// import "./pDetails.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import useGetData from "../custom-hook/useGetData";

const ProductDetails = () => {
  const [product, setProduct] = useState({});

  const [tab, setTab] = useState("desc");

  const dispatch = useDispatch();

  const { id } = useParams();

  const { data: products, loading } = useGetData("products");

  // const product = products.find((item) => item.id === id);
  const docRef = useMemo(() => doc(db, "products", id), [id]);

  useEffect(() => {
    const getProduct = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("No product found");
      }
    };
    getProduct();
  }, [docRef]);

  const addToCart = () => {
    dispatch(
      addItem({
        id,
        productName,
        price,
        image: imgUrl,
      })
    );
    toast.success("Product added successfully");
  };

  const { imgUrl, productName, price, description, category, shortDesc } =
    product;

  const ralatedProducts = products.filter((item) => item.category === category);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [product]);

  return (
    <section className="min-w-full">
      <div className="container min-w-full">
        <CommonSection title={productName} />
        <div className="product_details max-w-[85vw] mx-auto">
          <div className=" flex  gap-4 max-md:gap-2 justify-around font-primary max-md:flex-col  mt-5">
            <div className="p_img flex flex-1 max-w-[640px] max-h-[480px] max-md:max-h-[300px] max-sm:max-h-[280px] ">
              <img
                src={imgUrl}
                alt="product_img"
                className="object-cover w-full max-h-full"
              />
            </div>
            <div className="about_p max-h-[65vh] pt-10 flex flex-col flex-1">
              <h1 className="text-2xl tracking-wide font-bold max-md:text-xl max-md:font-semibold">
                {productName}
              </h1>
              <span className="mt-2 font-bold max-md:font-medium">
                Category: <span className="font-semibold ">{category}</span>{" "}
              </span>
              <div className="ratings flex items-center gap-2 my-3">
                <span>
                  <FaStar className="text-orange-600" />
                </span>
                <span>
                  <FaStar className="text-orange-600" />
                </span>
                <span>
                  <FaStar className="text-orange-600" />
                </span>
                <span>
                  <FaStar className="text-orange-600" />
                </span>
                <span>
                  <FaStarHalfAlt className="text-orange-600" />
                </span>
                {/* <span>
                  ({" "}
                  <span className="text-orange-600 font-semibold max-md:font-medium">
                    {avgRating}
                  </span>{" "}
                  ratings )
                </span> */}
              </div>
              <h3 className="text-2xl my-2 max-md:text-xl">₹{price}</h3>
              <p className="max-w-[80%] my-2 text-gray-600">{shortDesc}</p>
              <div className="button my-3 max-w-[200px]">
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  className=" bg-slate-700 text-xl px-2 py-1 rounded-md text-center text-white max-md:text-lg"
                  onClick={addToCart}
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </div>
          <div className="review_Details my-10">
            <div className="tab_title flex gap-10 my-3 font-primary">
              <h3
                className={`${
                  tab === "desc"
                    ? "font-semibold scale-110 border-b-2 border-black"
                    : ""
                } cursor-pointer`}
                onClick={() => setTab("desc")}
              >
                Description
              </h3>
            </div>
            <div className="desc_contents mt-7">
              <p className="text-gray-500">{description}</p>
            </div>
          </div>
        </div>

        {/* For Suggesting also Like Product */}
        <div className=" my-10">
          <div className="container3 max-w-[90%]  mx-auto font-primary  ">
            <h1 className="text-start text-2xl tracking-wide font-bold max-md:text-xl max-sm:text-lg">
              You might also like this
            </h1>
            <div className="best_sales_products mx-auto ">
              <ProductList data={ralatedProducts} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
