import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "../utils/bookDataSlice"; 
import { useNavigate } from "react-router";

function AddBook() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bookData = useSelector((state) => state.BookData.value);
    
    // Extract unique categories
    const categories = [...new Set(bookData.map((cat) => cat.category))];

    // Form State
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        description: "",
        price: "",
        image: "",
        rating: "",
        category: "",
        newCategory: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Choose final category (from select or new input)
        const finalCategory = formData.newCategory || formData.category;

        if (!formData.title || !formData.author || !formData.description || !formData.price || !formData.rating || !finalCategory) {
            alert("Please fill all required fields.");
            return;
        }

        const newBook = {
            id: Date.now(),
            title: formData.title,
            author: formData.author,
            description: formData.description,
            price: `₹${parseFloat(formData.price)}`,
            rating: parseFloat(formData.rating),
            image: formData.image || "https://placehold.co/200x150?text=Book",
            category: finalCategory,
        };

        dispatch(addBook(newBook)); // Add to Redux store
        navigate(`/bookDetail/${newBook.id}`) // redirect to view detail
        // Reset form
        setFormData({
            title: "",
            author: "",
            description: "",
            price: "",
            image: "",
            rating: "",
            category: "",
            newCategory: "",
        });
    };

    return (
        <div className="flex justify-center items-center w-full bg-gradient-to-b from-indigo-100 to-white p-3">
            <div className="flex flex-col min-w-[300px] flex-1 max-w-lg bg-sky-100 p-3 rounded-xl shadow-xl bg-gradient-to-b from-gray-900 via-gray-800 to-blue-800">
                <h1 className="text-2xl sm:text-3xl text-center font-bold border-b-4 text-white border-gray-100">
                    Enter Book Details
                </h1>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 my-6">
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Book Title"
                        required
                        className="border focus:ring-2 focus:ring-blue-300 outline-none py-3 px-2 rounded-xl bg-gray-700 text-gray-200"
                    />
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        placeholder="Author Name"
                        required
                        className="border focus:ring-2 focus:ring-blue-300 outline-none py-3 px-2 rounded-xl bg-gray-700 text-gray-200"
                    />
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                        required
                        className="border focus:ring-2 focus:ring-blue-300 outline-none py-3 px-2 rounded-xl bg-gray-700 text-gray-200"
                    />
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Price (in Rupee)"
                        required
                        className="border focus:ring-2 focus:ring-blue-300 outline-none py-3 px-2 rounded-xl bg-gray-700 text-gray-200"
                    />
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Image Link (optional)"
                        className="border focus:ring-2 focus:ring-blue-300 outline-none py-3 px-2 rounded-xl bg-gray-700 text-gray-200"
                    />
                    <input
                        type="number"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        min={1}
                        max={5}
                        step="0.1"
                        required
                        placeholder="Rating (1-5)"
                        className="border focus:ring-2 focus:ring-blue-300 outline-none py-3 px-2 rounded-xl bg-gray-700 text-gray-200"
                    />

                    {/* Category Selection */}
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="border focus:ring-2 focus:ring-blue-300 outline-none py-3 px-2 rounded-xl bg-gray-700 text-gray-200"
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>

                    <p className="text-center text-gray-500">or</p>

                    <input
                        type="text"
                        name="newCategory"
                        value={formData.newCategory}
                        onChange={handleChange}
                        placeholder="Enter New Category"
                        className="border focus:ring-2 focus:ring-blue-300 outline-none py-3 px-2 rounded-xl bg-gray-700 text-gray-200"
                    />

                    <button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 rounded-2xl text-lg transition">
                        Add Book
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;

