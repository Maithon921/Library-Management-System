import { useSelector } from "react-redux";
import Book from "./Book";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function BrowseBook() {
  const Bookdata = useSelector((state) => state.BookData.value);
  const [text, setText] = useState("");
  const [filtered, setFiltered] = useState(Bookdata);
  
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const selectedCategory = queryParam.get("category");



  // Function to group books by category
  function groupBooksByCategory(books) {
    return books.reduce((acc, book) => {
      if (!acc[book.category]) {
        acc[book.category] = [];
      }
      acc[book.category].push(book);
      return acc;
    }, {});
  }

  // Function to handle search
  function handleSearch() {
    const searchedBooks = Bookdata.filter(
      (book) =>
        book.title.toLowerCase().includes(text.toLowerCase().trim()) ||
        book.author.toLowerCase().includes(text.toLowerCase().trim()) ||
        book.category.toLowerCase().includes(text.toLowerCase().trim())
    );
    setFiltered(searchedBooks);
  }

  // Group books by category whenever filtered changes
  const categorizedBooks = groupBooksByCategory(filtered);

  // to get category to scroll
  const categoryRefs = useRef({})

  // Scroll to selected category on load
  useEffect(() => {
    if(selectedCategory  && categoryRefs.current[selectedCategory]){
      categoryRefs.current[selectedCategory].scrollIntoView();
    }
  }, [selectedCategory])

  return (
    <div className="flex flex-col flex-1 items-center px-2 bg-gradient-to-b from-indigo-100 to-white ">

        <img className="w-12 h-12 border-0 overflow-hidden p-1 rounded-full fixed bottom-3 right-1 cursor-pointer " onClick={() => window.scrollTo({top:0, left:0, behavior: "smooth",})} src="https://thumbs.dreamstime.com/b/up-arrow-icon-flat-black-round-button-vector-illustration-design-isolated-142988552.jpg" alt="" />
      
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text text-center mt-6">
        Find Your Next Favorite Read
      </h1>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-800 rounded-3xl shadow-md h-14 shadow-gray-700/50 w-full max-w-md my-8">
      
        <input
          type="text"
          placeholder="Search for books..."
          name="search"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
            if(e.target.value ==""){
              setFiltered(Bookdata)
            }
          }}
          className="flex-1 bg-transparent text-white placeholder-gray-400 px-4 py-2 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-indigo-700 hover:bg-indigo-800 transition-colors duration-300 text-yellow-200 px-3 sm:px-4 h-full rounded-r-3xl shadow-md"
        >
          Search
        </button>
      </div>

      {/* Render Books by Category */}
      <div className="w-full max-w-6xl">
        {Object.entries(categorizedBooks).map(([category, books]) => (
          <div key={category} ref={(el) => (categoryRefs.current[category] = el)} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-indigo-900 pb-1 px-1">{category} Books 📚</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {books.map((book) => (
                <Book key={book.id} BookData={book} />
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default BrowseBook;


