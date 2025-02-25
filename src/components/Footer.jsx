import { Link } from "react-router";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-700 py-6 mt-10 border-t border-gray-300">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col sm:flex-row justify-around gap-8 text-center md:text-left">
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <div className="space-y-2 flex flex-col justify-center pl-1">
            <Link to="/" className="hover:text-blue-500 text-slate-400">Home</Link>
            <Link to="/browsebook" className="hover:text-blue-500 text-slate-400">Browse Books</Link>
            <Link to="addbook" className="hover:text-blue-500 text-slate-400">Add Book</Link>
          </div>
        </div>

      
        {/* Contact Section */}
        <div >
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <div className="space-x-3 lg:space-x-4">
          <a href="mailto:maithonkambouabonmai2018@gmail.com" target="_blank" className="text-slate-400 hover:text-slate-300"><i className="fa-solid fa-envelope text-xl md:text-3xl hover:scale-110"></i></a>
          <a href="https://www.linkedin.com/in/maithonkambou-abonmai-539995200/" target="_blank" className="text-slate-400 hover:text-slate-300 "><i className="fa-brands fa-linkedin-in text-xl md:text-3xl hover:scale-110"></i></a>
          <a href="https://github.com/Maithon921" target="_blank" className="text-slate-400 hover:text-slate-300 "><i className="fa-brands fa-github text-xl md:text-3xl hover:scale-110"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-500 mt-6 font-light italic">
        ©2025 Online Library System. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
