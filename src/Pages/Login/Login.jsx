import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { googleSignIn, logInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    const toastId = toast.loading("Logging in...");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInUser(email, password)
      .then(() => {
        e.target.email.value = "";
        e.target.password.value = "";
        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }

        toast.success("User logged in successfully", { id: toastId });
      })
      .catch((error) => toast.error(error.message, { id: toastId }));
  };

  return (
    <div className="bg-[#FEFCFB]">
      <div className="max-w-[1400px] px-2 mx-auto mb-[40px] mt-[40px]">
        <div className="hero">
          <div className="flex-col md:flex-row-reverse hero-content">
            <div className="max-w-[280px] lg:max-w-[400px]">
              <img src="" alt="" />
            </div>
            <div className="border-2 max-w-[280px] md:max-w-[400px] shadow-xl border-[#FA7436] shrink card">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      className="w-full input input-bordered"
                      required
                    />
                    {showPassword ? (
                      <AiOutlineEyeInvisible
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                        className="absolute text-2xl top-3 right-3"
                      ></AiOutlineEyeInvisible>
                    ) : (
                      <AiOutlineEye
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                        className="absolute text-2xl top-3 right-3"
                      ></AiOutlineEye>
                    )}
                  </div>
                </div>
                <div className="mt-6 form-control">
                  <button className="bg-[#FA7436] hover:opacity-90 text-white text-3xl h-[60px] px-[20px] rounded-lg">
                    Login
                  </button>
                  <button
                    type="button"
                    className="h-[40px] mt-4 w-full text-center border-2 border-[var(--google_color)] font-medium text-[var(--google_color)] rounded-3xl"
                    onClick={handleGoogleSignIn}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <img
                        className="w-[16px] h-[16px]"
                        src="/google.png"
                        alt=""
                      />
                      <span>Sign In With Google</span>
                    </div>
                  </button>
                  <p className="mt-4 font-medium text-center text-gray-600">
                    New to this site?{" "}
                    <Link to="/register">
                      <span className="text-blue-700">Register</span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
