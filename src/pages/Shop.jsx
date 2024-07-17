import CommonSection from "../components/UI/CommonSection";
import { IoSearch } from "react-icons/io5";
// import products from "../assets/data/products";
import { useEffect, useState } from "react";
import ProductList from "../components/UI/ProductList";
import useGetData from "../custom-hook/useGetData";
import LoadingDots from "../components/Loading/LoadingDots";

const Shop = () => {
  const { data: products, loading } = useGetData("products");
  // console.log(products.length);
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    setProductsData(products);
  }, [products]);
  console.log(productsData.length);

  // For Filter the data with their category name in select option
  const handleFilterd = (e) => {
    const filterData = e.target.value;
    if (filterData === "Sofa") {
      const filterProducts = products.filter(
        (item) => item.category === "Sofa"
      );
      setProductsData(filterProducts);
    }
    if (filterData === "Dining Table") {
      const filterProducts = products.filter(
        (item) => item.category === "Dining Table"
      );
      setProductsData(filterProducts);
    }
    if (filterData === "Chair") {
      const filterProducts = products.filter(
        (item) => item.category === "Chair"
      );
      setProductsData(filterProducts);
    }
    if (filterData === "Bed") {
      const filterProducts = products.filter((item) => item.category === "Bed");
      setProductsData(filterProducts);
    }
  };

  // For Filter the data with their category name in search option

  const handleSearch = (e) => {
    const search_item = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(search_item.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <section className="min-w-full font-primary">
      <div className="container min-w-full">
        <CommonSection title={"Products"} />
        <div className="filter_Widget my-10 max-w-[90%] h-16  mx-auto flex items-center justify-between max-md:flex-col max-md:gap-5">
          <div className="filter_items flex w-[60%] max-md:justify-around max-md:w-full  max-md:text-center ">
            <div className="item1 flex-1 max-md:justify-center">
              <select
                onChange={handleFilterd}
                className="bg-slate-800 text-white py-1 px-2 max-sm:px-1 rounded-md max-sm:text-[15px]"
              >
                <option>Filter By Category</option>
                <option value="Sofa">Sofa</option>
                <option value="Chair">Chair</option>
                <option value="Dining Table">Dining Table</option>
                <option value="Bed">Bed</option>
              </select>
            </div>
            <div className="item2 flex-1 max-md:justify-center max-sm:items-center ">
              <select className="bg-slate-800 text-white py-1 px-2 max-sm:px-1 rounded-md max-sm:text-[15px]">
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </div>
          <div className="filter_item3 flex-1 max-md:w-full">
            <div className="search_item h-10 flex items-center border-2 border-gray-600 rounded-md">
              <input
                type="search"
                placeholder="Search..."
                className="w-full border-none outline-none text-xl px-2"
                onChange={handleSearch}
              />
              <IoSearch className="text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
        {/* If matches the option then show the productList */}
        <div className="productList">
          {productsData.length === 0 ? (
            <LoadingDots />
          ) : (
            <ProductList data={productsData} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Shop;
