const HeaderPart = () => { 
    return (
         <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 group cursor-pointer">
           <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-white/20">
              {/* <svg
                className="w-6 h-6 text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg> */}
              <img src="logos.png" alt="" srcset="" />
              
            </div>
            <span className="text-xl font-semibold tracking-tight text-white">Payeox</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Features</a>
            <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">How it Works</a>
            <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Pricing</a>
            <a href="#security" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Security</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href='/auth' className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Sign In</a>
            <a href='/auth' className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
          </div>
        </div>
      </header>
    )
}
export default HeaderPart;