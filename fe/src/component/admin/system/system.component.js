import { Link, Outlet } from "react-router-dom";
export function System() {
    return (
        <>
            <div className="mt-20">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-blueGray-700 underline">
                                Systems
                            </h3>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <Link to={'create'}>
                                <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                    <i className="fa fa-plus"></i>  Add System
                                </button>
                            </Link>
                        </div>

                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}