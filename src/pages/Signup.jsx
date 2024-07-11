import { Link, useNavigate } from "react-router-dom";
import Login_Bg from "../assets/images/login-bg.jpg";
import { motion } from "framer-motion";
import { useState } from "react";

// importing firebase auth
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// importing from firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// importing from firestore
import { setDoc, doc } from "firebase/firestore";

// importign from firebase config
import { auth, db, storage } from "../firebase.config";
import { toast } from "react-toastify";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // update user Profile
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });
            // store userData in firestore database
            await setDoc(doc(db, "user", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
      setLoading(false);
      toast.success("Account created successfully");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
      console.log("this error has been occured", error);
    }
  };
  return (
    <section className="min-w-full">
      <div className="container min-w-full  mt-[70px] ">
        <img
          src={Login_Bg}
          alt=""
          className="object-cover w-full max-h-[600px]"
        />
        <div className="absolute inset-0 bg-black opacity-70 w-full max-h-[600px] mt-[70px]"></div>
        {loading ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <h2 className="text-center text-2xl">Loading....</h2>
          </div>
        ) : (
          <div className="form absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[350px]  p-4 shadow-md rounded-lg font-primary bg-gradient-to-tr from-gray-800 via-gray-600 to-orange-500">
            <h1 className="text-center text-2xl font-bold mb-4">Signup</h1>
            <form action="" onSubmit={signUp}>
              <div className="username flex flex-col mb-5 justify-center">
                <label className="text-white">Username</label>
                <input
                  type="text"
                  className="border-2 border-gray-400 outline-none rounded-md mt-2 px-2 py-1"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="email flex flex-col mb-5 justify-center">
                <label className="text-white"> Enter your email</label>
                <input
                  type="email"
                  className="border-2 border-gray-400 outline-none rounded-md mt-2 px-2 py-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="pass flex flex-col mb-5 justify-center">
                <label className="text-white"> Enter your password</label>
                <input
                  type="password"
                  className="border-2 border-gray-400 outline-none rounded-md mt-2 px-2 py-1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="pass flex flex-col mb-5 justify-center">
                <input
                  type="file"
                  className="border-2 border-gray-400 outline-none text-white  rounded-md mt-2 px-2 py-1"
                  onChange={(e) => setFile(e.target.file[0])}
                />
              </div>
              <motion.div className="log text-center">
                <motion.button
                  type="submit"
                  className="bg-white text-lg px-5 py-1 rounded-md "
                  whileTap={{ scale: 1.1 }}
                >
                  Signup
                </motion.button>
              </motion.div>
            </form>
            <h2 className="mt-5 text-center text-gray-300">
              Already have an account?{" "}
              <Link to={"/login"}>
                <motion.button className="underline focus:scale-110">
                  Login
                </motion.button>
              </Link>{" "}
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default Signup;
