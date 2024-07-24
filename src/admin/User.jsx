import React from "react";
// importing the Custom Hook
import useGetData from "../custom-hook/useGetData";
// importing the Loading Component
import LoadingSpinner from "../components/Loading/LoadingSpinner";
import { motion } from "framer-motion";
// importing the Firebase Component
import { db } from "../firebase.config";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const User = () => {
  const { data: usersData, loading } = useGetData("users");
  // console.log(productsData);

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "users", id));
    toast.success("User deleted successfully");
  };

  return (
    <div className="container mx-auto my-8">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Username
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {usersData.map((user_i, index) => (
                  <motion.tr
                    key={user_i.uid}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <img
                        src={user_i.photoURL}
                        alt="user"
                        className="max-w-[80px] max-h-[100px] object-cover "
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm ">
                      {user_i.displayName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user_i.email}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        onClick={() => {
                          deleteProduct(user_i.uid);
                        }}
                        className="px-2 py-1 bg-red-600 text-white font-medium rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
