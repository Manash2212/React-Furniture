import useGetData from "../custom-hook/useGetData";
const Dashboard = () => {
  const { data: products } = useGetData("products");
  const { data: users } = useGetData("users");
  return (
    <section className="w-full">
      <div className="container max-w-[80%] flex items-center gap-5 flex-wrap  mx-auto py-10 min-h-[37vh]">
        <div className="item1 flex flex-col flex-1 items-center py-5 px-5 bg-[#bee3c0]  shadow-md rounded-md text-xl max-sm:text-sm h-[100px] font-semibold cursor-pointer ">
          <h2 className="font-primary">Total Sales</h2>
          <h3 className="font-style">₹ 3500000</h3>
        </div>
        <div className="item2 flex flex-col flex-1 items-center py-5 px-5 bg-[#a1eca6] shadow-md rounded-md text-xl max-sm:text-sm h-[100px] font-semibold cursor-pointer ">
          <h2 className="font-primary">Oraders</h2>
          <h3 className="font-style"> 5 </h3>
        </div>
        <div className="item3 flex flex-col flex-1 items-center py-5 px-5 bg-[#c5edc7] shadow-md rounded-md text-xl max-sm:text-sm h-[100px] font-semibold cursor-pointer ">
          <h2 className="font-primary">Total Products</h2>
          <h3 className="font-style">{products.length}</h3>
        </div>
        <div className="item4 flex flex-col flex-1 items-center py-5 px-5 bg-[#a1eca6] shadow-md rounded-md text-xl max-sm:text-sm h-[100px] font-semibold cursor-pointer ">
          <h2 className="font-primary">Total Users</h2>
          <h3 className="font-style">{users.length}</h3>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
