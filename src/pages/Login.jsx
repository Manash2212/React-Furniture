import { Link, useNavigate } from "react-router-dom";
import Login_Bg from "../assets/images/login-bg.jpg";
import { motion } from "framer-motion";
import { useState } from "react";

// importing from firebase auth
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);

      setLoading(false);
      toast.success("Successfully Login");
      navigate("/checkout");
    } catch (error) {
      setLoading(false);
      toast.error("Something went Wrong");
      console.log("This is the Error", error.message);
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
            <h1 className="text-2xl">Loading....</h1>
          </div>
        ) : (
          <div className="form absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[350px]  p-4 shadow-md rounded-lg font-primary bg-gradient-to-tr from-gray-800 via-gray-600 to-orange-500">
            <h1 className="text-center text-2xl font-bold mb-4">Login</h1>
            <form action="" onSubmit={signIn}>
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
                  className="border-2 border-gray-400 outline-none text-xl rounded-md mt-2 px-2 py-1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <motion.div className="log text-center">
                <motion.button
                  type="submit"
                  className="bg-white text-lg px-5 py-1 rounded-md "
                  whileTap={{ scale: 1.1 }}
                >
                  Login
                </motion.button>
              </motion.div>
            </form>
            <h2 className="mt-5 text-center text-gray-300">
              Dont have any account?{" "}
              <Link to={"/signup"}>
                <motion.button className="underline focus:scale-110">
                  Create an account
                </motion.button>
              </Link>{" "}
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default Login;
