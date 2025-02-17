import { Link } from "react-router";

function Book({BookData}){
    return(
        <div className="w-[260px] border-0  overflow-hidden  bg-indigo-950  rounded-2xl shadow-lg shadow-indigo-700/50 text-white">
            <img src={BookData.image} alt="" className="w-full"/>
            <div className="mt-2 p-3">
                <div className="flex justify-between mb-2">
                    <h1 className="text-lg font-bold">{BookData.title}</h1> <span className="text-yellow-400 " >⭐{BookData.rating}</span>
                </div>
                <h2 className="text-sm font-semibold text-gray-300 mb-1">{BookData.author}</h2>
                <div className="flex justify-between">
                <p className="font-semibold text-sm text-slate-500">{BookData.category}</p>
                <Link to={`/bookDetail/${BookData.id}`}  className=" bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-full shadow-md shadow-indigo-500/50">More</Link>
                </div>
            </div>
        </div>
    )
}

export default Book;