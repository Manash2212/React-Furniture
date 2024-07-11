import { useParams } from "react-router-dom";
import CommonSection from "../components/UI/CommonSection";
import products from "../assets/data/products";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ProductList from "../components/UI/ProductList";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slice/cartSlice";
import { toast } from "react-toastify";
// import "./pDetails.css";

const ProductDetails = () => {
  // For rating Logic
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  // For passing the user ratings
  const [passRating, setPassRating] = useState(0);

  // For get the userReview and userMsg
  const reviewUser = useRef("");
  const reviewMsg = useRef("");

  // For add to cart dispatch the action
  const dispatch = useDispatch();

  // console.log("passing rating", passRating);
  // console.log("rating", rating);
  // console.log("hover", hover);
  // console.log((rating && hover) || hover);

  // For Toggle between desc and rev
  const [tab, setTab] = useState("desc");

  const { id } = useParams();

  const product = products.find((item) => item.id === id);
  // console.log(product);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
    console.log(reviewUserMsg, reviewUserName, passRating);

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    console.log(reviewObj);
    toast.success("Review Submitted");
  };

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

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    description,
    reviews,
    category,
    shortDesc,
  } = product;

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
          <div className=" flex  gap-4 max-md:gap-2 justify-around font-primary max-md:flex-col">
            <div className="p_img flex flex-1 w-full max-h-[480px] max-md:max-h-[300px] max-sm:max-h-[280px]">
              <img
                src={imgUrl}
                alt="product_img"
                className="object-contain max-h-full"
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
                <span>
                  ({" "}
                  <span className="text-orange-600 font-semibold max-md:font-medium">
                    {avgRating}
                  </span>{" "}
                  ratings )
                </span>
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
              <h3
                className={`${
                  tab === "rev"
                    ? "font-semibold scale-110 border-b-2 border-black"
                    : ""
                } cursor-pointer`}
                onClick={() => setTab("rev")}
              >
                Review({reviews.length})
              </h3>
            </div>
            {tab === "desc" ? (
              <div className="desc_contents mt-7">
                <p className="text-gray-500">{description}</p>
              </div>
            ) : (
              <div className="rev_contents font-primary">
                <div className="product_review">
                  <ul className="flex flex-col gap-4 pl-5 mt-7">
                    {reviews.map((item, index) => (
                      <li key={index}>
                        <h4 className="font-bold">John doe</h4>
                        <span className="text-orange-600 font-semibold">
                          {item.rating} ( rating )
                        </span>
                        <p className="mt-3 text-gray-500">{item.text}</p>
                      </li>
                    ))}
                  </ul>
                  {/* Review Form */}
                  <div className="review_form shadow-md px-3 py-4 rounded-md mt-5 max-w-[70%] mx-auto max-md:max-w-[85%]">
                    <h4 className="font-primary font-bold text-2xl max-md:text-lg">
                      Leave your experience
                    </h4>
                    <form action="" onSubmit={submitHandler}>
                      <input
                        ref={reviewUser}
                        type="text"
                        placeholder="Enter your name"
                        className="border-2 border-gray-500 w-full rounded-md my-5 px-2 py-1 font-secondary max-sm:text-sm"
                        required
                      />
                      <div className="star_rating flex gap-4 mb-5">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button
                            key={num}
                            className={`${
                              num <= (hover || rating)
                                ? "text-orange-600"
                                : "text-slate-300"
                            } text-xl cursor-pointer `}
                            onClick={() => setRating(num)}
                            onMouseOver={() => setHover(num)}
                            onMouseLeave={() => setHover(rating)}
                          >
                            <span onClick={() => setPassRating(hover)}>
                              <FaStar />
                            </span>
                          </button>
                        ))}
                      </div>
                      {/* comment section */}
                      <textarea
                        ref={reviewMsg}
                        className=" w-full box-border border-2 border-gray-500 rounded-md px-2 py-2 font-secondary mb-4 max-sm:text-sm"
                        rows={4}
                        type="text"
                        placeholder="Say how you like it.."
                      />
                      <button
                        type="submit"
                        className="px-3 py-1 bg-slate-700 text-white text-xl tracking-wide rounded-md ml-2 max-sm:text-lg"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
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
