import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { googleSignIn, registerUser, profileUpdate } = useAuth();
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
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      return toast.error("Password should be greater than 6 characters");
    } else if (!/[A-Z]/.test(password)) {
      return toast.error("Password should contain at least one capital letter");
    } else if (!/[\W_]/.test(password)) {
      return toast.error(
        "Password should contain at least one special character"
      );
    }
    const toastId = toast.loading("Registering...");
    registerUser(email, password)
      .then(() => {
        profileUpdate(name, image)
          .then(() => {
            e.target.name.value = "";
            e.target.image.value = "";
            e.target.email.value = "";
            e.target.password.value = "";

            toast.success("User registered successfully", { id: toastId });
            if (location.state) {
              navigate(location.state);
            } else {
              navigate("/");
            }
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="bg-white">
      <div className="max-w-[1400px] px-2 mx-auto mt-[40px] mb-[40px]">
        <div className="hero">
          <div className="flex-col md:flex-row-reverse hero-content">
            <div className="max-w-[280px] lg:max-w-[400px]">
              <img src="" alt="" />
            </div>
            <div className="border-2 shadow-xl max-w-[280px] md:max-w-[400px] shrink border-[#4475F2] card">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <input
                    name="image"
                    type="text"
                    placeholder="Your Image URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Your Password"
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
                  <input
                    className="bg-[#4475F2]  hover:opacity-90 text-white text-3xl h-[60px] px-[20px] rounded-lg"
                    type="submit"
                    value="Register"
                  />
                  <button
                    type="button"
                    className="h-[40px] mt-4 w-full text-center border-2 border-[#4475F2] font-medium text-[#222] rounded-3xl"
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
                    Already have an account?{" "}
                    <Link to="/login">
                      <span className="text-blue-700">Login</span>
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

export default Register;
