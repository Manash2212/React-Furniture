import React from "react";

const AllProducts = () => {
  const data = [
    {
      img: "https://www.cherrypickindia.in/wp-content/uploads/2022/06/100_0292-min.jpg",
      age: 28,
      email: "john@example.com",
      job: "Developer",
      city: "New York",
    },
    {
      img: "https://www.cherrypickindia.in/wp-content/uploads/2022/06/100_0292-min.jpg",
      age: 34,
      email: "jane@example.com",
      job: "Designer",
      city: "San Francisco",
    },
    {
      img: "https://www.cherrypickindia.in/wp-content/uploads/2022/06/100_0292-min.jpg",
      age: 25,
      email: "michael@example.com",
      job: "Manager",
      city: "Los Angeles",
    },
    {
      img: "https://www.cherrypickindia.in/wp-content/uploads/2022/06/100_0292-min.jpg",
      age: 30,
      email: "emily@example.com",
      job: "Tester",
      city: "Chicago",
    },
  ];

  return (
    <div className="container mx-auto my-8">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <img
                  src={item.img}
                  alt="sofa"
                  className="max-w-[80px] object-cover border-2 border-red-500"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.age}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.job}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.city}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
