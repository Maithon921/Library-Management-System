import {Link, useRouteError } from "react-router";

function Error(){
    const param = useRouteError()
    return(
        <div className="bg-gray-900 p-3 min-h-dvh min-w-full text-gray-300 flex justify-center items-center flex-col">
        <h1 className="text-9xl font-bold ">{param.status}</h1>
        <p className="text-center m-4 leading-relaxed font-light text-slate-300 tracking-wide whitespace-break-spaces">Ooops.... something is Wrong. <br /> The page you are looking for is {param.statusText}</p>
        <Link className="border tracking-wide px-1 rounded-md border-gray-700 shadow-inner shadow-slate-700 hover:bg-gray-800">Home</Link>
        </div>
    )
}

export default Error;