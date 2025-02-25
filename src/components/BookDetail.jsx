import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import Book from "./Book";

function BookDetail() {
  const bookShow = useSelector((state) => state.BookData.value);
  const { id } = useParams();
  const navigate = useNavigate();
  const book = bookShow.filter((one) => one.id == id);
  const moreCat = bookShow.filter((cat) => cat.category == book[0].category);

  return (
    <div>
      {book.map((detail) => {
        return (
          <div
            key={detail.id}
            className=" w-full min-h-screen bg-gradient-to-b from-indigo-100 to-white pt-2 "
          >
            <img
              className="ml-4 w-9 h-9 hover:scale-105"
              onClick={() => navigate(-1)}
              src="https://cdn-icons-png.flaticon.com/512/0/340.png"
              alt=""
            />
            <div className="flex justify-center items-end">
              <div className="flex flex-col border max-w-sm mt-1 mb-5 md:max-w-lg rounded-xl overflow-hidden shadow-xl bg-gray-200 border-gray-300">
                <img src={detail.image} alt="" className="w-full" />
                <div className="p-4 md:p-5 gap-2 md:gap-4 md:whitespace-normal leading-snug md:leading-relaxed">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-800">
                    Title: {detail.title}
                  </h1>
                  <p className="text-base text-gray-700">
                    <span className=" font-semibold">Author:</span>{" "}
                    {detail.author}
                  </p>
                  <div className="flex justify-between">
                    <p className="text-base text-gray-700 font-medium">
                      <span className="font-semibold">Price:</span>{" "}
                      {detail.price}
                    </p>
                    <p className="text-base text-yellow-400">
                      <span className="font-semibold text-gray-700">
                        Rating:
                      </span>{" "}
                      ⭐{detail.rating}{" "}
                    </p>
                  </div>
                  <p className="text-sm sm:text-base font-light leading-relaxed text-gray-600 opacity-90">
                    <span className="text-base font-semibold">
                      Description:
                    </span>{" "}
                    {detail.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3">
              <p className="mb-3 pl-2 pb-1 text-lg sm:text-2xl font-semibold text-gray-700 border-b-4 border-gray-900">
                More {detail.category} books
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-stretch flex-wrap items-center justify-center ">
                {moreCat.map((book) => (
                  <Book key={book.id} BookData={book} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BookDetail;
