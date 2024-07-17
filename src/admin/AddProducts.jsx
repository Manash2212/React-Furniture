import { useState } from "react";
import { toast } from "react-toastify";

// For firebase db
import { storage, db } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const resetForm = () => {
    setEnterTitle("");
    setEnterShortDesc("");
    setEnterDescription("");
    setEnterPrice("");
    setEnterCategory("");
    setEnterProductImg(null);
    setLoading(false);
  };

  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    // ====== Add Product to the Firebase Database ====== //
    if (!enterProductImg) {
      toast.error("Please select an image file");
      setLoading(false);
      return;
    }

    try {
      // const docRef = await collection(db, "products");
      const storageRef = ref(
        storage,
        `productImages/${Date.now()}_${enterProductImg.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          toast.error("Image upload failed");
          setLoading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          try {
            await addDoc(collection(db, "products"), {
              productName: enterTitle,
              shortDesc: enterShortDesc,
              description: enterDescription,
              price: enterPrice,
              category: enterCategory,
              imgUrl: downloadURL,
            });
            toast.success("Product added successfully");
            resetForm();
            // navigate("/dashboard/all-products");
          } catch (e) {
            console.error("Error adding document: ", e);
            toast.info("Wait adding product");
            setLoading(false);
          }
        }
      );
    } catch (e) {
      console.log(e.message);
      toast.error("Error adding product");
      setLoading(false);
    }

    //..............

    // console.log(product);
  };
  return (
    <section className="w-full">
      <div className="container max-w-[65%] mx-auto ">
        <div className="form-group">
          {loading ? (
            <div className="min-h-[60vh] mx-auto flex items-center justify-center">
              <h1 className="font-style font-bold text-2xl">
                Please Wait the Product is Adding to the Store....
              </h1>
            </div>
          ) : (
            <>
              <div className="heading">
                <h1 className="text-2xl font-bold my-4 font-primary">
                  Add Product
                </h1>
              </div>
              <form onSubmit={addProduct}>
                <div className="title flex flex-col mb-3">
                  <label className="font-medium text-orange-500/90 pb-1">
                    Product title
                  </label>
                  <input
                    type="text"
                    value={enterTitle}
                    onChange={(e) => setEnterTitle(e.target.value)}
                    required
                    className="  border-2 border-gray-400  rounded-md outline-none py-1 px-4"
                  />
                </div>
                <div className="S-Desc flex flex-col mb-3">
                  <label className="font-medium text-orange-500/90 pb-1">
                    Short Description
                  </label>
                  <input
                    type="text"
                    value={enterShortDesc}
                    onChange={(e) => setEnterShortDesc(e.target.value)}
                    required
                    className="  border-2 border-gray-400  rounded-md outline-none py-1 px-4"
                  />
                </div>
                <div className="Desc flex flex-col mb-3">
                  <label className="font-medium text-orange-500/90 pb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    value={enterDescription}
                    onChange={(e) => setEnterDescription(e.target.value)}
                    required
                    className="border-2 border-gray-400  rounded-md outline-none py-1 px-4"
                  />
                </div>
                <div className="prc-catgr flex items-center justify-between gap-4">
                  <div className="price flex flex-col flex-1">
                    <label className="font-medium text-orange-500/90 pb-1">
                      Price
                    </label>
                    <input
                      type="number"
                      value={enterPrice}
                      onChange={(e) => setEnterPrice(e.target.value)}
                      required
                      className="border-2 border-gray-400  rounded-md outline-none py-1 px-4"
                    />
                  </div>
                  <div className="Category flex flex-col flex-1">
                    <label className="font-medium text-orange-500/90 pb-1">
                      Category
                    </label>
                    <select
                      className="px-4 border-2 border-gray-400  rounded-md outline-none py-1 font-semibold"
                      value={enterCategory}
                      onChange={(e) => setEnterCategory(e.target.value)}
                      required
                    >
                      <option className="rounded-md font-medium ">
                        select_
                      </option>
                      <option className="rounded-md font-medium">Chair</option>
                      <option className="rounded-md font-medium">Sofa</option>
                      <option className="rounded-md font-medium">
                        Dining Table
                      </option>
                      <option className="rounded-md font-medium">Bed</option>
                    </select>
                  </div>
                </div>
                <div className="img flex flex-col mb-3">
                  <label className="font-medium text-orange-500/90 pb-1">
                    Product image
                  </label>
                  <input
                    type="file"
                    onChange={(e) => setEnterProductImg(e.target.files[0])}
                    className="border-2 border-gray-400  rounded-md outline-none py-1 px-2 "
                  />
                </div>
                <div className="price ">
                  <button
                    type="submit"
                    className="text-start border-none outline-none bg-slate-900 text-white px-4 py-1 rounded-md font-semibold text-[17px]"
                  >
                    {loading ? "Adding Product.." : "Add Product"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AddProducts;
