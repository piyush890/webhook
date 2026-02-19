import { useEffect, useState } from 'react';
import { Eye, EyeOff, Phone, Lock, ArrowRight, Sparkles, User, MailOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { loginApi, signupApi } from '../Network/AuthApi';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginSuccess } from '../Redux/Auth/AuthReducer';
import { jwtDecode } from "jwt-decode";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginformData, setLoginFormData] = useState({
    email: '',
    password: ''
  });
  const [signupformData, setSignupFormData] = useState({
    name:'',
    email: '',
    mobile: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
   const isAuthenticated = useSelector((state) => state.LoggedIn);

const setLocal=(key,value)=>{
  localStorage.setItem(key,value);
}

const handleSubmit = async (e) => {
  e.preventDefault(); // ✅ This is already there, good
  e.stopPropagation();  
  if (isLogin) {
    if (!loginformData.email || !loginformData.password) return;
setIsLoading(true);
try {
  const response = await loginApi(loginformData);
  if (response.status === 200) {
    toast.success(response.data['message']);
    setLocal("start", response.data['token']);
    const decoded = jwtDecode(response.data['token']);
    dispatch(setLoginSuccess({
      isAuthenticated: true,
      user: decoded.user_id,
      type: decoded.role_id,
      name: decoded.name,
      email: decoded.email,
    }));
    navigate('/dashboard');
  } else {
    toast.error(response.data['message']);
  }
} catch (error) {
  // ❌ Removed e.preventDefault() and e.stopPropagation() — `e` doesn't exist here
  // ❌ Removed `message` — it was undefined, causing a crash which refreshed the page
  console.log(error);
  const message = error?.response?.data?.message || "Invalid email or password"; // ✅ Define it here
  toast.error(message); // ✅ Now works without crashing
} finally {
  setIsLoading(false);
}

  } else {
    if (!signupformData.email || !signupformData.mobile || !signupformData.password || !signupformData.name) return;
    setIsLoading(true);
    try {
      const response = await signupApi(signupformData);
      if (response.status === 200) {
        toast.success(response.data['message']);
        setLocal("start", response.data['access_token']);
        const decoded = jwtDecode(response.data['access_token']);
        console.log(decoded);
        dispatch(setLoginSuccess({
          isAuthenticated: true,
          user: decoded.user_id,
          type: decoded.role_id,
          name: decoded.name,
          email: decoded.email,
        }));
        navigate('/dashboard'); // ✅ Add this — was missing!
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Signup failed");
    } finally {
      setIsLoading(false); // ✅ Move here so it always resets
    }
  }
};

  const handleChange = (e) => {
    setLoginFormData({
      ...loginformData,
      [e.target.name]: e.target.value
    });
  };
  const handleSignupChange = (e) => {
    setSignupFormData({
      ...signupformData,
      [e.target.name]: e.target.value
    });
  };

  const handleToggleForm = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsAnimating(false);
    }, 300);
  };

