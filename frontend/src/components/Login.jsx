import React from 'react';

const Login = () => {
  return (
//     <div className="min-h-screen w-full flex bg-white font-sans antialiased text-[#1A1A1A]">
//       <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        
//         {/* Left Side: Brand & Editorial Image/Gradient Panel */}
//         <div className="hidden lg:flex flex-col justify-between p-16 relative bg-gradient-to-b from-[#ECECEC] to-[#C2C2C2] overflow-hidden">
//           {/* Subtle overlay for editorial texture if you swap to a real background image later */}
//           <div className="absolute inset-0 bg-black/5 mix-blend-overlay pointer-events-none" />
//  <img
//             src="/ladki.jpg"
//             alt="Fashion Collection"
//             className="absolute inset-0 w-full h-full object-cover"
//           />

        

         
        
//         </div>

//         {/* Right Side: Authentication Form Panel */}
//         <div className="flex flex-col justify-between p-8 sm:p-16 lg:p-24 bg-white relative">
          
//           {/* Center: Main Form Content Wrapper */}
//           <div className="w-full max-w-[420px] mx-auto my-auto pt-12 pb-16">
//             <header className="mb-10">
//               <h1 className="text-3xl font-serif tracking-tight text-[#111111] mb-2">
//                 Welcome Back
//               </h1>
//               <p className="text-sm text-gray-500 font-light">
//                 Please enter your details to access your account.
//               </p>
//             </header>

//             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//               {/* Email Input */}
//               <div className="flex flex-col space-y-2">
//                 <label className="text-[10px] tracking-widest uppercase font-medium text-gray-400">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="name@example.com"
//                   className="w-full bg-transparent border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-200 placeholder-gray-300"
//                 />
//               </div>

//               {/* Password Input */}
//               <div className="flex flex-col space-y-2">
//                 <div className="flex justify-between items-baseline">
//                   <label className="text-[10px] tracking-widest uppercase font-medium text-gray-400">
//                     Password
//                   </label>
//                   <a
//                     href="#forgot"
//                     className="text-[10px] tracking-widest uppercase text-gray-400 hover:text-black transition-colors duration-200 underline underline-offset-4"
//                   >
//                     Forgot Password?
//                   </a>
//                 </div>
//                 <input
//                   type="password"
//                   placeholder="••••••••"
//                   className="w-full bg-transparent border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-200 placeholder-gray-300 tracking-widest"
//                 />
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-black text-white py-4 mt-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-zinc-800 transition-colors duration-200 shadow-sm"
//               >
//                 Sign In
//               </button>
//             </form>

//             {/* Divider */}
//             <div className="relative my-8 text-center">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-100"></div>
//               </div>
//               <span className="relative bg-white px-4 text-[9px] tracking-widest uppercase text-gray-400">
//                 Or Continue With
//               </span>
//             </div>

//             {/* Social Login Buttons */}
//             <div className="grid grid-cols-2 gap-4">
//               <button className="flex items-center justify-center gap-2 border border-gray-200 bg-white py-3 px-4 text-[10px] tracking-widest uppercase font-medium hover:bg-gray-50 transition-colors duration-200">
//                 {/* SVG icon for Google */}
//                 <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
//                   <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                   <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                   <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"/>
//                   <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                 </svg>
//                 Google
//               </button>
              
//               <button className="flex items-center justify-center gap-2 border border-gray-200 bg-white py-3 px-4 text-[10px] tracking-widest uppercase font-medium hover:bg-gray-50 transition-colors duration-200">
//                 {/* SVG icon for Apple */}
//                 <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
//                   <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.56 2.95-1.39z"/>
//                 </svg>
//                 Apple
//               </button>
//             </div>

//             {/* Bottom Form Navigation */}
//             <p className="text-center text-xs text-gray-500 font-light mt-10">
//               Don't have an account?{' '}
//               <a href="#signup" className="font-semibold text-black hover:underline underline-offset-2">
//                 Create Account
//               </a>
//             </p>
//           </div>

//           {/* Footer: Legal Links */}
//           <footer className="w-full flex justify-center lg:justify-start gap-6 text-[9px] tracking-widest uppercase text-gray-400 font-light pt-4 border-t border-gray-50 lg:border-none">
//             <a href="#privacy" className="hover:text-black transition-colors duration-200">Privacy Policy</a>
//             <a href="#terms" className="hover:text-black transition-colors duration-200">Terms of Service</a>
//             <a href="#cookies" className="hover:text-black transition-colors duration-200">Cookies</a>
//           </footer>

//         </div>
//       </div>
//     </div>
<div className="min-h-screen w-full bg-white font-sans antialiased text-[#1A1A1A]">
  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

    {/* Left Side */}
    <div className="relative h-[250px] sm:h-[350px] lg:h-auto overflow-hidden">
      <img
        src="/ladki.jpg"
        alt="Fashion Collection"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10"></div>
    </div>

    {/* Right Side */}
    <div className="flex flex-col justify-between bg-white px-5 py-8 sm:px-10 sm:py-12 lg:px-20 lg:py-16">

      <div className="w-full max-w-md mx-auto my-auto">
        <header className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-serif tracking-tight text-[#111111] mb-2">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500">
            Please enter your details to access your account.
          </p>
        </header>

        <form className="space-y-6">
          {/* Email */}
          <div className="flex flex-col space-y-2">
            <label className="text-[10px] tracking-widest uppercase font-medium text-gray-400">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full bg-transparent border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black placeholder-gray-300"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-[10px] tracking-widest uppercase font-medium text-gray-400">
                Password
              </label>

              <a
                href="#forgot"
                className="text-[10px] tracking-widest uppercase text-gray-400 hover:text-black"
              >
                Forgot Password?
              </a>
            </div>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-transparent border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black placeholder-gray-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 sm:py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-zinc-800"
          >
            Sign In
          </button>
        </form>

        {/* Social Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
          <button className="flex items-center justify-center gap-2 border border-gray-200 py-3 text-[10px] tracking-widest uppercase">
            Google
          </button>

          <button className="flex items-center justify-center gap-2 border border-gray-200 py-3 text-[10px] tracking-widest uppercase">
            Apple
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          Don't have an account?{" "}
          <a href="/register" className="font-semibold text-black">
            Create Account
          </a>
        </p>
      </div>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 text-[9px] tracking-widest uppercase text-gray-400 mt-8">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#cookies">Cookies</a>
      </footer>

    </div>
  </div>
</div>

  );
};

export default Login;