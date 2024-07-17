import { useEffect, useState } from "react";
import Services from "../Services/Services";
import Hero from "../components/Hero/Hero";
import ProductList from "../components/UI/ProductList";
// import products from "../assets/data/products";
import ClockOffer from "../components/UI/ClockOffer";
import useGetData from "../custom-hook/useGetData";
import LoadingDots from "../components/Loading/LoadingDots";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [diningProducts, setDiningProducts] = useState([]);
  const [bedProducts, setBedProducts] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  const { data: products, loading } = useGetData("products");

  useEffect(() => {
    if (products.length > 0 && !isDataFetched) {
      const filteredTrendingProducts = products.filter(
        (item) => item.category === "chair"
      );
      setTrendingProducts(filteredTrendingProducts);

      const filteredBestSalesProducts = products.filter(
        (item) => item.category === "Sofa"
      );
      setBestSalesProducts(filteredBestSalesProducts);

      const filteredDiningProducts = products.filter(
        (item) => item.category === "Dining Table"
      );
      setDiningProducts(filteredDiningProducts);

      const filteredBedProducts = products.filter(
        (item) => item.category === "Bed"
      );
      setBedProducts(filteredBedProducts);
      setIsDataFetched(true);
    }
  }, [products, isDataFetched]);

  const year = new Date().getFullYear();
  return (
    <div>
      {/* For Hero Section */}
      <Hero year={year} />

      {/* For Services Card */}
      <Services />

      {/* For Trending Product */}
      <div className="">
        <div className="container2  mx-auto font-primary">
          <div className="tending_products mx-auto ">
            <h1 className="text-center text-2xl tracking-wide font-bold">
              Trending Products
            </h1>
            {loading ? (
              <LoadingDots />
            ) : (
              <ProductList data={trendingProducts} />
            )}
          </div>
        </div>
      </div>

      {/* For Best Sales Product */}
      <div className=" mt-10">
        <div className="container3  mx-auto font-primary">
          <div className="best_sales_products mx-auto ">
            <h1 className="text-center text-2xl tracking-wide font-bold">
              Best sales products
            </h1>
            {loading ? (
              <LoadingDots />
            ) : (
              <ProductList data={bestSalesProducts} />
            )}
          </div>
        </div>
      </div>

      {/* For offer sales component */}
      <ClockOffer />

      {/* For wireless and bed Product */}
      <div className=" my-10">
        <div className="container2  mx-auto font-primary">
          <div className="tending_products mx-auto ">
            <h1 className="text-center text-2xl tracking-wide font-bold">
              New Arrivals
            </h1>
            {loading ? <LoadingDots /> : <ProductList data={diningProducts} />}
          </div>
        </div>
      </div>

      {/* For popular Product */}
      <div className=" my-10">
        <div className="container3  mx-auto font-primary">
          <div className="best_sales_products mx-auto ">
            <h1 className="text-center text-2xl tracking-wide font-bold">
              Popular in category
            </h1>
            {loading ? <LoadingDots /> : <ProductList data={bedProducts} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