useEffect(() => {
  if (isAuthenticated?.isAuthenticated) {
    navigate('/dashboard');
  }
}, [isAuthenticated]);


  return (
    <div className={`flex min-h-screen bg-linear-to-br from-slate-950 via-black to-slate-950 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Left Side - Visual */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12 transition-all duration-700">
        <div className="relative z-10 max-w-lg">
          {/* Logo/Brand Area */}
          <div className="mb-8 flex items-center gap-2 transform transition-all duration-500 hover:scale-105">
            <div className="w-10 h-10  rounded-xl flex items-center justify-center shadow-lg shadow-white/20">
              <img src="logos.png" alt="" srcset="" />
            </div>
            <span className="text-2xl font-bold text-white">Payeox</span>
          </div>

          {/* Hero Content */}
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight transition-all duration-700 ease-out">
            Welcome back to your
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> digital space</span>
          </h1>

          <p className="text-gray-400 text-lg mb-12 transition-all duration-500">
            Secure, fast, and designed for the modern user. Access your account and continue where you left off.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3">
            {['Secure Login', 'Fast Access', '24/7 Support'].map((feature, idx) => (
              <div 
                key={idx} 
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:-translate-y-0.5"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {feature}
              </div>
            ))}
          </div>

          {/* Decorative Image/Illustration Area */}
          <div className="mt-16 relative">
            <div className="w-full h-64 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-500 hover:scale-105 hover:border-white/20">
              <img
                src="login.png"
                className="w-full h-full object-cover rounded-2xl opacity-80 transition-opacity duration-300 hover:opacity-100"
                alt="Login visual"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative z-10">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 flex items-center gap-2 transform transition-all duration-500 hover:scale-105">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transition-transform duration-300 hover:rotate-12">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">YourBrand</span>
          </div>

          {/* Form Header */}
          <div className="mb-8 transition-all duration-500">
            <h2 className="text-4xl font-bold text-white mb-3 transition-all duration-300">{
              isLogin ? 'Sign In to Your Account' : 'Create Your Account'
              }</h2>
            <p className="text-gray-400 text-lg transition-all duration-300">{
              isLogin ? 'Welcome back! Please enter your details.' : 'Join us today! Please fill in the details below.'
              }</p>
          </div>

          {/* Form Container with Transition */}
          <div className="relative overflow-hidden">
          {isLogin ? (
            <form onSubmit={handleSubmit} className={`space-y-5 transition-all duration-300 ${isAnimating ? 'animate-slideOutLeft' : 'animate-slideInRight'}`}>
              {/* Email Input */}
              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-200"
                >
                  Email
                </label>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MailOpen className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-all duration-300" />
                  </div>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={loginformData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Registered Email"
                    required
                    className="block w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:bg-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-200"
                >
                  Password
                </label>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-all duration-300" />
                  </div>

                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={loginformData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="block w-full pl-12 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:bg-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center group/eye"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-500 group-hover/eye:text-gray-300 transition-all duration-200 group-hover/eye:scale-110" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500 group-hover/eye:text-gray-300 transition-all duration-200 group-hover/eye:scale-110" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center text-sm text-gray-400 cursor-pointer group/checkbox transition-all duration-200 hover:text-gray-300">
                  <input
                    type="checkbox"
                    className="h-4 w-4 mr-2 bg-white/5 border-white/10 rounded text-blue-600 focus:ring-blue-500/20 transition-all duration-200 cursor-pointer"
                  />
                  Remember me
                </label>

                <a
                  href="/forgetpassword"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-all duration-200 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="group/btn relative w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-3.5 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300 disabled:opacity-50 mt-6 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </>
                  )}
                </span>
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className={`space-y-5 transition-all duration-300 ${isAnimating ? 'animate-slideOutLeft' : 'animate-slideInRight'}`}>
              {/* SignupForm */}
              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-200"
                >
                  Full Name
                </label>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-all duration-300" />
                  </div>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={signupformData.name}
                    onChange={handleSignupChange}
                    placeholder="Ram"
                    required
                    className="block w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:bg-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-200"
                >
                  Phone Number
                </label>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-all duration-300" />
                  </div>

                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={signupformData.mobile}
                    onChange={handleSignupChange}
                    placeholder="+91 00000 00000"
                    required
                    className="block w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:bg-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-200"
                >
                  Email
                </label>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MailOpen className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-all duration-300" />
                  </div>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={signupformData.email}
                    onChange={handleSignupChange}
                    placeholder="ram@gmail.com"
                    required
                    className="block w-full pl-12 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:bg-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-200"
                >
                  Password
                </label>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-all duration-300" />
                  </div>

                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={signupformData.password}
                    onChange={handleSignupChange}
                    placeholder="*******"
                    required
                    className="block w-full pl-12 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:bg-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center group/eye"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-500 group-hover/eye:text-gray-300 transition-all duration-200 group-hover/eye:scale-110" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500 group-hover/eye:text-gray-300 transition-all duration-200 group-hover/eye:scale-110" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot */}
              <div className="flex items-center justify-end pt-1">
             

                <a
                  href="/forgetpassword"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-all duration-200 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="group/btn relative w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-3.5 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300 disabled:opacity-50 mt-6 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Signing up...
                    </>
                  ) : (
                    <>
                      Sign Up
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </>
                  )}
                </span>
              </button>

              
            </form>
          )}
          </div>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-sm text-gray-400 transition-all duration-300">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              onClick={handleToggleForm} 
              className="text-blue-400 hover:text-blue-300 font-semibold transition-all duration-200 hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
      

      {/* Add CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.95);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-100%);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-fadeOut {
          animation: fadeOut 0.5s ease-in forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out forwards;
        }

        .animate-slideOutLeft {
          animation: slideOutLeft 0.3s ease-in forwards;
        }
      `}</style>
    </div>
  );
}
