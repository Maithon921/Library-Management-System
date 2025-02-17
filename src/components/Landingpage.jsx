import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Landingpage() {
  const stores = useSelector((state) => state.BookData.value);
  const  categories =  [...new Set(stores.map((cat)=> cat.category))]
  const popularBooks = stores.filter((rat)=>rat.rating > 4.8);
  const [showAll, setShowAll] = useState(false);
  const [showBook, setShowBook] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
      navigate(`/browsebook?category=${category}`);
  }

  return (
    <div className="min-h-dvh bg-gradient-to-b from-indigo-100 to-white ">
      <header className=" text-center min-h-64 p-1 flex flex-col justify-center items-center bg-gray-900 mb-6 shadow-lg">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:mb-5 font-bold bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text ">
          Welcome to Your Next Great Adventure
        </h1>
        <p className="text-sm sm:text-lg mt-2 mb-6 p-1 text-slate-400">
          Discover a World of Books Awaiting You!
        </p>
      </header>

      <section className="flex flex-col sm:flex-row min-w-dvw">
        <div className="mb-6 bg-white flex-1 shadow-md rounded-lg m-5 p-3 ">
          <h2 className="text-2xl font-bold py-3 border-b-2 border-slate-900 text-slate-700">
            Book Categories
          </h2>
          <div className="flex flex-wrap gap-3 p-5">
            {categories.slice(0, showAll ? categories.length:9).map((category, index) => (
              <p onClick={() => handleCategoryClick(category)}
                key={index}
                className="text-base text-nowrap text-center border-0 rounded-lg text-slate-600 shrink grow basis-1/4 bg-slate-200 p-4 hover:bg-slate-800 hover:text-blue-500 transition-colors duration-500 cursor-pointer"
              >
                {category}
              </p>
            ))}
            
          </div>
         <div className="flex justify-center">
         <button onClick={()=> setShowAll(!showAll)} className="text-base rounded-lg p-1 border bg-blue-600 text-white hover:bg-blue-500">{showAll ? "See less": "See more"}</button>
         </div>
        </div>

        <div className="m-5 p-3 bg-white flex flex-col sm:flex-1 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold border-b-2 border-slate-900 text-slate-700 py-3 ">
            Popular Books
          </h2>
          <div className="pl-5 space-y-1 pt-1">
            {popularBooks.slice(0, showBook ? popularBooks.length : 7).map((book) => (
                <p key={book.id} onClick={()=> navigate(`/bookDetail/${book.id}`)} className="text-blue-500 cursor-pointer text-lg hover:underline">
                  {book.title}
                </p>
            ))}
          </div>
          <div className="text-center mt-3">
            <button onClick={() => setShowBook(!showBook)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              {showBook ? "Hide" : "View More Popular Books" }
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landingpage;
