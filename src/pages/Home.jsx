import { useEffect, useState } from "react";
import Services from "../Services/Services";
import Hero from "../components/Hero/Hero";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import ClockOffer from "../components/UI/ClockOffer";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [mobilesProducts, setMobilesProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    setTrendingProducts(filteredTrendingProducts);

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    setBestSalesProducts(filteredBestSalesProducts);

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    setWirelessProducts(filteredWirelessProducts);

    const filteredMobilesProducts = products.filter(
      (item) => item.category === "mobile"
    );
    setMobilesProducts(filteredMobilesProducts);

    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );
    setPopularProducts(filteredPopularProducts);
  }, []);

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
            <ProductList data={trendingProducts} />
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
            <ProductList data={bestSalesProducts} />
          </div>
        </div>
      </div>

      {/* For offer sales component */}
      <ClockOffer />

      {/* For wireless and mobiles Product */}
      <div className=" my-10">
        <div className="container2  mx-auto font-primary">
          <div className="tending_products mx-auto ">
            <h1 className="text-center text-2xl tracking-wide font-bold">
              New Arrivals
            </h1>
            <ProductList data={mobilesProducts} />
            <ProductList data={wirelessProducts} />
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
            <ProductList data={popularProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
